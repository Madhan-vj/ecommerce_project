import React, {useState, useEffect} from 'react';
import Product from './components/card';
import { CloseButton,Card,ListGroup,Container, Row, Col } from 'react-bootstrap';

import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [price, setPrice] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
  
  fetchProduct();
},[])
const fetchProduct = async() => {
  try{
    const res = await fetch("https://5cdd0a92b22718001417c19d.mockapi.io/api/products");
    const json = await res.json();
    console.log("json",json);
    setData(json);
  }
  catch(err){
    console.log("err",err);
  }
}
  function handleClick (clickData) {
  // console.log('Click happened');
  // console.log(clickData);
  setPrice([...price,clickData]);
  setTotal(total + clickData.price);
  }

  function handleClose(item,index){
    // console.log("close clicked");
    // console.log("itemzz",item,index);
    price.splice(index, 1);
    setPrice(price);
    const updatedTotal = total - item.price;
    setTotal(updatedTotal);
  }
  return (
    <Container>
      <Row>
      <Col  lg={9}>
      <Row className="justify-content-md-center" style={{marginRight: "50px"}}>
        {
          data.map((item)=> (
            <Product productDetails={item} onClick={(e) => {handleClick(e)}}></Product>
          ))
        }
        
      </Row>
      </Col>
      <Col lg={2}>
             
            <Card style={{ width: '18rem', marginRight: "23px", marginTop: "50px"}}>
              <Card.Header>Prices</Card.Header>
              <ListGroup variant="flush">
              {console.log("pricessss",price)}
                {
                price.map((item,index)=>(
                  <ListGroup.Item  ><Row><Col>{item.productName}</Col><CloseButton onClick={() => handleClose(item,index)}/></Row><br/>Rs.{item.price}</ListGroup.Item>
                  ))
                }
                <ListGroup.Item>Total = Rs.{total}</ListGroup.Item>
              </ListGroup>
            </Card>
      </Col>
      </Row>
    </Container>
  );
}

export default App;
