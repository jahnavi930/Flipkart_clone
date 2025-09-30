import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography, IconButton, styled } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeFromWishlist } from '../../redux/actions/WishListActions';

const WishlistContainer = styled(Box)`
  padding: 24px;
  max-width: 900px; /* optional: limits container width for better look */
  margin: auto; /* centers the container */
`;

const ItemContainer = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  background-color: white;
  padding: 12px;
  border-radius: 6px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
`;

const ProductImage = styled('img')({
  width: 140,       // increased width
  height: 140,      // increased height
  objectFit: 'contain',
  marginRight: 16,
  borderRadius: 4,
  border: '1px solid #ddd'
});

const ProductDetails = styled(Box)`
  flex-grow: 1;
`;

const Brand = styled(Typography)`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 4px;
`;

const Price = styled(Typography)`
  color: #388e3c; /* green */
  font-weight: 600;
  margin-right: 12px;
  display: inline-block;
`;

const Discount = styled(Typography)`
  color: #d32f2f; /* red */
  font-weight: 600;
  display: inline-block;
`;

const FlipkartAssuranceLogo = styled('img')({
  width: 80,
  height: 40,
  objectFit: 'contain',
  marginRight: 8,
  verticalAlign: 'middle',
});

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector(state => state.wishlist.wishlistItems);

  const handleDelete = (id) => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <WishlistContainer>
      <Typography variant="h4" gutterBottom>
        My Wishlist ({wishlistItems.length})
      </Typography>
      {wishlistItems.length === 0 ? (
        <Typography variant="subtitle1">Your wishlist is empty.</Typography>
      ) : (
        wishlistItems.map(item => (
          <ItemContainer key={item.id}>
            <ProductImage src={item.detailUrl} alt={item.title?.shortTitle || 'product'} />
            <ProductDetails>
              <Brand>{item.brand || item.title?.shortTitle || 'No Brand'}</Brand>
              <Box display="flex" alignItems="center">
                <FlipkartAssuranceLogo
                  src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
                  alt="Flipkart Assurance"
                />
                <Price>₹{item.price?.cost || 'N/A'}</Price>
                <Discount>{item.price?.discount || ''}</Discount>
              </Box>
            </ProductDetails>
            <IconButton onClick={() => handleDelete(item.id)} aria-label="delete">
              <DeleteIcon color="error" />
            </IconButton>
          </ItemContainer>
        ))
      )}
    </WishlistContainer>
  );
};

export default Wishlist;
