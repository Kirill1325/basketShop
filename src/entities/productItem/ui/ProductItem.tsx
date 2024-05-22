import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { productType } from '../model/types';
import { useState } from 'react';
import { Button, CardActions, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { AddToWishlistIcon } from '../../../features/addToWishlist';

interface ProductItemProps {
  product: productType
}

export const ProductItem = ({ product }: ProductItemProps) => {

  // console.log(product.onSale)

  const [isShown, setIsShown] = useState(false)

  return (
    <Link to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
      <Card sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 345,
        minHeight: 360,
        boxShadow: 0,
        cursor: 'pointer',
        '&:hover': {
          boxShadow: 3,
        },
      }}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <CardMedia
          sx={{ height: 200 }}
          image={isShown ? product.imgHover : product.img}
          title={`${product.brandName} ${product.model}`}
        />
        <CardContent sx={{ paddingBottom: 0 }}>
          <Typography variant="body2" color="text.secondary">
            {product.price}
          </Typography>
          <Typography sx={{ fontSize: '.9em' }} component="div">
            {product.brandName.concat(' ').concat(product.model)}
          </Typography>
        </CardContent>
        {isShown &&
          <CardActions sx={{ marginTop: 'auto' }}>
            <AddToWishlistIcon product={product} />
            <Grid sx={{ position: 'absolute', bottom: 0, left: -20 }} container >
              {product.sizes.map(size =>
                <Grid item md={2} key={size}>
                  <Button
                    sx={{
                      padding: 0,
                      margin: 0
                    }}
                  >{size}</Button>
                </Grid>
              )}
            </Grid>
          </CardActions>
        }
      </Card>
    </Link>
  );
}

