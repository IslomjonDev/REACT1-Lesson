import React from 'react'
import './Hero.css'
import hero from '../images/eb1caad847c2d7ef32a81c937ae1f844.webp'
import card1 from '../images/card1.webp'
import card2 from '../images/card2.webp'
import card3 from '../images/card3.webp'
import card4 from '../images/card4.webp'
import explore1 from '../images/explore1.webp'
import explore2 from '../images/explore2.webp'
import explore3 from '../images/explore3.webp'
import sup1 from  '../images/sup1.svg'
import sup2 from  '../images/sup2.svg'
import sup3 from  '../images/sup3.svg'
import sup4 from  '../images/sup4.svg'

function Hero() {
  return (
    <div className="hero-back">

    <div className='container'>
        <div className="hero">
            <div className="hero-left">
                <h1>Explore your future product</h1>
                <h2>Create our iconicmoment</h2>
                <button>Learn more</button>
            </div>
            <div className="hero-right">
                <img src={hero} alt="" />
            </div>
        </div>
        <div className="products">
            <h1>Featured Products</h1>
            <ul>
                <li><a href="">Stay on Trend</a></li>
                <li><a href="">Latest Flagship</a></li>
                <li><a href="">Enjoy the Outdoors</a></li>
                <li><a href="">Gaming Essentials</a></li>
            </ul>
         <div className="products-back">
            <div className="products-content">
                <div className="products-left">
                    <img src={hero} alt="" />
                </div>
                <div className="products-right">
                    <h2>Redmi Note 13 Pro</h2>
                    <h3>Xiomi Fan Festival Special Edition</h3>
                    <p>Limited availability | Mystic Silver</p>
                </div>
            </div>
            <div className="cards">
                <div className="card">
                    <img src={card1} alt="" />
                    <h3>Redmi Note 13 5G</h3>
                    <p>Super-clear 108MP triple camera</p>
                    <button>Learn More</button>
                </div>
                <div className="card">
                    <img src={card2} alt="" />
                    <h3>Redmi Watch 4</h3>
                    <p>Ultra-large 1.97 AMOLED display</p>
                    <button>Learn More</button>
                </div>
                <div className="card">
                    <img src={card3} alt="" />
                    <h3>Redmi Buds 5 Pro</h3>
                    <p>High-resolution, Hi-Fi sound quality</p>
                    <button>Learn More</button>
                </div>
                <div className="card">
                    <img src={card4} alt="" />
                    <h3>Redmi Buds 5</h3>
                    <p>AI noise reduction for calls</p>
                    <button>Learn More</button>
                </div>
            </div>
        </div>
      </div>
    </div>
    <div className="explore">
        <h1>Explore Xiomi</h1>
        <div className="explore-cards">
            <div className="explore-card">
                <img src={explore1} alt="" />
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quidem!</p>
            </div>
            <div className="explore-card">
                <img src={explore3} alt="" />
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quidem!</p>
            </div>
            <div className="explore-card">
                <img src={explore2} alt="" />
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quidem!</p>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="support">
            <h1>Xiomi Support</h1>
            <div className="support-cards">
                <div className="sup-card">
                    <img src={sup1} alt="" />
                    <h4>Customer Support</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, amet.</p>
                </div>
                <div className="sup-card">
                    <img src={sup2} alt="" />
                    <h4>Warranty</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, amet.</p>
                </div>
                <div className="sup-card">
                    <img src={sup3} alt="" />
                    <h4>User Guides</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, amet.</p>
                </div>
                <div className="sup-card">
                    <img src={sup4} alt="" />
                    <h4>FAQ</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, amet.</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Hero