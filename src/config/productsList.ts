import { IProductsType, IProductInfoType } from "container/ProductDetails/types";
import P1 from 'assets/products/p1.png'
import P1_XL from 'assets/products/p1_xl.png'
import P2 from 'assets/products/p2.png'
import P3 from 'assets/products/p3.png'
import P4 from 'assets/products/p4.png'

const ProductsList: IProductsType[] = [
    {
        id: 'E123',
        name: 'Ivoclar Vivadent',
        image: P1,
        pricing: {
            price: 599,
            discountedPrice: 0,
            currency: '$'
        }
    }, {
        id: 'E124',
        name: 'Wall mount X Ray',
        image: P2,
        pricing: {
            price: 999,
            discountedPrice: 0,
            currency: '$'
        }
    }, {
        id: 'E125',
        name: 'Wall mount X Ray - 2',
        image: P3,
        pricing: {
            price: 1999,
            discountedPrice: 0,
            currency: '$'
        }
    }, {
        id: 'E126',
        name: 'Being Foshan Contra',
        image: P4,
        pricing: {
            price: 999,
            discountedPrice: 599,
            currency: '$'
        }
    }
]

const ProductDescpList: IProductInfoType[]  = [
    {
        id: 'E123',
        name: 'Ivoclar Vivadent',
        image: P1_XL,
        pricing: {
            price: 599,
            discountedPrice: 0,
            currency: '$'
        },
        varients: {
            colorList: [{ text: 'Red', colorCode: '#B20606' },
            { text: 'Blue', colorCode: '#1B6EEA' },
            { text: 'White', colorCode: 'white' }],
            sizeList: ['XXL', 'XL', 'L', 'M'],
            intensityList: ['40cd', '30cd', '20cd']
        },
        description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur velit at massa vehicula, quis fringilla urna gravida.<br/><br/>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur velit at massa vehicula, quis fringilla urna gravida.
        `,
        materials: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur velit at massa vehicula, quis fringilla urna gravida.
        `,
        reviews: {
            rating: 4.6,
            reviewsCount: 90,
        }
    }
]

export {
    ProductsList,
    ProductDescpList
}