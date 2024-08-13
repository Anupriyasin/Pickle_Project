import React from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import PickleCard from "./PickleCard";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
// import AllItemsPage from './AllItemsPage';

import pickleImage from "../src/assets/images/bg.jpg"; // Adjusted path to the background image
import Header from "./Header";
import Footer from "./Footer";
const pickles = [
  {
    id: 1,
    name: "Spicy Mango Pickles",
    price: 5.99,
    image:
      "https://static.toiimg.com/thumb/65449803.cms?imgsize=268962&width=800&height=800",
    description:
      "Made from thick, fresh, tender, bright red chilies. Has oil at the bottom of jar to preserve the pickle for long. Store in a cool dry place. Use a fresh, dry spoon to take the pickle out.",
  },
  {
    id: 2,
    name: "Red Chilli Pickles",
    price: 6.99,
    image:
      "https://www.whiskaffair.com/wp-content/uploads/2021/04/Lal-Mirch-Ka-Achar-2-3-1.jpg",
    description:
      "Made from thick, fresh, tender, bright red chilies. Has oil at the bottom of jar to preserve the pickle for long. Store in a cool dry place. Use a fresh, dry spoon to take the pickle out.",
  },
  {
    id: 3,
    name: "Lemon Pickles",
    price: 7.99,
    image: "https://5.imimg.com/data5/SZ/ZW/CU/SELLER-507655/nimbu-achar.jpg",
    description:
      "Made from thick, fresh, tender, bright red chilies. Has oil at the bottom of jar to preserve the pickle for long. Store in a cool dry place. Use a fresh, dry spoon to take the pickle out.",
  },
];

const LandingPage = () => {
  const navigate = useNavigate();

  const Handleorder = () => {
    navigate("./all-items");
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="container">
      <Header />
      <Box
        sx={{
          height: "100vh",
          backgroundImage: `url(${pickleImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",

          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          opacity: "1.3",
          p: 2,
        }}
      >
        <Typography variant="h3" component="h1" color={"#ffffff"} gutterBottom>
          Delicious Homemade Pickles
        </Typography>
        <Typography variant="h6" color={"#ffffff"} paragraph>
          Taste the best pickles made from traditional recipes. Our pickles are
          made from fresh, natural ingredients.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={Handleorder}
        >
          Order Now
        </Button>
      </Box>
      <Container>
        <Box my={5}>
          <Typography variant="h4" component="h2" gutterBottom>
            Our Pickles
          </Typography>
          <Grid container spacing={3}>
            {pickles.map((pickle) => (
              <Grid item xs={12} sm={6} md={4} key={pickle.id}>
                <PickleCard
                  image={pickle.image}
                  name={pickle.name}
                  price={pickle.price}
                  description={pickle.description} 
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default LandingPage;
