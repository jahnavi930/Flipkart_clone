import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, NotFound } from './Components/default';
import { Box } from '@mui/material';

// Components
import Header from './Components/Header/Header';
import DetailView from './Components/ItemDetails/DetailView';
import TemplateProvider from './templates/TemplateProvider';
import ContextProvider from './context/ContextProvider';
import Cart from './Components/Cart/Cart';
import Wishlist from './Components/Wishlist/Wishlist';
import Footer from './Components/Footer/Footer';  // <-- Import Footer
import ProfilePage from './Components/Header/ProfilePage';
function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Box style={{ marginTop: 54, minHeight: 'calc(100vh - 54px - 200px)' }}>
            {/* Adjust minHeight to leave space for footer */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product/:id" element={<DetailView />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="*" element={<NotFound />} />
                      <Route path="/profile" element={<ProfilePage />} />

            </Routes>
          </Box>
          <Footer /> {/* <-- Add Footer here */}
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
