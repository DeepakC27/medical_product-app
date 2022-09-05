import styled from "@emotion/styled"
import { Tabs } from '@chakra-ui/react'

export const ProductTabs = styled(Tabs)`
    .product-tabs {
        grid-gap: 10px;
        button {
            padding: 8px 12px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 400;
            line-height: 18px;
            color: var(--light-grey-text);
            &[aria-selected="true"] {
                background: #DDEBFF;
                color: #2F5AC7;
                font-weight: 700;
            }
        }
    }
    .tab_panels {
        > div { padding: 22px 0 38px; }
        p {
            color: var(--light-grey-text);
            font-size: 14px;
            font-weight: 400;
            line-height: 24px;
        }
    }
`

