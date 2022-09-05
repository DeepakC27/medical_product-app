import styled from "@emotion/styled"
import { Box, Image } from '@chakra-ui/react'
import historyIcon from 'assets/common/history.svg'

export const BackButton = styled(Image)`
    height: 20px;
    width: 20px;
    margin-bottom: 16px;
    cursor: pointer;
    transform: rotate(180deg);
`

export const PageLayout = styled(Box)`
    padding: 35px 20px 35px;
    position: relative;
`

export const SearchHeader = styled(Box)`
    margin-bottom: 18px;
`

export const SearchResults = styled(Box)`
    h3 {
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
        margin-bottom: 16px;
    }
    ul {

        &.previous_search_List {
            list-style-image: url(${historyIcon});
            padding-left: 20px;
        }
        li {
            margin-bottom: 16px;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
        }
    }
`