import React from "react";
import { greetings } from "../portfolio";
import { Button, Container, Row, Col } from "reactstrap";
import GreetingLottie from "../components/DisplayLottie";
import SocialLinks from "../components/SocialLinks";
import { basePath } from "../constant";

const Greetings = () => {
  return (
    <main>
      <section className="section section-lg section-hero bg-gradient-custom d-flex align-items-center">
        <Container>
          <div className="hero-card mt-6">
            <Row className="align-items-center">
              <Col lg="6" className="order-lg-2">
                <div className="lottie-wrapper">
                  <GreetingLottie animationPath={`${basePath}/lottie/coding.json`} />
                </div>
              </Col>
              <Col lg="6" className="order-lg-1">
                <h1 className="hero-title">{greetings.subTitle}</h1>
                <p className="hero-description mt-3">
                  {greetings.description}
                </p>
                <div className="mt-4">
                  <SocialLinks />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Greetings;