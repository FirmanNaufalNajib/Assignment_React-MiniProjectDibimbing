import image1 from "../assets/images/image1.jpg"
import image3 from "../assets/images/image3.jpg"
import introduction1 from "../assets/images/introduction1.jpg"
import introduction2 from "../assets/images/introduction2.jpg"
import Footer from '../components/Footer'
import { aboutText } from '../data/data-source'
import './Pages.css'
import Navbar from '../components/Navbar'


const About = () => {


  return (
    <>
    <Navbar/>
    <h1 className="title-about text-center mb-5">
      <b>About</b>
    </h1>

    <div className="bout-conntents container d-flex justify-content-center p-1 fs-5">   
        <img className="image1" src={image1} alt="image1" data-aos="fade-down"/>
        <img className="image2" src={image3} alt="image2" data-aos="fade-down"/>   
        <p className="par1 p-3 m-5 align-self-center" data-aos="fade-down">{aboutText.par1}</p>
      </div>

      <div className="container d-flex justify-content-center p-1 fs-5 text-end " data-aos="fade-down">  
        <p className="par2 p-3 align-self-center" data-aos="fade-down">{aboutText.par2}</p> 
        <img className="intro1" src={introduction1} alt="introduction1" data-aos="fade-down"/>
      </div>

      <div className="container d-flex flex-column p-1 fs-5 text-end ">   
        <img className="intro2" src={introduction2} alt="introduction2" data-aos="fade-down"/>
        <p className="par3 p-1" data-aos="fade-down">{aboutText.par3}</p>
      </div>
    <Footer/>
    </>
  )
}

export default About