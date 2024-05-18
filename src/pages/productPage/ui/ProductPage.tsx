import { Container } from "@mui/material"
import { ProductSlider } from "../../../widgets/productSlider"
import { ProductDescription } from "../../../widgets/productDescription"
import { productApi } from "../../../entities/productItem"
import { useParams } from "react-router-dom"

export const ProductPage = () => {

    const { productId } = useParams<{ productId: string }>()

    const { data: product } = productApi.useGetProductsByIdQuery(productId)

    return (
        product &&
        <Container sx={{ display: 'flex' }}>
            <ProductSlider product={product} />
            <ProductDescription product={product} />
        </Container>
    )
}
