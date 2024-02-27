import Footer from "../components/Footer"
import { useState } from "react"
import ServiceItems from "../components/ServiceItems"
import Navbar from "../components/Navbar"

const Services = () => {

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

  const showAlert = () => {
    alert('under developement');
  };



  return (
    <>
    <Navbar/>
    <h1 className="title-services text-center"><b>Services</b></h1>
    <div className="service-center container d-flex flex-column" >
    <div className="container row d-flex justify-content-around p-5">
    {UserService.map(item => (
      <ServiceItems icon={item.icon} title={item.title} description={item.description} showAlert={showAlert} />
    ))}
    </div>
    </div>
    <Footer/>
    </>
    

    



  )
}

export default Services