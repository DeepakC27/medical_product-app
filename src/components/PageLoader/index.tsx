import { Spinner } from '@chakra-ui/react'
import { Wrapper } from './styles'

const PageLoader = () => {
    return (
        <Wrapper>
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                size='xl'
                />
        </Wrapper>
    )
}

export default PageLoader