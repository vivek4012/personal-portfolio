import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import "./styles.css"
import { useNavigate } from 'react-router-dom';
function Project() {
    return (
        < Container  >
            <Row>
                <Col><Portfolio /></Col>
                <Col><Airbnb /></Col>

            </Row>
            <Row>
                <Col><Houz /></Col>
                {/* <Col><Voxel /></Col> */}

            </Row>
           
        </Container>
    );
}

function Portfolio() {
    return (
        <div style={{ marginTop: "100px" }} >
             <Card className='card2' style={{ margin: "auto" }}>
                <Card.Img className='image32'  variant="top" src="https://firebasestorage.googleapis.com/v0/b/airbnb-auth-599df.appspot.com/o/personal%20portfolio.png?alt=media&token=b764fa76-d468-4902-807b-fd79cf873ccf" />
                <Card.Body>
                    <Card.Title> <h2 style={{ fontWeight: "bolder" }}>  personal portfolio website</h2 > </Card.Title>
                    <Card.Text>
                        this is my personal portfolio website , this gives an general  discription  about me
                    </Card.Text>
                    <ul class="list-group list-group-flush">
                        <h5>stack used : React-Bootstrap</h5>
                        <h4> pakages used</h4>

                        <li class="list-group-item">react-vertical-timeline-component
</li>
                        <li class="list-group-item">typewriter-effect</li>
                        <li class="list-group-item">tsparticles </li>
                    </ul>
                    <Button variant="primary" style={{ marginRight: "20px" }} href="/" > live-site  </Button>
                    <Button variant="primary" href="">git-hub </Button>

                </Card.Body>
            </Card>
        </div>
    )

}

function Airbnb() {
    return (
        <div style={{ marginTop: "100px" }} >
             <Card className='card2' style={{ margin: "auto" }}>
                <Card.Img variant="top" className='image32'  src="https://firebasestorage.googleapis.com/v0/b/airbnb-auth-599df.appspot.com/o/airbnb.jpg?alt=media&token=39ab583c-6c62-430e-9706-a9437ee34330" />
                <Card.Body>
                    <Card.Title> <h2 style={{ fontWeight: "bolder" }}>  Airbnb- experiances clone </h2 > </Card.Title>
                    <Card.Text>
                        this is clone of   Airbnb- experiances  built using react and Tailwind css with  google Firebase as backend for reciving the order and  login functionality 
                    </Card.Text>
                    <ul class="list-group list-group-flush">
                        <h5>stack used : React ,Tailwind CSS , Google Firebase</h5>
                        <h4> pakages used</h4>

                        <li class="list-group-item">React-Router</li>
                        <li class="list-group-item">React Date-picker</li>
                        <li class="list-group-item"> React-Slick-Coursal </li>
                    </ul>
                    <Button variant="primary" style={{ marginRight: "20px" }} href="https://airbnb-experiances.netlify.app/"  target="_blank"> live-site  </Button>
                    <Button variant="primary" href="https://github.com/vivek4012/Airbnb-Experiences" target="_blank">git-hub </Button>

                </Card.Body>
            </Card>
        </div>
    )

} 

function Houz() {
    return (
        <div style={{ marginTop: "100px" }} >
             <Card className='card2' style={{ margin: "auto" }}>
                <Card.Img variant="top"  className='image32'  src="https://firebasestorage.googleapis.com/v0/b/airbnb-auth-599df.appspot.com/o/houz.jpg?alt=media&token=0b7f780b-c39e-46a4-8f18-45e8aac60c48" />
                <Card.Body>
                    <Card.Title> <h2 style={{ fontWeight: "bolder" }}>  Houze-craft  </h2 > </Card.Title>
                    <Card.Text>
                        clone website of a prominent interior design firm in banglore , this was a live experimental project , i was a part of the team in designing the website 
                        this website lets the customer customise  laminate and design  and add few additional  units through the website see the output before placing the order 
                    </Card.Text>
                    <ul class="list-group list-group-flush">
                        <h5>stack used : React ,Tailwind , Google FireBase</h5>
                        <h4> pakages used</h4>

                        <li class="list-group-item">React-Router</li>
                        <li class="list-group-item">React-Redux</li>
                        <li class="list-group-item"> React-Icons </li>
                    </ul>
                    <Button variant="primary" style={{ marginRight: "20px" }} href="https://housekraft.netlify.app/" target="_blank"> live-site  </Button>
                    <Button variant="primary" href="https://github.com/vivek4012/Housekraft" target="_blank">git-hub </Button>

                </Card.Body>
            </Card>
        </div>
    )

} 
function Voxel() {
    return (
        <div style={{ marginTop: "100px" }} >
             <Card className='card2' style={{ margin: "auto" }}>
                <Card.Img variant="top" className='image32'  src="https://images.pexels.com/photos/5331074/pexels-photo-5331074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <Card.Body>
                    <Card.Title> <h2 style={{ fontWeight: "bolder" }}> Voxel </h2 > </Card.Title>
                    <Card.Text>
                        this is website of our failed Start-up , this website briefly explains the concept and implications of the startup .
                         the startup was related to architectural visualization which helps to help in designing   of interior design and sales of furniture and apartments , please visit the  site for further details
                    </Card.Text>
                    <ul class="list-group list-group-flush">
                    <h5>stack used : React, Tailwind, Google FireBase</h5>
                       
                        <h4> pakages used</h4>

                        <li class="list-group-item">React-Router</li>
                        <li class="list-group-item">typewriter-effect</li>
                        <li class="list-group-item">tsparticles </li>
                    </ul>
                    <Button variant="primary" style={{ marginRight: "20px" }} href=""> live-site  </Button>
                    <Button variant="primary" href="">git-hub </Button>

                </Card.Body>
            </Card>
        </div>
    )

}
export default Project;