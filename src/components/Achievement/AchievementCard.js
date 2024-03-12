import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { SiCoursera } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";

function AchievementCard(props) {
  return (
    <Card className="achievement-card-view">
      <Card.Img variant="bot" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {!props.isBlog && props.cLink && (
          <Button variant="primary" href={props.cLink} target="_blank">
            <SiCoursera /> &nbsp;
            {props.isBlog ? "Blog" : "Coursera"}
          </Button>
        )}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.liLink && (
          <Button
            variant="primary"
            href={props.liLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <SiLinkedin /> &nbsp;
            {"LinkedIn"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default AchievementCard;
