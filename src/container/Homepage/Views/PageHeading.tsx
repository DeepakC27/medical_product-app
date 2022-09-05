import { Heading } from "components/ProductCards/styles"
import { BellIcon, PageHeader } from "./styles"
import Icon_Notif from 'assets/common/Icon_Notif.svg'


const PageHeading = () => <PageHeader>
    <Heading as={'h1'}>
        Explore What<br/>
        Your Hospital Needs
    </Heading>
    <BellIcon src={Icon_Notif} alt={'page_icon'} />
</PageHeader>

export default PageHeading