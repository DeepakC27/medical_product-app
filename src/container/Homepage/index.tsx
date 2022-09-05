import {
    PageLayout
} from './Views/styles'
import BottomNavbar from 'components/BottomNavbar'
import { useNavigate } from 'react-router-dom';
import SearchInput from 'components/SearchInput'
import { APP_ROUTES } from 'config/enum'
import PageHeading from './Views/PageHeading'
import ContentSection from './Views/ContentSection'

const HomePage = () => {
    const navigate = useNavigate()
    const selectionHandler = (pid: string) => navigate(`${APP_ROUTES.PRODUCT}/${pid}`)
    const redirectToSearchPage = () => navigate(APP_ROUTES.SEARCH)
    
    return (
        <PageLayout>
            <PageHeading />
            <SearchInput
                value={''}
                onFocus={redirectToSearchPage}
                placeholder={'Syringe, Centrifuge, Ventilator'}
                onChangeHandler={() => {}} />
            <ContentSection selectionHandler={selectionHandler} />
            <BottomNavbar />
        </PageLayout>
    )
}

export default HomePage