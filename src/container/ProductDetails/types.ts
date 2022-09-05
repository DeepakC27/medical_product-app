type IPricingTypes = {
    price: number,
    discountedPrice: number,
    currency: string
}

type IProductsType = {
    id: string,
    name: string,
    image: string,
    pricing: IPricingTypes
}

type IProductVarient = {
    colorList: {text: string, colorCode: string }[],
    sizeList: string[],
    intensityList: string[]
}

type IProductInfoType = {
    id: string,
    name: string,
    image: string,
    pricing: {
        price: number,
        discountedPrice: number,
        currency: string
    },
    varients: IProductVarient,
    description: string,
    materials: string,
    reviews: {
        rating: number,
        reviewsCount: number,
    }
}

export type {
    IProductsType,
    IProductInfoType,
    IPricingTypes,
    IProductVarient
}