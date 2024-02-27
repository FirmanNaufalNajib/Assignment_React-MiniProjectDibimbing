
import menu1 from "../assets/images/menu1.jpg"
import menu2 from "../assets/images/menu2.jpg"
import menu3 from "../assets/images/menu3.jpg"
import menu4 from "../assets/images/menu4.jpg"
import menu5 from "../assets/images/menu5.jpg"
import menu6 from "../assets/images/menu6.jpg"
import menu7 from "../assets/images/menu7.jpg"
import menu8 from "../assets/images/menu8.jpg"
import menu9 from "../assets/images/menu9.jpg"
import menu10 from "../assets/images/menu10.jpg"
import menu11 from "../assets/images/menu11.jpg"
import menu12 from "../assets/images/menu12.jpg"

import MenuItems from "../components/MenuItems"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import './Pages.css'


const Menu = () => {

    const dataMenuItem = [
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
      {
        title: "Burger",
        price: "Rp.45,000,-",
        image: menu5
      },
      {
        title: "Pizza",
        price: "Rp.29,000,-",
        image: menu6
      },
      {
        title: "Pie",
        price: "Rp.26,000,-",
        image: menu7
      },
      {
        title: "French Bread",
        price: "Rp.32,000,-",
        image: menu8
      },
      {
        title: "Fried Rice",
        price: "Rp.21,000,-",
        image: menu9
      },
      {
        title: "Fettucine",
        price: "Rp.33,000,-",
        image: menu10
      },
      {
        title: "Noodle",
        price: "Rp.22,000,-",
        image: menu11
      },
      {
        title: "Ravioli",
        price: "Rp.35,000,-",
        image: menu12
      }
    ]

    const showAlert = () => {
      alert('under developement');
    };

  return (
    <>
    <Navbar/>
   
    <h1 className="title-menu text-center"><b>Menu</b></h1>
    <div className="container">

    <div className="arrange-menu row d-flex justify-content-center" >
    {dataMenuItem.map(item => (
      
      <MenuItems title={item.title} price={item.price} image={item.image} showAlert={showAlert}/>
    ))}
    </div>
   </div>
    <Footer/>
    </>
  )
}

export default Menu