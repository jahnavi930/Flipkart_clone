import React from 'react';
import { Box, Typography, Link, styled } from '@mui/material';

const FooterContainer = styled(Box)`
  background-color: #0b0b45;
  color: white;
  padding: 24px 40px;
  font-size: 11px;
`;

const SectionTitle = styled(Typography)`
  color: #b0b0b0;
  font-weight: 600;
  font-size: 12px;
  margin-bottom: 6px;
`;

const Section = styled(Box)`
  flex: 1;
  padding: 0 16px;
  min-width: 180px;
  margin-bottom: 16px;
`;

const Row = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const TopStories = styled(Box)`
  background: #f1f3f6;
  padding: 12px 40px;
  font-size: 11px;
  color: #212121;
`;

const Footer = () => {
  return (
    <>
      {/* Top Stories Section */}
      <TopStories>
        <Typography variant="body2" style={{ marginBottom: 6, fontWeight: 600 }}>
          Top Stories: Brand Directory
        </Typography>
        <Typography variant="body2">
          MOST SEARCHED IN Musical Instruments: CASIO KEYBOARD PRICE, COLLAR MIC, HI FI MUSIC SYSTEM, SOUND MIXER, APPLE IPODS, FLUTES, GIVSON GUITAR,
          DRUM STICK, GUITAR CAPO, GUITAR PICK, GUITAR STRINGS, GUITAR TUNER ONLINE, TABLA PRICE, CASIO KEYBOARDS, YAMAHA KEYBOARDS, MUSICAL KEYBOARD,
          ACOUSTIC GUITAR PRICE, MOUTH ORGAN, SAXOPHONE PRICE, PERSANG KARAOKE, PLUTO GUITAR, OCTAPAD, YAMAHA PSR I455, AV RECEIVER, SEMI ACOUSTIC GUITAR
        </Typography>
      </TopStories>

      {/* Footer Section */}
      <FooterContainer>
        <Row>
          <Section>
            <SectionTitle>ABOUT</SectionTitle>
            <Typography variant="body2">Contact Us</Typography>
            <Typography variant="body2">About Us</Typography>
            <Typography variant="body2">Careers</Typography>
            <Link href="https://stories.flipkart.com/" target="_blank" rel="noopener" underline="hover" color="inherit" variant="body2">
              Flipkart Stories
            </Link>
            <Typography variant="body2">Press</Typography>
            <Typography variant="body2">Corporate Information</Typography>
          </Section>

          <Section>
            <SectionTitle>GROUP COMPANIES</SectionTitle>
            <Link href="https://www.myntra.com" target="_blank" rel="noopener" underline="hover" color="inherit" variant="body2">
              Myntra
            </Link><br />
            <Link href="https://www.cleartrip.com" target="_blank" rel="noopener" underline="hover" color="inherit" variant="body2">
              Cleartrip
            </Link><br />
            <Link href="https://www.shopsy.in" target="_blank" rel="noopener" underline="hover" color="inherit" variant="body2">
              Shopsy
            </Link>
          </Section>

          <Section>
            <SectionTitle>HELP</SectionTitle>
            <Typography variant="body2">Payments</Typography>
            <Typography variant="body2">Shipping</Typography>
            <Typography variant="body2">Cancellation & Returns</Typography>
            <Typography variant="body2">FAQ</Typography>
          </Section>

          <Section>
            <SectionTitle>CONSUMER POLICY</SectionTitle>
            <Typography variant="body2">Cancellation & Returns</Typography>
            <Typography variant="body2">Terms Of Use</Typography>
            <Typography variant="body2">Security</Typography>
            <Typography variant="body2">Privacy</Typography>
            <Typography variant="body2">Sitemap</Typography>
            <Typography variant="body2">Grievance Redressal</Typography>
            <Typography variant="body2">EPR Compliance</Typography>
          </Section>

          <Section>
            <SectionTitle>Mail Us:</SectionTitle>
            <Typography variant="body2">
              Flipkart Internet Private Limited,<br />
              Buildings Alyssa, Begonia &<br />
              Clove Embassy Tech Village,<br />
              Outer Ring Road, Devarabeesanahalli Village,<br />
              Bengaluru, 560103,<br />
              Karnataka, India
            </Typography>
          </Section>

          <Section>
            <SectionTitle>Registered Office Address:</SectionTitle>
            <Typography variant="body2">
              Flipkart Internet Private Limited,<br />
              Buildings Alyssa, Begonia &<br />
              Clove Embassy Tech Village,<br />
              Outer Ring Road, Devarabeesanahalli Village,<br />
              Bengaluru, 560103,<br />
              Karnataka, India<br />
              CIN : U51109KA2012PTC066107<br />
              Telephone: 044-45614700 / 044-67415800
            </Typography>
          </Section>
        </Row>
      </FooterContainer>
    </>
  );
};

export default Footer;
