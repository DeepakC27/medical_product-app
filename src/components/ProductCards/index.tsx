import { IPricingTypes } from 'container/Homepage/types'
import {
    ProductCardBox,
    WhislistedImage,
    ProductImage,
    Pricing,
    Heading,
    ProductImageBox
} from './styles'
import Wishlist_icon from 'assets/common/wishlist_icon.svg'

interface IProps {
    pid: string,
    image: string,
    name: string,
    whislisted: boolean,
    pricing: IPricingTypes,
    selectionHandler: (pid: string) => void
}

const ProductCard = (props: IProps) => {
    const {
        image,
        name,
        pricing,
        selectionHandler,
        pid
    } = props
    const {
        currency,
        discountedPrice,
        price
    } = pricing

    return <ProductCardBox onClick={() => selectionHandler(pid)}>
        <ProductImageBox>
            <ProductImage src={image} alt={'product-image'} />
            <WhislistedImage src={Wishlist_icon} alt={'wishlist-icon'} />
        </ProductImageBox>
        <Heading>{name}</Heading>
        <Pricing hasDiscountedPrice={discountedPrice > 0}>
            <span>{currency + price}</span>
            {discountedPrice > 0 && <span>{currency + discountedPrice}</span>}
        </Pricing>
    </ProductCardBox>
}

export default ProductCard