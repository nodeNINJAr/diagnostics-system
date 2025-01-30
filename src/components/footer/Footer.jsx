import React from 'react';
import { Box, Container, Typography, Link, IconButton, Grid2 } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';


// 

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        py: 4,
        mt: 'auto', // Push footer to the bottom of the page
      }}
    >
      <Container maxWidth="lg">
        <Grid2 container spacing={4}>
          {/* Column 1: About */}
          <Grid2 xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We are a team of developers dedicated to building amazing web applications.
            </Typography>
          </Grid2>

          {/* Column 2: Quick Links */}
          <Grid2 xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="#" color="inherit" underline="none" display="block">
              Home
            </Link>
            <Link href="#" color="inherit" underline="none" display="block">
              About
            </Link>
            <Link href="#" color="inherit" underline="none" display="block">
              Services
            </Link>
            <Link href="#" color="inherit" underline="none" display="block">
              Contact
            </Link>
          </Grid2>

          {/* Column 3: Contact Info */}
          <Grid2 xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" gutterBottom>
              Email: info@example.com
            </Typography>
            <Typography variant="body2" gutterBottom>
              Phone: +1 234 567 890
            </Typography>
            <Typography variant="body2" gutterBottom>
              Address: 123 Main St, City, Country
            </Typography>
          </Grid2>

          {/* Column 4: Social Media */}
          <Grid2 xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton href="#" color="inherit">
                <Facebook />
              </IconButton>
              <IconButton href="#" color="inherit">
                <Twitter />
              </IconButton>
              <IconButton href="#" color="inherit">
                <Instagram />
              </IconButton>
              <IconButton href="#" color="inherit">
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid2>
        </Grid2>

        {/* Footer Bottom */}
        <Box textAlign="center" pt={4}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()}DiagnoSync. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;