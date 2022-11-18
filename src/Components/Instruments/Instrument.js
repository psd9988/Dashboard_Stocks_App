import React from 'react'

import instrumentImage1 from '../../Assets/intrumentImg1.jpg'
import instrumentImage2 from '../../Assets/intrumentImg2.png'
import instrumentImage3 from '../../Assets/intrumentImg3.jpg'
import instrumentImage4 from '../../Assets/instrumentImg4.jpg'
import stocksDownArrow from '../../Assets/stocksDownArrow.png'
import stocksUpArrow from '../../Assets/stocksUpArrow.png'

import '../Instruments/instrument.css';


export const Instrument = () => {

    const instruments = [{ name: 'Stocks', price: '$2,587.60', percentChng: '+14%', image: instrumentImage1 }, { name: 'Bonds', price: '$2,070', percentChng: '+4%', image: instrumentImage2 }, { name: 'Crypto', price: '$1587.60', percentChng: '-12%', image: instrumentImage3 }, { name: 'ETFs', price: '$4,140.17', percentChng: '+12%', image: instrumentImage4 }];

    return (
        <>
            <div className='instrumentsMainContainer'>
                {instruments.map((item) => (

                    <div key={item.name} className="instrumentInsideContainer">
                        <img className='instrumentImage' src={item.image} alt="instImage" />
                        <h4 className='itemNameInstrument instrumentGreyColor'>{item.name}</h4>
                        <h6 className='itemPriceInstrument'>{item.price}</h6>
                        <h6 className={item.percentChng.includes('+') ? 'instrumentGreenColor instrumentPercentChngText' : 'instrumentRedColor instrumentPercentChngText'}>

                            {item.percentChng.includes('+') ? <img className='instrumentUpDownarrowImage' src={stocksUpArrow} /> : <img className='instrumentUpDownarrowImage' src={stocksDownArrow} />}{item.percentChng}

                            <span className='instrumentGreyColor'>/ month</span></h6>
                    </div>
                ))}

            </div>
        </>
    )

}

