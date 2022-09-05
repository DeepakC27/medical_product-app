import {
    Wrapper,
    NavbarIcon
} from './styles'
import Home_Icon from 'assets/navbar/Home.svg'
import Chat_Icon from 'assets/navbar/chatIcon.svg'
import Cart_Icon from 'assets/navbar/cart_Icon.svg'
import Wishlist_Icon from 'assets/navbar/wishlist_Icon.svg'
import Profile_Icon from 'assets/navbar/profile_Icon.svg'

const BottomNavbar = () => {
    const iconList = [
        {
            icon: Home_Icon,
            isActive: true
        }, {
            icon: Chat_Icon,
            isActive: false
        }, {
            icon: Cart_Icon,
            isActive: false
        }, {
            icon: Wishlist_Icon,
            isActive: false
        }, {
            icon: Profile_Icon,
            isActive: false
        }
    ]
    return (
        <Wrapper>
            {iconList.map((i, idx) => (
                <NavbarIcon key={'nav_item-' + idx} src={i.icon} alt={'navbar icon'} />
            ))}
        </Wrapper>
    )
}

export default BottomNavbar