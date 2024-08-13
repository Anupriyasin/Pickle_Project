import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardActionArea, CardContent, CardMedia, Box, FormControl, Select, MenuItem } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

// Dummy items data
const dummyItems = [
    { id: 1, name: 'Spicy Mango Pickles', price: 5.99, image: 'https://static.toiimg.com/thumb/65449803.cms?imgsize=268962&width=800&height=800', description: 'Made from thick, fresh, tender, bright red chilies. Has oil at the bottom of jar to preserve the pickle for long. Store in a cool dry place. Use a fresh, dry spoon to take the pickle out.' },
    { id: 2, name: 'Red Chilli Pickles', price: 6.99, image: 'https://www.whiskaffair.com/wp-content/uploads/2021/04/Lal-Mirch-Ka-Achar-2-3-1.jpg', description: 'Made from thick, fresh, tender, bright red chilies. Has oil at the bottom of jar to preserve the pickle for long. Store in a cool dry place. Use a fresh, dry spoon to take the pickle out.' },
    { id: 3, name: 'Lemon Pickles', price: 7.99, image: 'https://5.imimg.com/data5/SZ/ZW/CU/SELLER-507655/nimbu-achar.jpg', description: 'Made from thick, fresh, tender, bright red chilies. Has oil at the bottom of jar to preserve the pickle for long. Store in a cool dry place. Use a fresh, dry spoon to take the pickle out.' },
    { id: 4, name: 'Spicy Mango Pickles', price: 5.99, image: 'https://static.toiimg.com/thumb/65449803.cms?imgsize=268962&width=800&height=800', description: 'Made from thick, fresh, tender, bright red chilies. Has oil at the bottom of jar to preserve the pickle for long. Store in a cool dry place. Use a fresh, dry spoon to take the pickle out.' },
    { id: 5, name: 'Red Chilli Pickles', price: 6.99, image: 'https://www.whiskaffair.com/wp-content/uploads/2021/04/Lal-Mirch-Ka-Achar-2-3-1.jpg', description: 'Made from thick, fresh, tender, bright red chilies. Has oil at the bottom of jar to preserve the pickle for long. Store in a cool dry place. Use a fresh, dry spoon to take the pickle out.' },
    { id: 6, name: 'Lemon Pickles', price: 7.99, image: 'https://5.imimg.com/data5/SZ/ZW/CU/SELLER-507655/nimbu-achar.jpg', description: 'Made from thick, fresh, tender, bright red chilies. Has oil at the bottom of jar to preserve the pickle for long. Store in a cool dry place. Use a fresh, dry spoon to take the pickle out.' },
];

const AllItemsPage = () => {
    const [showFullDescription, setShowFullDescription] = useState({});

    const handleToggleDescription = (id) => {
        setShowFullDescription(prevState => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    return (
        <div className='container'>
            <Header />
            <Container>
                <Typography variant="h4" gutterBottom>
                    All Items
                </Typography>

                {/* Grid of items */}
                <Grid container spacing={3}>
                    {dummyItems.map((item) => {
                        const isDescriptionShown = showFullDescription[item.id];
                        const shortDescription = item.description.length > 20 ? item.description.slice(0, 20) + '...' : item.description;

                        return (
                            <Grid item xs={12} sm={6} md={4} key={item.id}>
                                <Card className="pickle-card">
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={item.image}
                                            alt={item.name}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {item.name}
                                            </Typography>
                                            <Box display="flex" alignItems="center">
                                                <Typography variant="body2" color="text.secondary" className="price">
                                                    Price: ${item.price}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" className="qty-label">
                                                    Weight: {" "}
                                                </Typography>
                                                <Box ml={1}>
                                                    <FormControl>
                                                        <Select defaultValue={1} className="quantity-select">
                                                            <MenuItem value={0.25}>250 gm</MenuItem>
                                                            <MenuItem value={0.5}>500 gm</MenuItem>
                                                            <MenuItem value={1}>1 kg</MenuItem>
                                                            <MenuItem value={1.5}>1.5 kg</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Box>
                                            </Box>
                                            <Typography variant="body2" color="text.secondary" className="description">
                                                {isDescriptionShown ? item.description : shortDescription}
                                                <Typography 
                                                    variant="body2" 
                                                    color="primary" 
                                                    component="span" 
                                                    onClick={() => handleToggleDescription(item.id)} 
                                                    style={{ cursor: 'pointer', marginLeft: 4 }}
                                                >
                                                    {isDescriptionShown ? 'show less' : 'show more'}
                                                </Typography>
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
            <Footer />
        </div>
    );
};

export default AllItemsPage;
