import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  const handleAddToCart = () => onAddToCart(product.id, 1);
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.image.url} title={product.name} style={{backgroundSize: 'contain'}}/>
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h6" component="h2">
            <b>{product.name}</b>
          </Typography>
        </div>
        <Typography gutterBottom variant="subtitle1" component="h2" style={{marginTop: -15}}>
          CAD ${product.price.formatted}
        </Typography>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" style={{marginTop: -15}} />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <Button 
        aria-label="Add to Cart" 
        fullWidth 
        variant="outlined" 
        onClick={handleAddToCart} 
        style={{borderColor: "#000000",color: "#000000", marginTop: -25}}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;

