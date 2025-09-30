// src/Components/Product/ProductCard.js
/*import React from 'react';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../../redux/actions/WishListActions';
import { Card, Typography, IconButton, Box } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleWishlistClick = () => {
    dispatch(addToWishlist(product));
  };

  return (
    <Card style={{ padding: 16, margin: 8, maxWidth: 250 }}>
      <img
        src={product.detailUrl}
        alt={product.title.shortTitle}
        width="100%"
        height="200"
        style={{ objectFit: 'contain' }}
      />
      <Box mt={2}>
        <Typography variant="subtitle1">{product.title.shortTitle}</Typography>
        <Typography variant="body2">₹{product.price.cost}</Typography>
        <Typography variant="body2" color="error">{product.price.discount}</Typography>

        {/* Heart icon to add to wishlist 
        <IconButton onClick={handleWishlistClick}>
          <FavoriteBorderIcon color="error" />
        </IconButton>
      </Box>
    </Card>
  );
};

export default ProductCard;*/
