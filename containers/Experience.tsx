import React from "react";
import { experience } from "../portfolio";
import { Container, Row, Col, Badge } from "reactstrap";
import Fade from "react-reveal/Fade";

const Experience = () => {
  return (
    <section id="experience" className="section section-lg">
      <Container>
        <Fade bottom>
          <h2 className="display-3 text-gradient mb-5">Professional Journey</h2>
          <Row>
            {experience.map((data, i) => (
              <Col lg="12" key={i} className="mb-5">
                <div className="glass-card p-4 p-md-5">
                  <Row className="align-items-center">
                    {/* Logo Section */}
                    <Col lg="2" md="3" className="text-center mb-4 mb-md-0">
                      <div className="experience-logo-container shadow-sm">
                        <img
                          src={data.companyLogo}
                          alt={data.company}
                          style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            objectFit: "contain",
                          }}
                        />
                      </div>
                    </Col>

                    {/* Content Section */}
                    <Col lg="10" md="9">
                      <div className="d-flex justify-content-between align-items-start flex-wrap">
                        <div>
                          <h3 className="text-white mb-1">{data.role}</h3>
                          <h5 className="text-cyan mb-3">{data.company}</h5>
                        </div>
                        <Badge color="info" pill className="px-3 py-2 badge-date">
                          {data.date}
                        </Badge>
                      </div>
                      <p className="text-dim mt-3" style={{ fontSize: "1.1rem" }}>
                        {data.desc}
                      </p>
                      <div className="mt-4">
                        {data.descBullets?.map((bullet, idx) => (
                          <div key={idx} className="d-flex align-items-start mb-2">
                            <i className="ni ni-check-bold text-cyan mt-1 mr-3" />
                            <span className="text-dim">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            ))}
          </Row>
        </Fade>
      </Container>
    </section>
  );
};

export default Experience;