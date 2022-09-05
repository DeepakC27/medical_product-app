import { CartSection, CartButton, CardValue } from "./style"

interface ICardCompProps {
    cartValue: number,
    setCartValue: (val: number) => void
}
const CartComp = (props: ICardCompProps) => {
    const {
        cartValue,
        setCartValue
    } = props

    const incCartValue = () => setCartValue(cartValue + 1)
    const decCartValue = () => {
        cartValue > 1 && setCartValue(cartValue - 1)
    }

    return <CartSection>
        <CartButton isDisabled={cartValue === 1} onClick={decCartValue}>-</CartButton>
        <CardValue>{cartValue}</CardValue>
        <CartButton onClick={incCartValue}>+</CartButton>
    </CartSection>
}

export default CartComp