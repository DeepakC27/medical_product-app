import styled from "@emotion/styled"
import { Image, Flex, Grid, Box } from '@chakra-ui/react'

export const PageLayout = styled(Box)`
    padding: 28px 20px;
    padding-bottom: 80px;
`

export const PageHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 16px;
    h1 {
        margin: 0;
        font-weight: 700;
        font-size: 24px;
        line-height: 33.6px;
        color: var(--secondary-color);
    }
`

export const BellIcon = styled(Image)`
`

export const SectionHeader = styled(Flex)`
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 24px;
    h2 {
        font-size: 20px;
        line-height: 26px;
    }
    img {
        display: inline;
        margin-left: 8px;
    }
`

export const CategoriesListWrapper = styled(Flex)`
    grid-gap: 8px;
    overflow-x: scroll;
    width: calc(100% + 20px);
    > div:last-child {
        margin-right: 20px;
    }
`

export const Pills = styled(Box)`
    min-width: fit-content;
    background: var(--background-color);
    border: 1px solid #CEDCFF;
    border-radius: 8px;
    position: relative;
    display: grid;
    grid-template-columns: 1fr auto;
    p {
        height: auto;
        margin: auto;
        padding-left: 12px;
    }
    img {
        position: relative;
        right: 0;
        bottom: 0;
        height: 56px;
        width: auto;
        border-radius: 8px;
    }
`


export const ProductsListWrapper = styled(Grid)`
    grid-template-columns: 1fr 1fr;
    grid-gap: 21px;
`