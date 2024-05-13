export type sizeType = {
    size: string,
    inBag: boolean
}

export type productType = {
    category: string,
    id: number,
    brandName: string,
    model: string,
    price: string,
    onSale: boolean,
    sizes: sizeType[],
    liked: boolean,
    img: any,
    imgHover: any,
    sliderPics: any[]
}