import { TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { ProductTabs } from './style'

interface IProps {
    toggleTabs: () => void
    selectedTabIdx: number
    description: string
    materials: string
}

export const ProductContent = (props: IProps) => {
    const {
        toggleTabs,
        description,
        materials,
        selectedTabIdx
    } = props
    return <ProductTabs variant='unstyled'>
        <TabList className={'product-tabs'}>
            <Tab onClick={toggleTabs} className={`${selectedTabIdx === 0 ? 'isActive_tab' : ''}`}>
                Description
            </Tab>
            <Tab onClick={toggleTabs} className={`${selectedTabIdx === 1 ? 'isActive_tab' : ''}`}>
                Materials
            </Tab>
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