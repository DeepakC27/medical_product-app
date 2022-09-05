import { TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { ProductTabs } from './style'

interface IProps {
    description: string
    materials: string
}

export const ProductContent = (props: IProps) => {
    const {
        description,
        materials
    } = props
    return <ProductTabs variant='unstyled'>
        <TabList className={'product-tabs'}>
            <Tab>Description</Tab>
            <Tab>Materials</Tab>
        </TabList>
        <TabPanels className={'tab_panels'}>
            <TabPanel>
                <p dangerouslySetInnerHTML={{ __html: description}} />
            </TabPanel>
            <TabPanel>
                <p dangerouslySetInnerHTML={{ __html: materials}} />
            </TabPanel>
        </TabPanels>
    </ProductTabs>
}

export default ProductContent