import { StarBackground } from './StarBackground';
import { ThemeToggle } from './ThemeToggle';
import profile from '../assets/img/profile.jpg';
import { motion } from 'framer-motion';
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
//import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export default function HomeSection() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])


  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }


  return (
    <section className="banner dark" id="home">
      <StarBackground />
      <ThemeToggle />
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`  Hi! I'm Diamond`} <span className="txt-rotate " dataPeriod="1000" data-rotate='[ " FullStack Developer", " Web Designer", " UI/UX Designer" ]'> <span className="wrap"> {text} </span> </span> </h1>
                  <p>I MAKE WEBSITES THAT BLOW YOUR MIND!!</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                 <div className="d-flex flex-wrap gap-2 mt-3">
                    <a
                      href="#projects"
                      className="btn btn-primary"
                      style={{ minWidth: 140 }}
                    >
                      View My Work
                    </a>
                    <a
                      href="/resume.pdf"
                      className="btn btn-outline-secondary"
                      style={{ minWidth: 140 }}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download Resume
                    </a>
                  </div>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : "" }>
                  <div className="profile-img-wrapper">
                    <div className="profile-img-bg"></div>
                    <img
                      src={profile}
                      alt="Home Img"
                      className="profile-img"
                    />
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

