import React from 'react';
import { Card, Button } from 'react-bootstrap';


const ProductCard = (props) => {
 // console.log("props",props)
return (
 <Card style={{ marginTop: "50px",width: '202px',height: "300px",padding: "0px",marginRight: "40px"}}>
      <Card.Img variant="top" src={props.productDetails.image} />
      <Card.Body>
      <Card.Title>{props.productDetails.productName}</Card.Title>
      <Card.Text>lorem</Card.Text>
      <Card.Text>
      ₹{props.productDetails.price}
      </Card.Text>
    <Button variant="primary" onClick ={() => {props.onClick(props.productDetails)}}>Add to Cart</Button>
  </Card.Body>
</Card>
)
}

export default ProductCard;