import React from 'react'
import './Amazon.css'
import Product from './Product'
import Carousel from 'react-material-ui-carousel'
import { Link } from 'react-router-dom'



function Home() {
    return (
        <div>
            <div className="home__container" >
                <Carousel indicators={false} stopAutoPlayOnHover={false}>
                <img 
                    className="home__image" 
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2021/NYNY/Fuji_TallHero_NYNY_en_US_1x._CB412256579_.jpg"
                    alt="First"
                />
                <img 
                    className="home__image" 
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
                    alt="Second"
                />         

                <img 
                    className="home__image" 
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
                    alt=""
                />

                <img 
                    className="home__image" 
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg"
                    alt=""
                />
            </Carousel>

        
                <div className="home__row">
                    <Product 
                        id="234567" 
                        title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver"
                        price={364.99}
                        image="https://m.media-amazon.com/images/I/71vvXGmdKWL._AC_UY218_.jpg"
                        rating={5}
                    />
                    <Product 
                        id="234567" 
                        title="Laura Ashley Home | Charlotte Collection | Luxury Ultra Soft Comforter, All Season Premium Bedding Set, Stylish Delicate Design for Home Décor, Queen, China Blue"
                        price={129.99}
                        image="https://m.media-amazon.com/images/I/A1kFVCaVUOL._AC_UL320_.jpg"
                        rating={3}
                    />
                    <Product 
                        id="123456"
                        title="RUNMUS Gaming Headset for PS4, Xbox One, PC Headset w/Surround Sound, Noise Canceling Over Ear Headphones with Mic & LED Light, Compatible with PS5, PS4, Xbox One, Switch, PC, PS3, Mac, Laptop"
                        price={26.85}
                        image="https://m.media-amazon.com/images/I/51HzG7dwAHL._AC_SY200_.jpg" 
                        rating={5}
                    />
                    <Product 
                        id="234567" 
                        title="SweatyRocks Women's Casual Heart Print Long Sleeve Pullover Hoodie Sweatshirt Tops"
                        price={24.99}
                        image="https://m.media-amazon.com/images/I/71r2sik24AL._AC_UL320_.jpg"
                        rating={3}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="345678"
                        title="Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 256 GB"
                        price={399}
                        image="https://images-na.ssl-images-amazon.com/images/I/31MPSDnQmUL.jpg"
                        rating={5}
                    />
                    <Product 
                        id="456789"
                        title="Cyberpunk 2077: The Complete Official Guide-Collector's Edition"
                        price={24.55}
                        image="https://m.media-amazon.com/images/I/719QJrDEcuL._AC_UY218_.jpg"
                        rating={3}
                    />
                    <Product 
                        id="349756"
                        title="Xbox Core Controller - Carbon Black"
                        price={59.88}
                        image="https://images-na.ssl-images-amazon.com/images/I/41iAIlBjBjL.jpg"
                        rating={2}
                    />
                </div>
                <div className="home__row">
                    <Product  
                        id="651256"
                        title="HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort - (1D0J9AA#ABA)"
                        price={164.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51IIMW6-TbL.jpg"
                        rating={3}
                    /><Product 
                        id="234567" 
                        title="Lenovo Tab M10 Plus, 10.3inches FHD Android Tablet, Octa-Core Processor, 32GB Storage, 2GB RAM, Iron Grey, ZA5T0263US"
                        price={148.25}
                        image="https://m.media-amazon.com/images/I/71sfODG+c+L._AC_UY218_.jpg"
                        rating={4}
                    />
                </div>
                
                {/* FOOTER */}
                <div className='footer__top'>
                    <p><a href='/'>Back to top</a></p>
                </div>
                
                <div className='footer__amazon__info'>
                    <div className='footer__know'>
                        <h3>Get to Know us</h3>
                            <p><a href='/'>Careers</a></p>
                            <p><a href='/'>Blog</a></p>
                            <p><a href='/'>About Amazon</a></p>
                            <p><a href='/'>Investor Relations</a></p>
                            <p><a href='/'>Amazon Devices</a></p>
                            <p><a href='/'>Amazon Tours</a></p>
                    </div>
                    <div className='footer__know'>
                        <h3>Make Money with Us</h3>
                            <p><a href='/'>Sell products on Amazon</a></p>
                            <p><a href='/'>Sell apps on Amazon</a></p>
                            <p><a href='/'>become an Affiliate</a></p>
                            <p><a href='/'>Advertise Your Products</a></p>
                            <p><a href='/'>Self-Publish with Us</a></p>
                            <p><a href='/'>hosting an Amazon Hub</a></p>
                            <p><a href='/'> See More Make money with Us</a></p>
                    </div>
                    <div className='footer__know'>
                        <h3>Amazon Payment Products</h3>
                            <p><a href='/'>Amazon Business Card</a></p>
                            <p><a href='/'>Shop your Points</a></p>
                            <p><a href='/'>Reload Your Balance</a></p>
                            <p><a href='/'>Amazon Currency Converter</a></p>
                    </div>
                    <div className='footer__know'>
                        <h3>Let Us Help You</h3>
                            <p><a href='/'>Amazon and COVID-19</a></p>
                            <p><a href='/'>Your Account</a></p>
                            <p><a href='/'>shipping Rates & Policies</a></p>
                            <p><a href='/'>Returns & Replacements</a></p>
                            <p><a href='/'>Manage Your Content and Devices</a></p>
                            <p><a href='/'>Help</a></p>
                    </div>  
                </div>
                
                
                {/* LANGUAGE */}
                <div className='lang'>
                    <div>
                        <Link to="/">
                            <img 
                                    className="header__logo" 
                                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                                    alt="header__logo" 
                                />
                        </Link>               
                    </div>
                    <div className='lang__country'>
                        <div> English</div>
                    </div>
                    <div className='lang__country'>
                        <div> USD - U.S. Dollar</div>
                    </div>
                    <div className='lang__country'>
                        <div> United States</div>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default Home
