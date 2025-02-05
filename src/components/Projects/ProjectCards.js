import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
//import { BsGithub } from "react-icons/bs";
import { ImPlay } from "react-icons/im";
import { SiCloudflarepages } from "react-icons/si";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {/* Demo Button */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <SiCloudflarepages /> &nbsp; Demo
          </Button>
        )}
        {"\n"}
        {"\n"}
        {/* Video Button */}
        {props.webLink && (
          <Button
            variant="primary"
            href={props.webLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <ImPlay /> &nbsp; Video
          </Button>
        )}
        {"\n"}
        {"\n"}
        {/* Website Button */}
        {props.websiteLink && (
          <Button
            variant="primary"
            href={props.websiteLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; Website
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
