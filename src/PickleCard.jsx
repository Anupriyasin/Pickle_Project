import React, { useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Box, FormControl, Select, MenuItem } from '@mui/material';
// import './PickleCard.css'; // Import CSS file
// import '../src/index.css';

const PickleCard = ({ image, name, price, description }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    const handleToggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    const shortDescription = description.length > 20 ? description.slice(0, 20) + '...' : description;

    return (
        <Card className="pickle-card">
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt={name}
                />
                <CardContent className="card-content">
                    <div>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Box className="price-quantity-container">
                            <Typography variant="body2" color="text.secondary" className="price">
                                Price: ${price}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" className="qty-label">
                                QTY: {" "}
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
                            {showFullDescription ? description : shortDescription}
                            <Typography 
                                variant="body2" 
                                color="primary" 
                                component="span" 
                                onClick={handleToggleDescription} 
                                style={{ cursor: 'pointer', marginLeft: 4 }}
                            >
                                {showFullDescription ? 'show less' : 'show more'}
                            </Typography>
                        </Typography>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default PickleCard;
