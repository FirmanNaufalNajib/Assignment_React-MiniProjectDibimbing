import './Components.css'

const MenuItems = (props) => {


  return (
    <>
    
    <div className="col mt-5">
      <div className="card">
        <img src={props.image} className="card-img-top" alt="menus"></img>
        
        <div className="card-body">
          <h4 className="card-title">{props.title}</h4>
          <p className="card-text">{props.price}</p>
          <button className="btn btn-outline-secondary" onClick={props.showAlert}>Servicing</button>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default MenuItems