import React from 'react'
import "./PricingCards.css"

const PricingCard = () => {
  return (
    <div className='pricing' id='pricing'>
        <div className='plan-description'>
            <h3 className='desc-title'>A Plan for Every Dog's Needs</h3>
            <p className='desc-p'>Simple and affordable price plans for you and your dog.</p>
        </div>
        <div className='card-container'>
            <div className='card'>
                <h3 className='breed-title'>- Chihuahua -</h3>
                {/* <span className='bar'></span> */}
                <p className='btc'> Free</p>
                <p>- Matches per day -</p>
                <p>- 10 Messages Per Day -</p>
                <p>- Unlimited App Usage -</p>
                <button type="button" className="card1-btn buttn">
                Sign Up
              </button>
            </div>

            <div className='card'>
                <h3 className='breed-title'>- Labrador -</h3>
                {/* <span className='bar'></span> */}
                <p className='btc'> $49 / mo </p>
                <p>- Unlimited Matches -</p>
                <p>- Unlimited Messages -</p>
                <p>- Unlimited App Usage -</p>
                <button type="button" className="card2-btn buttn">
                Sign Up
              </button>
            </div>

            <div className='card'>
                <h3 className='breed-title'>- Mastiff -</h3>
                {/* <span className='bar'></span> */}
                <p className='btc'> $99 / mo </p>
                <p>- Pirority Listing -</p>
                <p>- Unlimited Matches -</p>
                <p>- Unlimited Messages -</p>
                <p>- Unlimited App Usage -</p>

                <button type="button" className="card-btn buttn">
                Sign Up
              </button>
            </div>
        </div>
      
    </div>
  )
}

export default PricingCard
