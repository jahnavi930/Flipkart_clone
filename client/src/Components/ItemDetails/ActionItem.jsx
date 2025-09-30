import { useState } from 'react';
import { Button, Box, styled } from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';
import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/paytm';

import { addToCart } from '../../redux/actions/cartActions';
import { addToWishlist, removeFromWishlist } from '../../redux/actions/WishListActions';
import { useDispatch, useSelector } from 'react-redux';

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: '40%',
  padding: '40px 0 0 80px',
  [theme.breakpoints.down('md')]: {
    padding: '20px 40px'
  }
}));

const ImageContainer = styled(Box)`
  position: relative;
  width: 95%;
`;

const Image = styled('img')({
  padding: '15px 20px',
  border: '1px solid #f0f0f0',
  width: '100%',
  cursor: 'pointer'
});

const WishlistIcon = styled('div')({
  position: 'absolute',
  top: 8,
  right: 10,
  cursor: 'pointer',
  background: 'white',
  borderRadius: '50%',
  padding: 4,
  boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1
});

const StyledButton = styled(Button)`
  width: 46%;
  border-radius: 2px;
  height: 50px;
  color: #FFF;
`;

const ActionItem = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = product;

  const wishlistItems = useSelector(state => state.wishlist.wishlistItems);
  const isInWishlist = wishlistItems.some(item => item.id === id);

  const [quantity] = useState(1);
  const [showHeart, setShowHeart] = useState(false);

  const buyNow = async () => {
    let response = await payUsingPaytm({ amount: 500, email: 'codeforinterview01@gmail.com' });
    const information = {
      action: 'https://securegw-stage.paytm.in/order/process',
      params: response
    };
    post(information);
  };

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate('/cart');
  };

  const handleImageClick = () => {
    setShowHeart(true); // Show heart after image click
  };

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(id));
      // ✅ Don't hide the heart — just update icon
    } else {
      dispatch(addToWishlist(product));
    }
  };

  return (
    <LeftContainer>
      <ImageContainer>
        <Image src={product.detailUrl} alt={product.title?.shortTitle} onClick={handleImageClick} />

        {showHeart && (
          <WishlistIcon onClick={handleWishlistToggle}>
            {isInWishlist ? (
              <FavoriteIcon style={{ color: '#ff4081' }} />
            ) : (
              <FavoriteBorderOutlinedIcon style={{ color: '#ff4081' }} />
            )}
          </WishlistIcon>
        )}
      </ImageContainer>

      <StyledButton
        onClick={addItemToCart}
        style={{ marginRight: 10, background: '#ff9f00' }}
        variant="contained"
      >
        <Cart /> Add to Cart
      </StyledButton>

      <StyledButton
        onClick={buyNow}
        style={{ background: '#fb641b' }}
        variant="contained"
      >
        <Flash /> Buy Now
      </StyledButton>
    </LeftContainer>
  );
};

export default ActionItem;
