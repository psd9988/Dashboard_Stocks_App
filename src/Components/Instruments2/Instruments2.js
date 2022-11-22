import React from 'react'


import instruments2StocksDownArrow from '../../Assets/stocksDownArrow.png'
import instruments2StocksUpArrow from '../../Assets/stocksUpArrow.png'

import '../Instruments2/instruments2.css';


export const Instruments2 = () => {

    const instruments2 = [{ name: 'Market Direction',percentChng: '+14%'}, { name: 'Leader Index', percentChng: '+4%' }, { name: 'Market Momentum', percentChng: '-12%'}, { name: 'Hottest Sector', percentChng: '+12%'}];

    return (
        <>
            <div className='instruments2MainContainer'>
                {instruments2.map((item, index) => (

                    <div key={item.name} className="instruments2InsideContainer">
                        
                        <h4 className='itemNameInstruments2 instruments2GreyColor'>{item.name}</h4>
                        
                        <h4 className='instruments2Trends'>{index==1?'DIA': index==3? 'Consumer Staples': item.percentChng.includes('+') ? 'Bullish': 'Bearish'}</h4>

                        <h6 className={item.percentChng.includes('+') ? 'instruments2GreenColor instruments2PercentChngText' : 'instruments2RedColor instruments2PercentChngText'}>

                            {item.percentChng.includes('+') ? <img className='instruments2UpDownarrowImage' src={instruments2StocksUpArrow} /> : <img className='instruments2UpDownarrowImage' src={instruments2StocksDownArrow} />}{item.percentChng}

                            <span className='instruments2GreyColor'>/ month</span></h6>
                    </div>
                ))}

            </div>
        </>
    )

}

