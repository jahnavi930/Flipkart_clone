import React, { useContext, useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Collapse,
  Button,
  IconButton,
  TextField,
  styled,
} from '@mui/material';

import {
  Person,
  ShoppingCart,
  Settings,
  Payment,
  Favorite,
  ExpandLess,
  ExpandMore,
  Logout as LogoutIcon,
  Edit,
} from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../../context/ContextProvider';

// Styled components
const LeftContainer = styled(Paper)(({ theme }) => ({
  width: 320,
  padding: theme.spacing(3),
  backgroundColor: '#fff',
  borderRadius: 8,
  boxShadow: '0 0 8px rgba(0,0,0,0.1)',
  height: 'fit-content',
  position: 'sticky',
  top: theme.spacing(10),
}));

const RightContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  marginLeft: theme.spacing(5),
  padding: theme.spacing(3),
  backgroundColor: '#fff',
  borderRadius: 8,
  boxShadow: '0 0 8px rgba(0,0,0,0.1)',
}));

const Greeting = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(4),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: 18,
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(2),
}));

const SubMenuItem = styled(ListItem)(({ theme }) => ({
  paddingLeft: theme.spacing(6),
}));

const ProfilePage = () => {
  const [accountSettingsOpen, setAccountSettingsOpen] = useState(false);
  const { account, setAccount } = useContext(LoginContext);
  const navigate = useNavigate();

  const [editingField, setEditingField] = useState('');

  const [formData, setFormData] = useState({
    name: account?.name || 'User',
    email: 'lavanya@example.com',
    mobile: '+91 7075203549',
    gender: 'Female',
  });

  const handleAccountSettingsClick = () => {
    setAccountSettingsOpen(!accountSettingsOpen);
  };

  const handleSave = (field) => {
    if (field === 'name') {
      setAccount((prev) => ({
        ...prev,
        name: formData.name,
      }));
    }
    setEditingField('');
  };

  const handleCancel = () => {
    setEditingField('');
  };

  const renderEditableField = (label, fieldKey) => (
    <Box mb={2}>
      <Typography variant="subtitle2" color="textSecondary" sx={{ mb: 0.5 }}>
        {label}
      </Typography>
      <Box display="flex" alignItems="center" width="100%">
        {editingField === fieldKey ? (
          <>
            <TextField
              size="small"
              variant="outlined"
              value={formData[fieldKey]}
              onChange={(e) => setFormData({ ...formData, [fieldKey]: e.target.value })}
              sx={{ flex: 1, mr: 2 }}
            />
            <Button
              type="button"
              size="small"
              variant="contained"
              onClick={() => handleSave(fieldKey)}
            >
              Save
            </Button>
            <Button
              type="button"
              size="small"
              onClick={handleCancel}
              sx={{ ml: 1 }}
            >
              Cancel
            </Button>
          </>
        ) : (
          <>
            <Typography variant="body1" sx={{ flex: 1 }}>{formData[fieldKey]}</Typography>
            <IconButton size="small" onClick={() => setEditingField(fieldKey)}>
              <Edit fontSize="small" color="primary" />
            </IconButton>
          </>
        )}
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', bgcolor: '#f5f5f5', minHeight: '100vh', p: 4 }}>
      {/* LEFT SIDEBAR */}
      <LeftContainer>
        <Greeting>
          <Person sx={{ color: '#2874f0', fontSize: 40, mr: 1 }} />
          <Typography variant="h5" fontWeight={600}>
            Hello, {account?.name || 'User'}
          </Typography>
        </Greeting>

        <List component="nav" disablePadding>
          <ListItem button>
            <ListItemIcon><ShoppingCart color="primary" /></ListItemIcon>
            <ListItemText primary="My Orders" />
          </ListItem>
          <Divider />

          <ListItem button onClick={handleAccountSettingsClick}>
            <ListItemIcon><Settings color="primary" /></ListItemIcon>
            <ListItemText primary="Account Settings" />
            {accountSettingsOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse in={accountSettingsOpen} timeout="auto" unmountOnExit>
            <List disablePadding>
              <SubMenuItem button>
                <ListItemText primary="Profile Information" />
              </SubMenuItem>
              <SubMenuItem button>
                <ListItemText primary="Manage Addresses" />
              </SubMenuItem>
              <SubMenuItem button>
                <ListItemText primary="PAN Card Information" />
              </SubMenuItem>
            </List>
          </Collapse>
          <Divider />

          <ListItem button>
            <ListItemIcon><Payment color="primary" /></ListItemIcon>
            <ListItemText primary="Payments" />
          </ListItem>
          <Divider />

          <ListItem button onClick={() => navigate('/wishlist')}>
            <ListItemIcon><Favorite color="primary" /></ListItemIcon>
            <ListItemText primary="My Stuff" />
          </ListItem>
          <Divider />

          <ListItem button>
            <ListItemIcon><LogoutIcon color="primary" /></ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </LeftContainer>

      {/* RIGHT MAIN CONTENT */}
      <RightContainer>
        <SectionTitle>Personal Information</SectionTitle>

        {renderEditableField('Name', 'name')}
        {renderEditableField('Email Address', 'email')}
        {renderEditableField('Mobile Number', 'mobile')}
        {renderEditableField('Gender', 'gender')}

        <Divider sx={{ my: 4 }} />
        <SectionTitle>FAQs</SectionTitle>

        <Box mb={3}>
          <Typography variant="subtitle1" fontWeight={600}>What happens when I update my email address?</Typography>
          <Typography mb={2}>
            Your login email ID (or mobile number) changes. You'll receive all account-related communication on your updated info.
          </Typography>

          <Typography variant="subtitle1" fontWeight={600}>Does my Seller account get affected?</Typography>
          <Typography>
            Flipkart uses a single sign-on system. Changes reflect in your Seller account too.
          </Typography>
        </Box>

        <Box display="flex" gap={2}>
          <Button variant="outlined" color="error">Deactivate Account</Button>
          <Button variant="outlined" color="error">Delete Account</Button>
        </Box>
      </RightContainer>
    </Box>
  );
};

export default ProfilePage;
