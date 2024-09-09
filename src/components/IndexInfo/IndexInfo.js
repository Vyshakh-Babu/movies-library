import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const IndexInfo = () => {
    return (
        <div className="index-info">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={10} md={8}>
                        <h1 className="text-center">Welcome to Our Movie App</h1>
                        <p className="lead text-center">Discover and watch thousands of movies and TV shows</p>
                        <div className="text-center mt-3">
                            <Button variant="danger" size='lg'><Link to="/sign-in" className='text-white text-decoration-none'>Get Started</Link></Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

const MovieCard = ({ title, imgSrc }) => {
    return (
        <Col xs={6} md={3}>
            <Card>
                <Card.Img variant="top" src={imgSrc} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Button variant="danger">Watch Now</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

const FeaturedMovies = () => {
    const imgLink = "https://via.placeholder.com/800x900/0"
    return (
        <div className="featured-movies mt-4">
            <Container>
                <h2 className="text-center mb-4">Featured Movies</h2>
                <Row>
                    <MovieCard title="Movie Title 1" imgSrc={imgLink} />
                    <MovieCard title="Movie Title 2" imgSrc={imgLink} />
                    <MovieCard title="Movie Title 3" imgSrc={imgLink} />
                    <MovieCard title="Movie Title 4" imgSrc={imgLink} />
                </Row>
            </Container>
        </div>
    );
}


const Footer = () => {
    return (
        <div className="footer py-4 text-light bg-dark mt-5">
            <Container>
                <Row>
                    <Col>
                        <h5>Footer Content</h5>
                        <p>Contact Us</p>
                    </Col>
                    <Col>
                        <h5>Quick Links</h5>
                        <ul>
                            <li>About</li>
                            <li>Terms of Service</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}


const App = () => {
    return (
        <div>
            <IndexInfo />
            <FeaturedMovies />
            <Footer />
        </div>
    );
}

export default App;
