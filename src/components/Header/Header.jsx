import React from 'react'
import './Header.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <Navbar className="bg-info">
                <Container>
                    <Link to={'/'}><Navbar.Brand className='fw-bold text-light' href="">
                        <i class="fa-solid fa-user-doctor fa-bounce me-2"></i>
                        React Bootstrap
                    </Navbar.Brand></Link>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header