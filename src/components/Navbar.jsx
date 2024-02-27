import logo from "../assets/images/Free_Sample_By_Wix.jpg"
import {Link} from 'react-router-dom'



const Navbar = (props) => {

 

  return (
    <>
    <nav onScroll={props.colorNavbar} className="navbar navbar-expand-lg fixed-top" id="navbar">
      <div className="container-fluid navbar-flex" >
        <Link to="/"><img className="image-brand" src={logo} alt="Logo"/></Link>
        
        <div className="navbar-nav collapse navbar-collapse p-2 d-flex flex-row-reverse">
          <Link className="nav-link" to="/menu">
            <h3>Menu</h3>
          </Link>
          <Link className="nav-link" to="/about">
            <h3>About</h3>
          </Link>
          <Link className="nav-link" to="/services">
            <h3>Services</h3>
          </Link>
        </div>
      </div>
    </nav>    
    </>
  )
}

export default Navbar