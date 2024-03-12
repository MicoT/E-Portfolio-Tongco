import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Greetings to everyone!<span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span> I am <span className="purple">John Mico P. Tongco </span>
            from <span className="purple"> the Philippines.</span>
            <br />
            I am currently studying at Mapúa Malayan Colleges Mindanao.
            <br />
            I am studying to complete my bachelors dergee in Information Systems.
            <br />
            <br />
            Aside from coding, I have other hobbies I do as well!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading 
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies and TV Shows
            </li>
          </ul>

          <p style={{ color: "rgba(48, 48, 252, 0.8)" }}>
            "Sic Parvis Magna!"{" "}
          </p>
          <footer className="blockquote-footer">Sir Francis Drake</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
