import React, { useState,useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "./style.css";
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';

const Cards = () => {

  const [data, setData] = useState([]);
  // console.log(data);
  useEffect(()=>{
    fakeData();
},[])
const fakeData = async() =>{
   const response = await fetch("https://fakestoreapi.com/products")
   const jsonData = await response.json();
   setData(jsonData)
}

  const dispatch = useDispatch();


  const send = (e)=>{
    // console.log(e);
    dispatch(ADD(e));
  }

  return (
    <div className='container mt-3'>
      <h2 className='text-center'>Add to Cart Projects</h2>

      <div className="row d-flex justify-content-center align-items-center">
        {
          data.map((element, id) => {
            return (
              <>
                <Card style={{ width: '22rem',border:"none" }} className="mx-2 mt-4 card_style">
                  <Card.Img variant="top" src={element.image} style={{height:"16rem"}} className="mt-3" />
                  <Card.Body>
                    <Card.Title>{element.title}</Card.Title>
                    <Card.Text>
                    Price : ₹ {element.price}
                    </Card.Text>
                    <div className="button_div d-flex justify-content-center">
                    <Button variant="primary"  
                      onClick={()=> send(element)}
                     className='col-lg-12'>Add to Cart</Button>
                    </div>
                  
                  </Card.Body>
                </Card>
              </>
            )
          })
        }

      </div>
    </div>
  )
}

export default Cards