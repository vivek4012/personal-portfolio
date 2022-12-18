import React,{useEffect,useState} from 'react'
import "./styles.css"
import Typewriter from 'typewriter-effect'
import ParticleBackground from "./particlebackground";
import { Alert,Button,Modal } from 'react-bootstrap';

function Home () {
    return (
      < >
        <CenterTitle />
        <ParticleBackground />
      </ >
    );
  }
  
  function CenterTitle() { 
 
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
  
  
    return (
        <div className="main25">
        <h3 className='text2'>Vivek</h3>
        <span>  <span className='text'> i'm</span> <span> {" "}</span>
            <Typewriter className="text2" options={{ loop: true }} onInit={(Typewriter) => {
                Typewriter.typeString(" developer")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString(" freelancer")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString(" 3D Visualizer")
                    .pauseFor(2000)
                    .deleteAll()
                    .start()
            }} /> </span>
        <div className='iconmain'>
            <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/vivek-b-raj-b724a6b6/'> <div className='icon'><img className='iconimage' src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" alt="" /></div></a>
            <a target="_blank" rel="noopener noreferrer" href='https://github.com/vivek4012'> <div className='icon'><img className='iconimage' src="https://cdn-icons-png.flaticon.com/512/1051/1051326.png" alt="" /></div></a>
            <a target="_blank" rel="noopener noreferrer" href='https://mailto:b.vivek47@gmail.com'> <div className='icon'><img className='iconimage' src="https://cdn-icons-png.flaticon.com/512/1782/1782765.png" alt="" /></div></a>
        </div>
        <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> please  click on top navigation bar to access projects education and skills</Modal.Title>
        </Modal.Header>
        
      </Modal>
    </>

    </div>
    );
  }
  
  export default Home;