import { ImageList, ImageListItem, Paper } from "@mui/material"
import { productType } from "../../../entities/productItem"
interface ProductSliderProps {
    product: productType
}

export const ProductSlider = ({ product }: ProductSliderProps) => {

    return (
        product &&
        <div style={{ display: 'flex', gap: 30 }}>
            <ImageList sx={{ width: 130, height: 850 }} cols={1} rowHeight={150}>
                {product.sliderPics.map((pic, idx) =>
                    <ImageListItem key={idx}>
                        <img
                            srcSet={`${pic}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            src={`${pic}?w=164&h=164&fit=crop&auto=format`}
                            alt='pic'
                            loading="lazy"
                        />
                    </ImageListItem>
                )}
            </ImageList>
            <Paper>
                <img src={product.img} alt="pic" style={{ width: 550 }} />
            </Paper>
        </div>
    )
}
