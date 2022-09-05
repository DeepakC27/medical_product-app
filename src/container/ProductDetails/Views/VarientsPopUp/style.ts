import styled from "@emotion/styled"
import { Box, Flex } from '@chakra-ui/react'

export const VariantsPopUpWrapper = styled(Box)`
    padding: 32px 18px 8px;
    h4 {
        font-size: 16px;
        font-weight: 500;
        line-height: 21px;
        letter-spacing: 0.005em;
    }
`

export const VariantSection = styled(Box)`
    padding: 16px 0;
    .color_variant_section {
        margin-left: -18px;
        > div:first-child {
            margin-left: 18px;
        }
    }
`

export const Type = styled(Flex)`
    margin-bottom: 16px;
    justify-content: space-between;
    width: 100%;
    font-weight: 500;
    p:nth-of-type(1) {
        font-size: 12px;
        line-height: 18px;
        span {
            font-weight: 700;
            color: var(--primary-color);
        }
    }

    p:nth-of-type(2) {
        font-size: 10px;
        line-height: 18px;
        color: var(--primary-color);
        opacity: .5;
    }
`

export const TypeList = styled(Flex)`
    grid-gap: 8px;
    overflow-x: scroll;
    width: calc(100% + 32px);
    > div:last-child {
        margin-right: 20px;
    }
`

export const Pills = styled(Flex)<{ isActivePill: boolean }>`
    justify-content: center;
    grid-gap: 16px;
    height: 50px;
    align-items: center;
    border: 1px solid ${props => props.isActivePill ? 'var(--primary-color)' : '#EBEBEB'};
    ${props => props.isActivePill && `
        color: var(--primary-color);
    `}
    border-radius: 8px;
    font-size: 11px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    padding: 8px 16px;
    cursor: pointer;
`

export const ColorPills = styled(Pills)<{ colorCode: string, addBorder: boolean, isActivePill: boolean }>`
    min-width: 120px;
    color: var(--secondary-color);
    > div {
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background: ${props => props.colorCode};
        ${props => props.addBorder && `
            border: 1px solid black;
        `}
    }
`
