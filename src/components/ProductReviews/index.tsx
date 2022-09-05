import { Box, Image } from '@chakra-ui/react'
import { Wrapper, StarRating, Reviews, ReviewImage, StarIconComp } from './style'
import review_Avatars from 'assets/common/review_Avatars.svg'
import StarIcon from 'assets/products/star.svg'
import rightArrow from 'assets/common/greyedOutArrow.svg'

interface IProps {
    rating: number,
    reviewCount: number
}

const ProductReviews = (props: IProps) => {
    const {
        rating,
        reviewCount
    } = props
    return <Wrapper>
        <Box>
            <StarRating>
                {[1,2,3,4,5].map((i, idx) =>
                    <StarIconComp imgSrc={StarIcon} isFilled={i <= rating} key={'star_idx-' + idx} />
                )}
                <p>{rating}</p>
            </StarRating>
            <Reviews>
                <span>{reviewCount} Reviews</span>
                <Image src={rightArrow} alt={'review arrow'} />
            </Reviews>
        </Box>
        <ReviewImage src={review_Avatars} alt={'reviews-images'} />
    </Wrapper>
}

export default ProductReviews