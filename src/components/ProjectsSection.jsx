import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const ProjectsSection = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="text-center mb-4 font-bold text-3xl tracking-tight">Projects</h2>
                  <p className="text-center mb-5 text-gray-300">
                    Here are some of my recent works. Click on each to learn more!
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Project 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Project 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Project 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row className="justify-content-center">
                          <Col xs={12} className="d-flex justify-content-center align-items-center p-0">
                            <ProjectCard
                              {...projects[0]}
                              imgStyle={{
                                width: "100vw",
                                height: "75vh",
                                maxWidth: "100vw",
                                maxHeight: "75vh",
                                minHeight: "300px",
                                objectFit: "cover",
                                borderRadius: "1.5rem",
                                boxShadow: "0 8px 32px 0 rgba(60,60,180,0.18)"
                              }}
                            />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row className="justify-content-center">
                          <Col xs={12} className="d-flex justify-content-center align-items-center p-0">
                            <ProjectCard
                              {...projects[1]}
                              imgStyle={{
                                width: "100vw",
                                height: "75vh",
                                maxWidth: "100vw",
                                maxHeight: "75vh",
                                minHeight: "300px",
                                objectFit: "cover",
                                borderRadius: "1.5rem",
                                boxShadow: "0 8px 32px 0 rgba(60,60,180,0.18)"
                              }}
                            />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row className="justify-content-center">
                          <Col xs={12} className="d-flex justify-content-center align-items-center p-0">
                            <ProjectCard
                              {...projects[2]}
                              imgStyle={{
                                width: "100vw",
                                height: "75vh",
                                maxWidth: "100vw",
                                maxHeight: "75vh",
                                minHeight: "300px",
                                objectFit: "cover",
                                borderRadius: "1.5rem",
                                boxShadow: "0 8px 32px 0 rgba(60,60,180,0.18)"
                              }}
                            />
                          </Col>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  )
}