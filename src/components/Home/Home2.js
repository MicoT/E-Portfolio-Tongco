import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am great with working with programming languages like{" "}
              <i>
                <b className="purple">Python</b>
              </i>{" "}
              and{" "}
              <i>
                <b className="purple">JavaScript</b>
              </i>
              .
              <br />
              <br />
              I still consider myself as a beginner, but I hope to keep learning
              more each day of my programming profession.
              <br />
              <br />
              I mainly love web development since I am a firm believer that
              anybody can do anything on the web as long as they can build it.
              <br />
              <br />I try to add my knowledge in using{" "}
              <b className="purple">Node.js</b> to handle all my environments
              during my developments.
              <br />
              <br />
              I mainly like using JavaScript Libraries and Frameworks like{" "}
              <b className="purple">React JS</b>{" "} and
              <b className="purple">Next JS</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
            <img src={myImg} className="img-fluid rounded-circle" alt="avatar" />

            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/MicoT"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mico-tongco/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
