import React from "react";
import { educationInfo } from "../portfolio";
import { Container, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";

const Education = () => {
  return (
    <section className="section section-lg section-glass bg-main">
      <Container>
        <Fade bottom duration={2000}>
          <div className="d-flex align-items-center mb-5">
            <h2 className="display-3 text-white mb-0">Academic Background</h2>
          </div>
          <Row>
            {educationInfo.map((info, i) => (
              <Col lg="12" key={i} className="mb-4">
                <div className="glass-card p-4 d-md-flex align-items-center">
                  <div className="mr-4 text-center">
                    <h4 className="text-cyan font-weight-bold mb-0">{info.duration}</h4>
                  </div>
                  <div className="border-left pl-md-4 ml-md-2 border-dim">
                    <h3 className="text-white h4 mb-1">{info.schoolName}</h3>
                    <h5 className="text-cyan mb-2">{info.subHeader}</h5>
                    <p className="text-dim mb-0 italic">{info.desc}</p>
                    {info.descBullets && (
                      <ul className="mt-2 text-dim">
                        {info.descBullets.map((bullet, idx) => (
                          <li key={idx}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Fade>
      </Container>
    </section>
  );
};

export default Education;