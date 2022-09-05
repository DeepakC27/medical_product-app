import {
    SectionHeader,
    CategoriesListWrapper,
    ProductsListWrapper,
    Pills
} from './styles'
import { Box, Heading, Image } from '@chakra-ui/react'
import { ProductsList } from 'config/productsList'
import ProductCard from 'components/ProductCards'
import CategoriesList from 'config/categoriesList'
import RightArrow from 'assets/common/rightArrow.svg'

interface IProps {
    selectionHandler: (pid: string) => void
}

const ContentSection = (props: IProps) => {
    const {
        selectionHandler
    } = props
    return <>
        <Box margin={'26px 0 33px'}>
            <SectionHeader>
                <Heading as={'h2'}>Categories</Heading>
                <p>See all <Image src={RightArrow} alt={'right arrow'} /></p>
            </SectionHeader>
            <CategoriesListWrapper>
                {CategoriesList.map((c, idx) => (
                    <Pills key={'category_' + idx}>
                        <p>{c.text}</p>
                        <Image src={c.image} alt={'category-image'} />
                    </Pills>
                ))}
            </CategoriesListWrapper>
        </Box>
        <Box>
            <SectionHeader>
                <Heading as={'h2'}>Products</Heading>
                <p>See all <Image src={RightArrow} alt={'right arrow'} /></p>
            </SectionHeader>
            <ProductsListWrapper>
                {ProductsList.map(item => (
                    <ProductCard
                        key={'product_id-' + item.id}
                        {...item}
                        pid={item.id}
                        whislisted={true}
                        selectionHandler={selectionHandler}
                    />
                ))}
            </ProductsListWrapper>
        </Box>
    </>
}

export default ContentSection