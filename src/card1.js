import React from 'react'
import { NavLink  } from 'react-router-dom'
function Card1(props) {
    return (
        <>
     
              <div className="col-md-4 col-10 mx-auto ">
                <div className="card">
                  <img src={props.src} className="card-imp-top" height="200px" alt={props.src}></img>
                  <div className="card-body">
                      <h5 className="card-title font-weight-bold">{props.title}</h5>
                     
                      <NavLink to="/" className="btn btn-primary">
                          Go Back to home 
                      </NavLink>
                  </div>
                </div>
              </div>
    
            
    </>
    )
}

export default Card1

    
