import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
    ProductDetailsWrapper,
    PricingSection,
    VariantsWrapper,
    VariantButton,
} from './Views/styles'
import GreyedOutArrow from 'assets/common/greyedOutArrow.svg'
import { ProductDescpList } from 'config/productsList'
import { Image } from '@chakra-ui/react'
import BottomDrawer from 'components/BottomDrawer'
import { APP_ROUTES } from 'config/enum'
import ProductImageHeader from './Views/ProductImageHeader'
import VariantsPopUpContent from './Views/VarientsPopUp'
import CartComp from './Views/CartComp'
import Footer from './Views/Footer'
import ProductContent from './Views/ProductContent'
import ProductReviews from 'components/ProductReviews'


const ProductDetails = () => {
    const {
        productId
    } = useParams()
    const navigate = useNavigate()
    const productDetails = ProductDescpList[0]
    const [cartValue, setCartValue] = useState<number>(1)
    const [isAddedToCart, setisAddedToCart] = useState<boolean>(false)
    const [showVariantsPopUp, setshowVariantsPopUp] = useState<boolean>(false)
    const [selectedColorVariant, setselectedColorVariant] = useState<string>('')
    const [selectedSizeVariant, setselectedSizeVariant] = useState<string>('')
    const [selectedIntensityVariant, setselectedIntensityVariant] = useState<string>('')
    

    useEffect(() => {
        if (!productId) {
            navigate('/')
        } else {
            // set default variants...
            setselectedColorVariant(productDetails.varients.colorList[0].text)
            setselectedSizeVariant(productDetails.varients.sizeList[0])
            setselectedIntensityVariant(productDetails.varients.intensityList[0])
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productId])

    const toggleVariantPopUp = () => setshowVariantsPopUp(!showVariantsPopUp)
    const toggleIsAddedToCart = () => setisAddedToCart(!isAddedToCart)
    
    const handleBackNav = () => navigate(APP_ROUTES.HOME)
    
    return <>
        <ProductImageHeader image={productDetails.image} handleBackNav={handleBackNav} />
        <ProductDetailsWrapper>
            <h3>{productDetails.name}</h3>
            <PricingSection>
                <p>
                    {productDetails.pricing.currency + productDetails.pricing.price}
                </p>
                <CartComp cartValue={cartValue} setCartValue={setCartValue} />
            </PricingSection>
            <VariantsWrapper>
                <p>Choose Varient</p>
                <VariantButton onClick={toggleVariantPopUp}>
                    <ul>
                        <li>Color: <span>{selectedColorVariant}</span></li>
                        <li>Size: <span>{selectedSizeVariant}</span></li>
                        <li>Intensity: <span>{selectedIntensityVariant}</span></li>
                    </ul>
                    <Image src={GreyedOutArrow} alt={'edit-button'} />
                </VariantButton>
            </VariantsWrapper>
            <ProductContent
                description={productDetails.description}
                materials={productDetails.materials}
            />
            <ProductReviews rating={4.9} reviewCount={98} />
        </ProductDetailsWrapper>
        <Footer isAddedToCart={isAddedToCart} toggleIsAddedToCart={toggleIsAddedToCart} />
        <BottomDrawer isOpen={showVariantsPopUp} onClose={toggleVariantPopUp}
            customStyles={{
                borderRadius: '8px 8px 0 0'
            }}>
            <VariantsPopUpContent
                variantsList={productDetails.varients}
                selectedColorVariant={selectedColorVariant}
                selectedSizeVariant={selectedSizeVariant}
                selectedIntensityVariant={selectedIntensityVariant}
                handleColorSelection={setselectedColorVariant}
                handleSizeSelection={setselectedSizeVariant}
                handleIntensitySelection={setselectedIntensityVariant}
            />
        </BottomDrawer>
    </>
}

export default ProductDetails