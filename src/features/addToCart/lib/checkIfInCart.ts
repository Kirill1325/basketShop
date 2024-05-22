import { productApi } from "../../../entities/productItem"

export const useIfSizeInCart = (productId: number, size: string) => {

    const { data: product } = productApi.useGetProductFromCartByIdQuery(productId)

    // console.log(product)

    if(size !== null){
        return product?.sizes.includes(size)
    }
}
