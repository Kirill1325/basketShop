import { Container } from "@mui/material"
import { ProductSlider } from "../../../widgets/productSlider"
import { ProductDescription } from "../../../widgets/productDescription"

export const ProductPage = () => {

    return (
        <Container sx={{display: 'flex'}}>
            <ProductSlider />
            <ProductDescription />
        </Container>
    )
}
