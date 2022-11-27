import "./aboutUs.css";

import React from 'react'
import prashant from '../../Assets/prashant.jpg'
import kuldeep from '../../Assets/kuldeep.jpg'
import raghu from '../../Assets/raghu.jpg'

const AboutUs = () => {

  return (
    <>
      <div className="aboutUsContainer">
        <p className="aboutUsMainHeading">We pioneered the discount broking model in America. Now, we are breaking ground with our technology.</p>

        <div className="aboutUsParasContainer1">
          <p className="aboutUsParas1">We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in America in terms of cost, support, and technology. We named the company Stokida.Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in America in terms of active retail clients.Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all American retail trading volumes.</p>

          <p className="aboutUsParas2">In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors. Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the American capital markets.And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.</p>
        </div>

        <h1 style={{ color: "grey", textAlign:'center' }}>People</h1>

        <div className="infoAboutPeopleContainer">
          <figure>
            <img className="profilePic" src={prashant} alt="prashantpic" />
            <figcaption style={{textAlign:'center'}}>Prashant Deshmukh, CEO</figcaption>
          </figure>

          <p className="profileDescription">Prashant bootstrapped and founded Stokida in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Stokida has changed the landscape of the American broking industry.He is a member of the Nasdaq Secondary Market Advisory Committee (NMAC) and the Market Data Advisory Committee (MDAC).Playing Cricket is his zen.
            Connect on 9898989898 / prashant@stokida.com / facebook.com/stokidaQ&A</p>
        </div>
        <div className="infoAboutPeopleContainer">
          <figure>
            <img className="profilePic" src={kuldeep} alt="prashantpic" />
            <figcaption style={{textAlign:'center'}}>Kuldeep Chauhan, Managing Director</figcaption>
          </figure>

          <p className="profileDescription">Kuldeep worked with an international airline business for over 6 years before joining us. He uses his experience of liasing with people from various backgrounds to ensure that our ever expanding support team maintains highest quality. He is an extremely disciplined fitness enthusiast.
            Connect on 9564782365 / kuldeep@stokida.com / facebook.com/stokidaQ&A</p>
        </div>
        <div className="infoAboutPeopleContainer">
          <figure>
            <img className="profilePic" src={raghu} alt="prashantpic" />
            <figcaption style={{textAlign:'center'}}>Raghavendra, Director Strategy</figcaption>
          </figure>

          <p className="profileDescription">Raghu single handledly wrote strategy, Stokida's massive educational program. He heads investor education initiatives at Stokida and loves stock markets, classic rock, single malts, and photography.
            Connect on 98953334090 / raghu@stokida.com / facebook.com/stokidaQ&A</p>
        </div>
      </div>
    </>
  )
}

export default AboutUs