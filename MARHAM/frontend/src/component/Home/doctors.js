import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
// import { BsCalendar, BsClock, BsGeoAlt } from 'react-icons/bs';
import { clearErrors, getDoctor } from '../../actions/doctorAction';
import Loader from '../layout/Loader/Loader';
import './doctors.css'
import { toast } from 'react-toastify';



const Doctors = () => {

    const dispatch = useDispatch()
    
    const {doctors , loading , error} = useSelector((state) => state.doctors)



    

    const showToastErrorMessage = (e) => {
        toast.error(e, {
        position: toast.POSITION.TOP_RIGHT,
        });
    };

    useEffect(() => {
        if(error){
            showToastErrorMessage(error)
            dispatch(clearErrors())
        }
        dispatch(getDoctor());
        
    },[dispatch, error]);

    if (loading || !doctors) {
        return <Loader />
    }
    return (
        <React.Fragment>
        <div className="container-fluid">

                {doctors.map((doc) => (
                    <Link to={`/doctor/${doc._id}`} style={{color:'black',textDecoration:'none'}}>

                    <div className="container-fluid p-4" key={doc._id}>
                    <div className="practice-details-grid-container">
                        <div className="left-side">
                        <img src={doc.images.url} alt={doc.images.public_id} />
                        <div className="about">
                            <p>
                            {doc.name} <b>{doc.surgeon ? 'Surgeon' : '' }</b>
                            </p>
                            <p>{doc.speciality}</p>
                            <p>{doc.qualification}</p>
                            <p>{doc.address}</p>
                            <p>{doc.contact}</p>
                        </div>
                        </div>

                        
                    </div>

                    
                    </div>
                    </Link>
                ))}
        </div>
        </React.Fragment>
    )
}

export default Doctors