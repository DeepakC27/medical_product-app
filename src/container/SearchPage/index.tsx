import { useState } from 'react'
import {
    Box,
    List,
    ListItem
  } from '@chakra-ui/react'
import SearchInput from "components/SearchInput"
import React from 'react'
import { PageLayout, SearchHeader, SearchResults, BackButton } from './styles'
import RightArrow from 'assets/common/rightArrow.svg'
import { APP_ROUTES } from 'config/enum'
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {
    const [searchValue, setsearchValue] = useState<string>('')
    const navigate = useNavigate()

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setsearchValue(e.target.value)

    const redirectToHomePagẻ = () => navigate(APP_ROUTES.HOME)

    return <PageLayout>
        <BackButton onClick={redirectToHomePagẻ} src={RightArrow} alt={'back-button-icon'} />
        <SearchHeader>
            <SearchInput
                value={searchValue}
                placeholder={'Syringe, Centrifuge, Ventilator'}
                onChangeHandler={handleSearchChange} />
        </SearchHeader>
        <SearchResults>
            <Box>
                <h3>Previous Search</h3>
                <List className={'previous_search_List'}>
                    <ListItem>Surgical tape</ListItem>
                    <ListItem>Dialyzer</ListItem>
                    <ListItem>Ryles tube</ListItem>
                </List>
            </Box>
            <Box marginTop={'32px'}>
                <h3>Top Search</h3>
                <List>
                    <ListItem>Surgical tape</ListItem>
                    <ListItem>Dialyzer</ListItem>
                    <ListItem>Ryles tube</ListItem>
                </List>
            </Box>
        </SearchResults>
    </PageLayout>
}

export default SearchPage