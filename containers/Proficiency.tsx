import React from "react";
import { skillsSection } from "../portfolio";
import { Container, Row, Col, Badge } from "reactstrap";
import Fade from "react-reveal/Fade";

const Proficiency = () => {
  return (
    <section id="proficiency" className="section section-lg">
      <Container>
        <Fade bottom duration={2000}>
          <div className="text-center mb-5">
            <h1 className="display-3 text-white">Technical Deep Dive</h1>
            <p className="lead text-secondary">Categorized expertise from 6+ years in full-stack development.</p>
          </div>
          <Row>
            {skillsSection.categories.map((category, index) => (
              <Col lg="4" md="6" key={index} className="mb-4">
                <Fade bottom delay={index * 150}>
                  <div className="glass-card p-4 h-100 proficiency-wrapper">
                    <h5 className="text-cyan font-weight-bold mb-4 text-uppercase" style={{ letterSpacing: '1px' }}>
                      {category.title}
                    </h5>
                    <div className="d-flex flex-wrap">
                      {category.skills.map((skill, idx) => (
                        <h5>
                        <Badge 
                          key={idx} 
                          className="badge-pill badge-outline-cyan mr-2 mb-2 px-3 py-2 text-sm"
                        >
                          {skill}
                        </Badge>
                        </h5>
                      ))}
                    </div>
                  </div>
                </Fade>
              </Col>
            ))}
          </Row>
        </Fade>
      </Container>
    </section>
  );
};

export default Proficiency;