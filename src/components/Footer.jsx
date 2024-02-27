import './Components.css'

const Footer = () => {

  return (
   <>
   <footer className="footer container-fluid text-emphasis text-center p-4 border-top border-secondary">
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <h3>Contact Us</h3>
                <p>Address: 123 Restaurant Street, Cityville</p>
                <p>Email: info@zeroresto.com</p>
                <p>Phone: +1 (123) 456-7890</p>
            </div>
            <div className="col-md-6">
                <h3>Follow Us</h3>
                <div className="social-icons">
                    <a href="#" class="text-emphasis me-3"><i class="bi bi-facebook"></i></a>
                    <a href="#" class="text-emphasis me-3"><i class="bi bi-twitter"></i></a>
                    <a href="#" class="text-emphasis me-3"><i class="bi bi-instagram"></i></a>
                </div>
            </div>
        </div>
    </div>
    <div className="mt-3">
        <p>&copy; 2024 Zero Resto. All rights reserved.</p>
    </div>
</footer> 
</> 
  )
}

export default Footer
