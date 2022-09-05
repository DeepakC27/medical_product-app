import SearchIcon from 'assets/common/search_icon.svg'
import { Input, Image } from '@chakra-ui/react'
import { SearchIp } from "./styles"

interface IProps {
    onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string,
    placeholder: string,
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
}

const SearchInput = (props: IProps) => {
    const {
        onChangeHandler,
        value,
        placeholder,
        onFocus
    } = props
    return <SearchIp>
        <Image src={SearchIcon} alt={'search-icon'} />
        <Input placeholder={placeholder}
            onFocus={onFocus}
            onChange={onChangeHandler} value={value} />
    </SearchIp>
}

export default SearchInput