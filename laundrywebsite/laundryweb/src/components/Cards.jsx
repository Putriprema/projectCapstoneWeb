/* eslint-disable no-unused-vars */
import React from 'react'
import Card from 'react-bootstrap/Card';
import stars from '../assets/stars.png'

function Cards (props) {
  return (
    <Card style={{ width: '28rem', borderRadius: '20px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'}}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title className='flex px-3'><b>{props.name}</b></Card.Title>
        <Card.Text>
          <div className='flex px-3'>
            <p>{props.locate}</p>
          </div>
          <div className='flex justify-between px-3 py-5'>
            <div>
              <h4>Harga Mulai</h4>
              <h5>{props.price}</h5>
            </div>
            <div>
            <h4>Transaksi</h4>
              <h5>{props.transaction}</h5>
            </div>
          </div>
          <div className='flex justify-end'>
            <div>
              <img className='w-6' src={stars} alt="stars" />
            </div>
            <div className='pt-0.5'>
              <p>{props.rate}</p>
            </div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Cards