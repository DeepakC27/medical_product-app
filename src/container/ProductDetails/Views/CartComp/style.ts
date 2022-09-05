import styled from "@emotion/styled"
import { Box, Flex } from '@chakra-ui/react'

export const CartSection = styled(Flex)`
    grid-gap: 16px;
`
export const CartButton = styled(Flex)<{ isDisabled?: boolean }>`
    border: 1px solid var(--primary-color);
    color: var(--primary-color);
    cursor: pointer;
    height: 21.5px;
    width: 21.5px;
    border-radius: 8px;
    font-weight: 700;
    align-items: center;
    justify-content: center;
    padding-bottom: 3px;
    ${props => props.isDisabled && `
        border-color: grey;
        color: grey;
        cursor: no-drop;
    `}
`

export const CardValue = styled(Box)`
    color: var(--primary-color);
`