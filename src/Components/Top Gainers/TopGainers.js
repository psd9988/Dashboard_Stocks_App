import React from 'react';

import appleIcon from '../../Assets/appleIcon.png'
import teslaIcon from '../../Assets/teslaIcon.png'
import shopifyIcon from '../../Assets/shopifyIcon.png'
import stocksUpArrow from '../../Assets/stocksUpArrow.png'
import stocksDownArrow from '../../Assets/stocksDownArrow.png'

import './topGainers.css'


export const TopGainers = () => {
  const topGainersArr =
    [{ name: 'Tesla Inc.', price: '$870.76', percentChng: '+9.72%', image: teslaIcon, symbol: 'TSLA' },
    { name: 'Shopify Inc.', price: '$462.82', percentChng: '+5.34%', image: shopifyIcon, symbol: 'SHOP' },
    { name: 'Apple Inc', price: '$157.72', percentChng: '-4.23%', image: appleIcon, symbol: 'AAPL' }];
  return (
    <div className='topGainersMainContainer'>
      <h6 className='topGainersText'>Top Gainers</h6>
      {topGainersArr.map((item) => (
        <div key={item.price} className="topGainersInnerContainer">

          <img className='topGainersicons' src={item.image} alt="teslaIcon" />

          <div className="topGainersTextAndSymbolContainer">
            <h5>{item.name}</h5>
            <p className='topGainersGreyColor'>{item.symbol}</p>
          </div>

          <div className="topGainersPriceAndPercentContainer">

            <h5>{item.price}</h5>
            <div className='topGainersGreyColor'>
              {item.percentChng.includes('+') ? <img className='topGainersUpDownarrowImage' src={stocksUpArrow} /> : <img className='topGainersUpDownarrowImage' src={stocksDownArrow} />}{item.percentChng}
            </div>

          </div>

        </div>
      ))}
    </div>
  )
}

