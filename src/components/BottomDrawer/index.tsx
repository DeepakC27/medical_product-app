import {
    Drawer,
    DrawerOverlay,
    DrawerContent
} from '@chakra-ui/react'

interface IProps {
    isOpen: boolean
    onClose: () => void
    customStyles?: object
    children: React.ReactNode
}

const BottomDrawer = (props: IProps) => {
    const {
        isOpen,
        onClose,
        children,
        customStyles
    } = props
    
    return <Drawer placement={'bottom'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent style={customStyles || {}}>
            {children}
        </DrawerContent>
    </Drawer>    
}

export default BottomDrawer