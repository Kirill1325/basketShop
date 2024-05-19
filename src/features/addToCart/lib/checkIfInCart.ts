import { productApi } from "../../../entities/productItem"

export const useIfSizeInCart = (productId: number, size: number | null) => {

    const { data: product } = productApi.useGetProductFromCartByIdQuery(productId)

    // console.log(product)

    if(size !== null){
        return product?.sizes.includes(size)
    }
}
