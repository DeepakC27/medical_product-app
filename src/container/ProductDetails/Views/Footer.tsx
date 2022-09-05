import { Image, Button } from '@chakra-ui/react'
import { CartButtonFooter } from "./styles"
import Tick_icon from 'assets/common/tick-icon.svg'
import Wishlist_Icon from 'assets/navbar/wishlist_Icon.svg'

interface IProps {
    isAddedToCart: boolean
    toggleIsAddedToCart: () => void
}

const Footer = (props: IProps) => {
    const {
        isAddedToCart,
        toggleIsAddedToCart
    } = props
    return <CartButtonFooter isAddedToCart={isAddedToCart}>
        <Image src={Wishlist_Icon} alt={'wishlist-icon'} />
        <Button onClick={toggleIsAddedToCart}>
            {isAddedToCart &&
                <Image src={Tick_icon} alt={'tick-icon'} />
            }
            <span>{isAddedToCart ? 'Added to Cart' : 'Add to Cart'}</span>
        </Button>
    </CartButtonFooter>
}

export default Footer