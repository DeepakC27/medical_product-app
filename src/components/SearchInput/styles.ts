import styled from "@emotion/styled"
import { Box } from '@chakra-ui/react'

export const SearchIp = styled(Box)`
    position: relative;
    img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 11px;
        height: 24px;
    }
    input {
        padding: 11px;
        padding-left: 43px;
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
    }
`