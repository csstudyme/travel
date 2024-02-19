import React, {useEffect, useState} from "react";
import './home.css'

// Navbar Images and Components
import { SiYourtraveldottv } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

// Serachbar Images Videos and Components
import video from "../../Assets/video.mp4";
import {GrLocation} from 'react-icons/gr'
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { FaTripadvisor } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";

// main component Images and more
import img1 from "../../Assets/img1.jpg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.jpg";
import img6 from "../../Assets/img6.jpg";
import img7 from "../../Assets/img7.jpg";
import img8 from "../../Assets/img8.jpg";
import img9 from "../../Assets/img9.jpg";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

// Footer 
import video2 from '../../Assets/video2.mp4' 
import { FiSend } from "react-icons/fi";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";

import Aos from 'aos'
import 'aos/dist/aos.css' 

//main
const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX ",
    fees: "$700",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.",
  },

    {
      id:2,
  imgSrc: img2,
  destTitle: 'Machu Picchu',
  location: 'Peru',
  grade: 'CULTURAL RELAX ',
  fees: '$600',
  description: 'Huayna Picchu is a mountain in Peru, rising over Machu Picchu,the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular.'
    },

    {
      id:3,
  imgSrc: img3,
  destTitle: 'Great Barrier Reef',
  location: 'Australia',
  grade: 'CULTURAL RELAX ',
  fees: '$700',
  description: 'One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is lavish and beauty. Always interesting to be in this place'
    },

    {
      id:4,
  imgSrc: img4,
  destTitle: 'Cappadocia',
  location: 'Turkey',
  grade: 'CULTURAL RELAX',
  fees: '$800',
  description: 'According to the World Tourism Ranking, 45 Million people visit Turkey each year, and from that about 2 Million come to visit Cappadocia. This place is known for its luxurious stays and adventurous activities'
    },

    {
      id:5,
      imgSrc: img5,
  destTitle: 'Guanajuato',
  location: 'Mexico',
  grade: 'CULTURAL RELAX',
  fees: '$1100',
  description: 'A city in central Mexico, Guanajuato is known for its history of silver mining and colonial architecture. The houses in the city are very attractively painted with the most bright colors available. Always welcome.'
    },

    {
      id:6,
      imgSrc: img6,
  destTitle: 'Cinque Terre',
  location: 'Italy',
  grade: 'CULTURAL RELAX',
  fees: '$840',
  description: 'The vibrant hues of the houses are its benchmark and explain the beauty of this place. Also, if you are a foodie and love seafood, you will be exhilarated with the choice you are about to get here. Happy exploring great food!'
    },

    {
      id:7,
      imgSrc: img7,
      destTitle: 'Angkor Wat',
      location: 'Cambodia',
      grade: 'CULTURAL RELAX',
      fees: '$790',
      description: 'Angkot wat represents the entire range of Khmer art from the 9th to the 15th century. This temple is considered the heart and soul of Cambodia. This place is known for its luxurious stays and adventurous activities'
    },

    {
      id:8,
      imgSrc: img8,
  destTitle: 'Taj Mahal',
  location: 'India',
  grade: 'CULTURAL RELAX',
  fees: '$900',
  description: 'An immense mausoleum of white marble, built-in Agra by Mughal emperor Shah Jahan in memory of his wife Mumtaz, the monument is breathtakingly beautiful. This place is known for its luxurious stays and adventurous activities'
    },

    {
      id:9,
  imgSrc: img9,
  destTitle: 'Bali Island',
  location: 'Indonesia',
  grade: 'CULTURAL RELAX',
  fees: '$500',
  description: 'Bali is an Indonesian Island and one of the best holiday destinations in the Indonesian archipelago. Bali is known for its volcanic mountains, history, art & culture, food, temples and beautiful sandy beaches.'
    },
];


const Home = () => {

  // Navbar
  const [active, setActive] = useState('navBar')
  const showNav = () => {
    setActive('navBar activeNavbar')
  }

  const removeNavbar = () => {
    setActive('navBar closeNavbar')
  }


useEffect(()=>{
  Aos.init({duration: 2000})
}, [])

//main


  return (
    <>
    <section className="navBarSection">
        <header className="header flex">
          <div className="logoDiv">
            <a href="#" className="logo flex">
              <h1>
                <SiYourtraveldottv className="icon" /> Travel.
              </h1>
            </a>
          </div>

          <div className={active}>
            <ul className="navLists flex">
              <li className="navItem">
                <a href="#" className="navLink">Home</a>
              </li>

              <li className="navItem">
                <a href="#" className="navLink">Package</a>
              </li>

              <li className="navItem">
                <a href="#" className="navLink">Shop</a>
              </li>

              <li className="navItem">
                <a href="#" className="navLink">About</a>
              </li>

              <li className="navItem">
                <a href="#" className="navLink">pages</a>
              </li>

              <li className="navItem">
                <a href="#" className="navLink">News</a>
              </li>

              <li className="navItem">
                <a href="#" className="navLink">Contact</a>
              </li>

              <button className="btn">
                <a href="#">Book Now</a>
              </button>

            </ul>
            <div onClick={removeNavbar} className="closeNavbar">
              <AiFillCloseCircle className="icon" />
            </div>
          </div>

          <div onClick={showNav} className="toggleNavbar">
            <TbGridDots className="icon" />
          </div>

        </header>
      </section>
    <section className="home">
      <div className="overlay"></div>

      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Our Packages
          </span>
          <h1 data-aos="fade-up" className="homeTitle">Search Your Holiday</h1>
        </div>
        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your destination: </label>

            <div className="input flex">
              <input type="text" placeholder="Enter name here...." />

              <GrLocation className="icon" />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">select your date</label>

            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max Price:</label>
              <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>

          <div className="searchOptions flex">
            <HiFilter className="icon" />
            <span>More Filter</span>
          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon" />
            <BsInstagram className="icon" />
            <FaTripadvisor className="icon" />
          </div>
          <div className="leftIcons">
            <BsListTask className="icon" />
            <TbApps className="icon" />
          </div>
        </div>

      </div>
    </section>

    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most visited destination</h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
    
    <section className='footer'>
      <div className="videoDiv">
      <video src={video2} muted autoPlay loop type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          
          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter Email address' />
            <button data-aos="fade-up" className='btn flex' type='submit'>
            SEND <FiSend className='icon' />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
              <SiYourtraveldottv className='icon'/>
              Travel.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
            It is very important for the customer to pay attention to the adipiscing process. By inventing them here, when the least pleasure is found, in time they provide us not with hatred, but with pain, but with desire itself in and resolved?
            </div>
            <div data-aos="fade-up" className="footerSocials flex">
            <AiOutlineTwitter  className='icon' />
            <AiFillYoutube  className='icon' />
            <AiFillInstagram  className='icon' />
            <FaTripadvisor  className='icon' />

            </div>
          </div>

          <div className="footerLinks grid">
            {/* first */}
            <div data-aos="fade-up" data-aos-duration="3000"  className="linkGroup">
              <span className="groupTitle">
                Our Agency
              </span>

              <li className="footerList flex">
              <FiChevronRight className='icon' />
              Services
              </li>

              <li className="footerList flex">
              <FiChevronRight className='icon' />
              Insurance
              </li>

              <li className="footerList flex">
              <FiChevronRight className='icon' />
              Agency
              </li>

              <li className="footerList flex">
              <FiChevronRight className='icon' />
              Tourism
              </li>

              <li className="footerList flex">
              <FiChevronRight className='icon' />
              Payment
              </li>
            </div>
            {/* two */}
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">
                Partners 
              </span>

              <li className="footerList flex">
              <FiChevronRight className='icon' />
              Booking
              </li>

              <li className="footerList flex">
              <FiChevronRight className='icon' />
              Rentcars
              </li>

              <li className="footerList flex">
              <FiChevronRight className='icon' />
              Hostelworld
              </li>

              <li className="footerList flex">
              <FiChevronRight className='icon' />
              Trivago
              </li>

              <li className="footerList flex">
              <FiChevronRight className='icon' />
              Tripadvisor
              </li>
            </div>
            {/* third */}
            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>

              <li className="footerList flex">
              <FiChevronRight className='icon' />
              London
              </li>

              <li className="footerList flex">
              <FiChevronRight className='icon' />
              California
              </li>

              <li className="footerList flex">
              <FiChevronRight className='icon' />
              Indonesia
              </li>

              <li className="footerList flex">
              <FiChevronRight className='icon' />
              Europe
              </li>

              <li className="footerList flex">
              <FiChevronRight className='icon' />
              Oceania
              </li>
            </div>

          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE</small>
            <small>COPYRIGHT RESERVED - AJAY 2024</small>
          </div>
        </div>
      </div>
    </section>
      </>

  );
};

export default Home;