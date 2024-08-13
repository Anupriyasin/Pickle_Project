import React from 'react';
import { Box, Typography, Container, Link, Grid } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box
      sx={{
        width: '97.6%',
        backgroundColor: '#daeee8',
        color: 'black',
        borderTop: '2px solid black',
        py: 3,
        px: 2,
        mt: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1 }}>
              <Typography variant="body2" color="inherit">
                9.30 AM to 6.30 PM - Monday to Friday
              </Typography>
              <Typography variant="body2" color="inherit">
                |
              </Typography>
              <Typography variant="body2" color="inherit">
                +91-22-6141 7897 / +91 96009-59008
              </Typography>
              <Typography variant="body2" color="inherit">
                |
              </Typography>
              <Typography variant="body2" color="inherit">
                customersupport@picklefoods.in
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="subtitle1" sx={{ color: 'green', fontWeight: 'bold',mb:1 }}>
              SHOP ONLINE
            </Typography>
            <Link href="#" color="inherit" sx={{ display: 'block', textDecoration: 'none' ,mb:1}}>
              Olive Oil Pickles
            </Link>
            <Link href="#" color="inherit" sx={{ display: 'block', textDecoration: 'none' ,mb:1}}>
              Sunflower Oil Pickles
            </Link>
            <Link href="#" color="inherit" sx={{ display: 'block', textDecoration: 'none',mb:1 }}>
              Chutneys
            </Link>
            <Link href="#" color="inherit" sx={{ display: 'block', textDecoration: 'none' ,mb:1}}>
              Combos
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="subtitle1" sx={{ color: 'green', fontWeight: 'bold' ,mb:1}}>
              POLICIES
            </Typography>
            <Link href="#" color="inherit" sx={{ display: 'block', textDecoration: 'none' ,mb:1}}>
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" sx={{ display: 'block', textDecoration: 'none',mb:1 }}>
              Refund Policy
            </Link>
            <Link href="#" color="inherit" sx={{ display: 'block', textDecoration: 'none',mb:1 }}>
              Shipping Policy
            </Link>
            <Link href="#" color="inherit" sx={{ display: 'block', textDecoration: 'none' ,mb:1}}>
              Terms of Service
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="subtitle1" sx={{ color: 'green', fontWeight: 'bold',mb:1 }}>
              ABOUT
            </Typography>
            <Link href="#" color="inherit" sx={{ display: 'block', textDecoration: 'none' ,mb:1}}>
              About Us
            </Link>
            <Link href="#" color="inherit" sx={{ display: 'block', textDecoration: 'none' ,mb:1}}>
              Contact Us
            </Link>
            <Link href="#" color="inherit" sx={{ display: 'block', textDecoration: 'none' }}>
              Blogs
            </Link>
            <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
              ABC FOODS LTD.,
              <br />
              Marathon Innova, B2, G01, G.K. Road,
              <br />
              Lower Parel, Mumbai, Maharashtra-400013
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: 'left' }}>
            <Typography variant="body2" color="inherit">
              © ABC Foods Ltd 2024. All Rights Reserved.
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: 'right' }}>
            <Typography variant="body2" color="inherit">
              Follow us at:
            </Typography>
              <Link href="#" color="inherit" sx={{ ml: 1 }}>
                <InstagramIcon sx={{ color: 'green'}} />
              </Link>
              <Link href="#" color="inherit" sx={{ ml: 1 }}>
                <TwitterIcon sx={{ color: 'green' }} />
              </Link>
              <Link href="#" color="inherit" sx={{ ml: 1 }}>
                <LinkedInIcon sx={{ color: 'green' }} />
              </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
