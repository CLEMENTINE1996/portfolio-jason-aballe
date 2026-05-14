import { Icon } from "@iconify/react";
import React, { Fragment } from "react";
import Fade from "react-reveal/Fade";
import { Col, Container, Row, UncontrolledTooltip } from "reactstrap";
import DisplayLottie from "../components/DisplayLottie";
import { skillsSection } from "../portfolio";

const Skills = () => {
  return (
    skillsSection && (
      <section className="section section-lg bg-main" id="skills">
        <Container>
          <Fade bottom duration={2000}>
            <div className="text-center mb-5">
              <h1 className="display-3 text-white">{skillsSection.title}</h1>
              <p className="lead text-secondary">{skillsSection.subTitle}</p>
            </div>
            {skillsSection.data.map((section, index) => (
              <Row className="my-5 align-items-center" key={index}>
                <Col lg="6" className={index % 2 === 0 ? "order-2 order-lg-1" : "order-2"}>
                  <DisplayLottie animationPath={section.lottieAnimationFile} />
                </Col>
                <Col lg="6" className={index % 2 === 0 ? "order-1 order-lg-2" : "order-1"}>
                  <h3 className="h3 text-cyan mb-4">{section.title}</h3>
                  <div className="d-flex justify-content-start flex-wrap mb-4">
                    {section.softwareSkills.map((skill, i) => (
                      <Fragment key={i}>
                        <Fade bottom delay={i * 50}>
                          <div
                            className="icon icon-lg icon-shape glass-card shadow-sm rounded-circle m-1 tech-icon-hover"
                            id={skill.skillName.replace(/\s/g, "")}
                            style={{ width: '3.5rem', height: '3.5rem', fontSize: '1.5rem' }}
                          >
                            <Icon icon={skill.iconifyTag} />
                          </div>
                        </Fade>
                        <UncontrolledTooltip delay={0} placement="bottom" target={skill.skillName.replace(/\s/g, "")}>
                          {skill.skillName}
                        </UncontrolledTooltip>
                      </Fragment>
                    ))}
                  </div>
                  <div>
                    {section.skills.map((skill, i) => (
                      <Fade bottom delay={i * 100} key={i}>
                        <div className="d-flex align-items-center mb-2">
                          <i className="ni ni-check-bold text-cyan mr-3" />
                          <p className="text-dim mb-0">{skill}</p>
                        </div>
                      </Fade>
                    ))}
                  </div>
                </Col>
              </Row>
            ))}
          </Fade>
        </Container>
      </section>
    )
  );
};

export default Skills;