
const ServiceItems = (props) => {

  return (

    <>
    <div className="card text-center col-sm-4">
          <button 
          type="button" 
          className="btn btn-dark" 
          data-bs-toggle="modal" 
          data-bs-target="#deliveryModal" 
          data-bs-whatever="delivery-order"
          onClick={props.showAlert}
          >
          <i className={props.icon}></i>
          </button>

          <div className="card-body" >
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text p-3">{props.description}</p>
          </div>
    </div>
    </>

  )
}

export default ServiceItems