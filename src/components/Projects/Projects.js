import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sage from "../../Assets/Projects/sage.png";
import chatgpt from "../../Assets/Projects/ChatGPT.jpg";
import heart from "../../Assets/Projects/heart.png";
import avalanche from "../../Assets/Projects/avalanche.png";
import therapy from "../../Assets/Projects/therapy.png";
import twitter from "../../Assets/Projects/twitterapp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sage}
              isBlog={false}
              title="SAGE: Smart Academic Guidance Engine"
              description="SAGE is a web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It aims to provide smart academic guidance and support to students and educators."
              ghLink="https://github.com/MicoT/sage-webapp.git"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatgpt}
              isBlog={false}
              title="GPT on the Go: ChatGPT Voice Assistant Device for Students"
              description="This study presents a ChatGPT-powered voice assistant device designed to enhance the educational experience for students. The AI device offers instant access to information, personalized academic support, and interactive learning interactions."
              ghLink="https://github.com/MicoT/AI-VOICE-ASSISTANT.git"
              demoLink="https://malayancollegesmindanaoo365-my.sharepoint.com/:w:/r/personal/jmtongco_mcm_edu_ph/_layouts/15/Doc.aspx?sourcedoc=%7B667e4998-d0a4-462f-a6d5-db4c71e0a489%7D&action=edit&wdPid=73ef5385"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={heart}
              isBlog={false}
              title="Heart Disease Classification using Machine Learning"
              description="A heart disease classification using machine learning is project I made awhile back in google colab. The Github repository has a trained model compiled using a pickle library in Python."
              ghLink="https://github.com/MicoT/Heart-Disease-Classification-using-Machine-Learning.git"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={avalanche}
              isBlog={false}
              title="ERC20 Tokens In Avalance Blockchain"
              description="This is a simple project for Metacrafters to understand the basics of Avalance network in deploying ERC20 tokens."
              ghLink="https://github.com/MicoT/Metacrafters-module-4.git"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={therapy}
              isBlog={false}
              title="Web Appointment System for Therapy Center using PHP"
              description="This project was done to make an appointment system for a therapy center in Davao City. The System uses the basic HTML, CSS and JavaScript while using PHP as the backend. The database used was mySQL."
              ghLink="https://github.com/MicoT/SAD_Project.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twitter}
              isBlog={false}
              title="Twitter Clone using DART and Flutter"
              description="This is a simple mobile app made in flutter to mimic the famous social media: Twitter. Users can create a tweet and edit their profile to their preference."
              ghLink="https://github.com/MicoT/OOP-MODULE3-EXAM.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
