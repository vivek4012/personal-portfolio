 
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import "./styles.css"
 
function Project() {
    return (
        < Container  >
            <Row>
                <Col><Portfolio /></Col>
                <Col><Airbnb /></Col>

            </Row>
            <Row>
                <Col><Houz /></Col>
                <Col><Voxel /></Col>

            </Row>
           
        </Container>
    );
}

function Portfolio() {
    return ( 
        <a href="/">  
        <div style={{ marginTop: "100px" }} >
             <Card className='card2' style={{ margin: "auto" }}>
                <Card.Img className='image32'  variant="top" src="https://firebasestorage.googleapis.com/v0/b/airbnb-auth-599df.appspot.com/o/personal%20portfolio.png?alt=media&token=b764fa76-d468-4902-807b-fd79cf873ccf" />
                <Card.Body>
                    <Card.Title> <h2 style={{ fontWeight: "bolder" }}>  Personal Portfolio website</h2 > </Card.Title>
                    <Card.Text>
                        this is my personal portfolio website , this gives an general  discription  about me
                    </Card.Text>
                    <ul class="list-group list-group-flush">
                        <h5>Stack used : React-Bootstrap</h5>
                        <h4> Pakages used</h4>
                        <li className="list-group-item">React-vertical-timeline-component</li>
                        <li className="list-group-item">Typewriter-effect</li>
                        <li className="list-group-item">TS-particles </li>
                    </ul>
                     
                    <a target="_blank" rel="noopener noreferrer" href='https://github.com/vivek4012/personal-portfolio'> <div className='icon'><img className='iconimage' src="https://cdn-icons-png.flaticon.com/512/1051/1051326.png" alt="" /></div></a>
                </Card.Body>
            </Card>
        </div> 
        </a>
    )

}

function Airbnb() {
    return (
        <a href=" https://airbnbexperiences.vercel.app/" target="_blank"  rel="noreferrer">
        <div style={{ marginTop: "100px" }} >
             <Card className='card2' style={{ margin: "auto" }}>
                <Card.Img variant="top" className='image32 '  src="https://firebasestorage.googleapis.com/v0/b/airbnb-auth-599df.appspot.com/o/airbnb.jpg?alt=media&token=39ab583c-6c62-430e-9706-a9437ee34330" />
                <Card.Body>
                    <Card.Title> <h2 style={{ fontWeight: "bolder" }}>  Airbnb - Experiances clone </h2 > </Card.Title>
                    <Card.Text>
                        this is clone of   Airbnb- experiances  built using react and Tailwind css with  google Firebase as backend for reciving the order and  authentication functionality 
                    </Card.Text>
                    <ul class="list-group list-group-flush">
                        <h5>Stack used : React ,Tailwind CSS , Google Firebase</h5>
                        <h4> Pakages used</h4>

                        <li class="list-group-item">React-Router</li>
                        <li class="list-group-item">React Date-picker</li>
                        <li class="list-group-item"> React-Slick-Coursal </li>
                    </ul>
                    <a target="_blank" rel="noopener noreferrer" href='https://github.com/vivek4012/Airbnb-Experiences'> <div className='icon'><img className='iconimage' src="https://cdn-icons-png.flaticon.com/512/1051/1051326.png" alt="" /></div></a>
                    

                </Card.Body>
            </Card>
        </div>
          </a>

    )

} 

function Houz() {
    return (
        <a href= "https://housekraft.vercel.app/" target="_blank" rel="noreferrer">
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
                        <h5>Stack used : React ,Tailwind , Google FireBase</h5>
                        <h4> Pakages used</h4>

                        <li class="list-group-item">React-Router</li>
                        <li class="list-group-item">React-Redux</li>
                        <li class="list-group-item"> React-Icons </li>
                    </ul>
                     
                    <a target="_blank" rel="noopener noreferrer" href='https://github.com/vivek4012/Housekraft'> <div className='icon'><img className='iconimage' src="https://cdn-icons-png.flaticon.com/512/1051/1051326.png" alt="" /></div></a>
                </Card.Body>
            </Card>
        </div>
          </a>

    )

} 
function Voxel() {
    return (
   
        <a href= "https://voxel-studios.vercel.app/" target="_blank" rel="noreferrer">
        <div style={{ marginTop: "100px" }} >
             <Card className='card2' style={{ margin: "auto" }}>
                <Card.Img variant="top"  className='image32'  src="https://firebasestorage.googleapis.com/v0/b/airbnb-auth-599df.appspot.com/o/voxel%2Fvoxel.jpg?alt=media&token=8b8ab767-fb32-4ccc-b70b-59aadd2633fd" />
                <Card.Body>
                    <Card.Title> <h2 style={{ fontWeight: "bolder" }}> Voxel </h2 > </Card.Title>
                    <Card.Text>
                    this is website of our failed Start-up , this website briefly explains the concept and implications of the startup .
                         the startup was related to architectural visualization which helps to help in designing   of interior design and sales of furniture and apartments , please visit the  site for further details
                    </Card.Text>
                    <ul class="list-group list-group-flush">
                        <h5>Stack used : React ,Tailwind , Google FireBase</h5>
                        <h4> Pakages used</h4>

                        <li class="list-group-item">React-Router</li>
                        <li class="list-group-item">React-Youtube  </li>
                        <li class="list-group-item"> React-Icons </li>
                       
                    </ul>
                     
                    <a target="_blank" rel="noopener noreferrer" href='https://github.com/vivek4012/Voxel-Studios/tree/main'> <div className='icon'><img className='iconimage' src="https://cdn-icons-png.flaticon.com/512/1051/1051326.png" alt="" /></div></a>
                </Card.Body>
            </Card>
        </div>
          </a>
    )

}
export default Project;