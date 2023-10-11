import React, { useEffect, useState } from 'react'
import './DocDetails.css'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';

function DocDetails() {

    const [docItem, setDocItem] = useState([])

    let pathParameter = useParams();
    const { id } = pathParameter
    // console.log(id);

    const fetchData = async () => {
        let response = await axios.get(`https://abhishek7356.github.io/Doctor-api/doctors.json`);
        setDocItem(response.data.doctors)
        console.log(docItem);
    }

    useEffect(() => {
        fetchData()
    }, [])

    let details = docItem.filter((item) => {
        return item.id == id
    }).map((item) => {
        return (
            <div className="innerDiv shadow">
                <div className=' centerName'>
                    <div className=' rounded shadow p-4'>
                        <h2 className='fw-bold mb-4 text-info'>{item.hospital}</h2>
                        <h4>{item.name} ({item.specialty})</h4>
                        <h5>phone : {item.phone}</h5>
                    </div>
                    <div>
                        <p>Location : {item.address}</p>
                        <p>Available time : {item.available_hours}</p>
                        <p>Location : {item.address}</p>
                        <p>Email : {item.email}</p>
                        <hr />
                        <h6>Available days : </h6>
                        <div className="days">
                            {item.available_days &&
                                item.available_days.map((item) => (
                                    <p>{item}  | </p>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <hr />
                <div className='review'>
                    <h5>reviews : </h5>
                    {item.reviews &&
                        item.reviews.map((item) => (
                            <div className='review'>
                                <div className='d-flex'>
                                    <h6 style={{width:'85%'}}>{item.patient_name} on ({item.date})</h6>
                                    <p><i class="fa-solid text-warning fa-star"></i> {item.rating}</p>

                                </div>
                                <p>-{item.comments}</p>
                                <hr />
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    })


    return (
        <div className='outerDiv'>
            {details}
        </div>
    )
}

export default DocDetails