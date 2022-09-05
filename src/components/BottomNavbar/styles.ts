import styled from "@emotion/styled"
import { Flex, Image } from '@chakra-ui/react'

export const Wrapper = styled(Flex)`
    position: fixed;
    justify-content: space-between;
    padding: 20px;
    left: 0;
    bottom: 0;
    width: 100%;
    background: white;
    border-top: 1px solid var(--seperator-color);
`

export const NavbarIcon = styled(Image)`
    height: auto;
    width: 24px;
`