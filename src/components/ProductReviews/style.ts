import styled from "@emotion/styled"
import { Grid, Image, Flex } from '@chakra-ui/react'

export const Wrapper = styled(Grid)`
    grid-template-columns: 1fr auto;
    background: var(--light-grey-background);
    padding: 16px;
    align-items: center;
    border-radius: 8px;
`

export const StarRating = styled(Flex)`
    grid-gap: 4px;
    p {
        margin-left: 8px;
        font-size: 12px;
        font-weight: 400;
        line-height: 15px;
    }
`

export const StarIconComp = styled.div<{ imgSrc: string, isFilled: boolean }>`
    height: 15px;
    width: 16px;
    background-color: ${props => props.isFilled ? 'var(--yellow)' : 'var(--grey)'};
    mask: url(${props => props.imgSrc}) no-repeat center / contain;
    -webkit-mask: url(${props => props.imgSrc}) no-repeat center / contain;
`

export const Reviews = styled(Flex)`
    grid-gap: 6px;
    align-items: center;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    margin-top: 9px;
    color: var(--light-grey-text);
`

export const ReviewImage = styled(Image)`
    height: 32px;
    width: auto;
`