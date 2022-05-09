import React from 'react';
import './Styles/Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-7.jpg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-6.jpg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-5.jpg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
