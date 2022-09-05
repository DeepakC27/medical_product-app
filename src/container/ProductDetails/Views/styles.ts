import styled from "@emotion/styled"
import { Image, Box, Flex } from '@chakra-ui/react'

export const ProductImageWrapper = styled.div`
    width: 100%;
    position: relative;
    position: fixed;
    top: 0;
    height: 319px;
    > div {
        background: linear-gradient(180deg, #142F75 -175%, rgba(20, 47, 117, 0) 100%);
        height: 108px;
        width: 100%;
        position: absolute;
        padding: 56px 20px 20px;
    }

`

export const BackButton = styled(Image)`
    height: 32px;
    width: 32px;
    cursor: pointer;
`

export const ProductImage = styled(Image)`
    max-width: 400px;
    margin: 0 auto;
`

export const PricingSection = styled(Flex)`
    justify-content: space-between;
    align-items: center;
    margin; 12px 0 28px;
    p {
        margin: 0;
        font-size: 20px;
        font-weight: 700;
        line-height: 26px;
        color: var(--primary-color);
    }
`

export const ProductDetailsWrapper = styled(Box)`
    background: var(--background-color);
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.08);
    border-radius: 20px 20px 0px 0px;
    padding: 24px 20px;
    position: sticky;
    margin-top: 276px;
    top: 200px;
    padding-bottom: 90px;
    h3 {
        font-size: 20px;
        font-weight: 500;
        line-height: 26px;
        margin-bottom: 12px;
    }
`

export const VariantsWrapper = styled(Box)`
    margin: 28px 0 19px;
    p {
        margin: 0 0 16px;
        font-size: 14px;
        font-weight: 700;
        line-height: 18px;
    }
`

export const VariantButton = styled(Flex)`
    background: var(--light-grey-background);
    justify-content: space-between;
    border-radius: 8px;
    padding: 20px 12px;
    cursor: pointer;
    ul {
        display: flex;
        list-style: none;
        grid-gap: 8px;
        li {
            font-size: 14px;
            font-weight: 700;
            line-height: 15px;
            span {
                color: var(--primary-color);
            }
        }
    }
`

export const CartButtonFooter = styled.div<{ isAddedToCart: boolean }>`
    display: flex;
    position: fixed;
    bottom: 0;
    padding: 16px 20px;
    width: -webkit-fill-available;
    border-top: 1px solid var(--seperator-color);
    grid-gap: 16px;
    height: 40px;
    box-sizing: content-box;
    background: white;
    > img {
        border: 1px solid var();
        padding: 10px;
        border-radius: 8px;
        cursor: pointer;
    }
    button {
        width: 100%;
        grid-gap: 12px;
        background-color: ${props => props.isAddedToCart
            ? 'var(--button-sec-bck-color)' : 'var(--button-bck-color)'};
        color: var(--button-txt-color);
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
        &:hover, &:focus {
            outline: none;
            background-color: ${props => props.isAddedToCart
                ? 'var(--button-sec-bck-color)' : 'var(--button-bck-color)'};
        }
    }
`