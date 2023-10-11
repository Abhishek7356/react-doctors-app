import React, { useEffect, useState } from 'react'
import './Main.css'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Main() {

    const [doctorDetails, setDoctorDetails] = useState([]);

    const fetchData = async () => {
        const response = await axios.get('https://abhishek7356.github.io/Doctor-api/doctors.json');
        setDoctorDetails(response.data.doctors)
        console.log(doctorDetails);
    }

    useEffect(() => {
        fetchData()
    }, [])

    let allDocterDetails = doctorDetails.map((item) => {
        return (
            <Card className='cards' style={{ width: '19rem' }}>
                <Card.Body>
                    <Card.Title>{item.hospital}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{item.name}</Card.Subtitle>
                    <Card.Text>Phone : {item.specialty}</Card.Text>
                    <Card.Text><i class="fa-solid fa-star text-warning"></i> {item.rating}</Card.Text>
                    <Link to={`/react-doctors-app/doctorDetails/${item.id}`}><Card.Link href="#" className='btn btn-primary' >More details</Card.Link></Link>
                </Card.Body>
            </Card>
        )
    })

    return (
        <div className='outerContainer'>
            {allDocterDetails}
        </div>
    )
}

export default Main