import {
    ProductImageWrapper,
    BackButton,
    ProductImage
} from "./styles"
import Back_icon from 'assets/common/back_icon.svg'

interface IProps {
    image: string,
    handleBackNav: () => void
}

const ProductImageHeader = (props: IProps) => {
    const {
        image,
        handleBackNav
    } = props
    return <ProductImageWrapper>
        <div>
            <BackButton src={Back_icon} onClick={handleBackNav} alt={'back button'} />
        </div>
        <ProductImage src={image} alt={'product-image'} />
    </ProductImageWrapper>
}

export default ProductImageHeader