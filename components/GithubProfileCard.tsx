import React from "react";
import { Card, Col, Row, Container } from "reactstrap";
import { GithubUserType } from "../types";
import SocialLinks from "./SocialLinks";
import Fade from "react-reveal/Fade";

const GithubProfileCard = ({ avatar_url, bio, location }: GithubUserType) => {
  return (
    <footer className="footer section-lg bg-main position-relative">
      <Container>
        <Fade bottom duration={2000}>
          <Card className="glass-card shadow-lg border-0 p-5 footer-card">
            <Row className="align-items-center">
              <Col lg="4" className="text-center mb-4 mb-lg-0">
                <div className="avatar-wrapper">
                  <img
                    src={avatar_url}
                    alt="Jason Aballe"
                    className="rounded-circle img-center img-fluid shadow-lg footer-avatar"
                  />
                </div>
              </Col>
              <Col lg="8" className="text-center text-lg-left">
                <h2 className="display-3 text-white mb-2">Let's build something together</h2>
                <p className="lead text-dim mb-4">
                  Ready to start your next project or looking for a developer to join your team? 
                  I'm just a click away.
                </p>
                <div className="d-flex justify-content-center justify-content-lg-start align-items-center flex-wrap">
                  <SocialLinks />
                  <div className="ml-lg-4 mt-3 mt-lg-0">
                    <p className="text-cyan mb-0">
                      <i className="ni ni-pin-3 mr-2" />
                      {location || "Davao del Sur, Philippines"}
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
          <div className="mt-5 text-center">
            <p className="text-dim small text-uppercase" style={{ letterSpacing: '2px' }}>
              Designed & Built by Jason Aballe &copy; {new Date().getFullYear()}
            </p>
          </div>
        </Fade>
      </Container>
    </footer>
  );
};

export default GithubProfileCard;