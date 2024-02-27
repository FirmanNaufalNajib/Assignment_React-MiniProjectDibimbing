import menu1 from "../assets/images/menu1.jpg"
import menu2 from "../assets/images/menu2.jpg"
import menu3 from "../assets/images/menu3.jpg"
import menu4 from "../assets/images/menu4.jpg"
import slide1 from "../assets/images/slide1.jpg"
import slide4 from "../assets/images/slide4.jpg"
import slide3 from "../assets/images/slide3.jpg"
import image1 from "../assets/images/image1.jpg"
import image3 from "../assets/images/image3.jpg"
import { aboutText } from "../data/data-source"
import MenuItems from "../components/MenuItems"
import ServiceItems from "../components/ServiceItems"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useState } from "react"
import './Pages.css'

const Home = () => {

  const [dataMenuItem, setDataMenuItem] = useState([
    {
      title: "Beef Steak",
      price: "Rp.75,000,-",
      image: menu1
    },
    {
      title: "Salad",
      price: "Rp.24,000,-",
      image: menu2
    },
    {
      title: "Toast",
      price: "Rp.15,000,-",
      image: menu3
    },
    {
      title: "Chicken Rice",
      price: "Rp.69,000,-",
      image: menu4
    },
  ])

  const [UserService, setUserService] = useState([
    {
      icon: "bi bi-truck",
      title: "Delivery Order",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      icon: "bi bi-journal-check",
      title: "Reservation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      icon: "bi bi-calendar-event",
      title: "Event",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
  ])

  const colorNavbar = () => {
    if(!window.scrollTo(0, 100)) {
      <nav style={{ backgroundColor: '#4b50d0'}} ></nav>

    }
  }

  const showAlert = () => {
    alert('under developement');
  };


  return (
    <>
   <Navbar colorNavbar={colorNavbar} />

    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={slide1} className="d-block w-100" alt="slide1"/>
              <div className="carousel-caption d-none d-md-block fs-2 text-dark-emphasis position-absolute top-50 start-50 translate-middle rounded-circle">
                <p className="bg-warning rounded-circle">Casual Foods</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={slide4} className="d-block w-100" alt="slide2"/>
              <div className="carousel-caption d-none d-md-block fs-2 text-dark-emphasis position-absolute top-50 start-50 translate-middle rounded-circle">
                <p className="bg-warning rounded-circle">So Serious Cooking</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={slide3} className="d-block w-100" alt="slide3"/>
              <div className="carousel-caption d-none d-md-block fs-2 text-dark-emphasis position-absolute top-50 start-50 translate-middle rounded-circle">
                <p className="bg-warning rounded-circle">Enjoy!</p>
              </div>
            </div>
      </div>
    </div>

    <div className="container-intro">
        <h1 class="text-center p-3" ><b>About Us</b></h1>    
      <div class="about-conntents container d-flex justify-content-center p-5 fs-5" >   
        <img className="image1" src={image1} alt="image1" />
        <img className="image2" src={image3} alt="image2" />
        <p className="p-3 m-5 align-self-center">{aboutText.par1}</p>
      </div>
    </div>

    <h1 class="title-topSelling text-center p-3"><b>Our Top's Selling</b></h1>
    <div className="container">
      <div className="arrange-menu row d-flex justify-content-center">
      {dataMenuItem.map(item => (
            <MenuItems title={item.title} price={item.price} image={item.image} showAlert={showAlert}/>
          ))}
      </div>
    </div>

    <div className="container-OurService container d-flex flex-column">        
      <h1 className="title-OurService text-center p-3"><b>Our Services</b></h1>
      <div className="container-ServiceItem container row d-flex justify-content-around p-5">
          {UserService.map(item => (
          <ServiceItems icon={item.icon} title={item.title} description={item.description} showAlert={showAlert} />
        ))}        
      </div>
    </div> 

    <Footer/>
    </>
    
  )
}

export default Home