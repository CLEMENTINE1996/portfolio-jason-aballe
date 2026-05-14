import React from "react";
import { projects } from "../portfolio";
import { Container, Row, Col, Badge, Card, CardBody } from "reactstrap";
import Fade from "react-reveal/Fade";

const Projects = () => {
  return (
    <section id="projects" className="section section-lg bg-main">
      <Container>
        <Fade bottom>
          <div className="d-flex align-items-center mb-5">
            <h2 className="display-3 text-white mb-0">Featured Projects</h2>
          </div>
          <Row className="row-grid">
            {projects.map((data, i) => (
              <Col lg="6" key={i} className="mb-4">
                <Card className="glass-card h-100 border-0 shadow-lg">
                  <CardBody className="p-4">
                    <div className="d-flex align-items-center mb-3">
                      <h4 className="text-white mb-0">{data.name}</h4>
                    </div>
                    <p className="text-dim mb-4" style={{ minHeight: '60px' }}>
                      {data.desc}
                    </p>
                    <div className="mb-4 d-flex flex-wrap">
                      {data.tags && data.tags.map((tag, idx) => (
                        <Badge 
                          key={idx} 
                          color="info" 
                          pill 
                          className="mr-2 mb-2 px-3 py-1"
                          style={{ backgroundColor: 'rgba(34, 211, 238, 0.1)', border: '1px solid #22d3ee', color: '#22d3ee' }}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    {data.link && (
                      <a 
                        href={data.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-success font-weight-bold"
                      >
                        Launch Project <i className="fa fa-external-link ml-1" />
                      </a>
                    )}
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Fade>
      </Container>
    </section>
  );
};

export default Projects;