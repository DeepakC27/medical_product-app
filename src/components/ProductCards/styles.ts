import styled from "@emotion/styled"
import { Box, Image } from '@chakra-ui/react'

export const ProductCardBox = styled(Box)`
    width: 100%;
    height: fit-content;
    background: var(--background-color);
    box-shadow: 0px 5px 50px -9px var(--card-box-shadow);
    border-radius: 8px;
    padding: 0 8px 11px;
    cursor: pointer;
`

export const WhislistedImage = styled(Image)`
    position: absolute;
    top: 0;
    right: 0;
    padding: 8px;
    border-radius: 50%;
    background: var(--background-color);
    margin: 8px;
    box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.05);
`

export const ProductImageBox = styled(Box)`
    border-radius: 8px;
    position: relative;
`

export const ProductImage = styled(Image)`
    margin: 0 auto;
`

export const Pricing = styled.div<{ hasDiscountedPrice: boolean }>`
    span {
        font-size: 14px;
        font-weight: 700;
        line-height: 18px;
        letter-spacing: 0.005em;
    }
    ${props => props.hasDiscountedPrice && `
        span:nth-of-type(1) {
            font-size: 12px;
            color: var(--light-grey-text);
            text-decoration: line-through;
            margin-right: 4px;
        }
        span:nth-of-type(2) {
            color: #E24747;
        }
    `}
`

export const Heading = styled.h4`
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.005em;
    color: var(--light-grey-text);
    margin: 8px 0 6px;
`
