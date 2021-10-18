import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();

  const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  return (
    <Card className="cart-item">
      <CardMedia image={item.image.url} alt={item.name} className={classes.media} style={{backgroundSize: 'contain'}} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h6">
          <b>{item.name}</b>
        </Typography>
        <Typography variant="subtitle1">{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small" variant="outlined" style={{borderRadius: "10px", padding: "0px", minWidth: "45px"}} onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
          <div style={{padding: "10px"}}>
            <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
          </div>
          <Button type="button" size="small" variant="outlined" style={{borderRadius: "10px", padding: "0px", minWidth: "45px"}} onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
        </div>
        <div style={{marginLeft: 'auto'}}>
          <Button variant="contained" type="button" color="#000000" onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
        </div>
      </CardActions>
    </Card>
  );
};

export default CartItem;
