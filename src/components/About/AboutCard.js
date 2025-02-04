import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Shehraan </span>
            from <span className="purple"> Toronto, Canada.</span>
            <br />
            I am currently working on building the world's first AR-optimized chatbot platform for the Rayneo X2's.
            <br />
            I am also studying Computer Science at Toronto Metropolitan University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />  Reading books - one of my favorites is "Six Thinking Hats" by Edward de Bono
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing sports - especially badminton and tennis. 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Tinkering with Computer Parts
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "The best way to predict the future is to create it."{" "}
          </p>
          <footer className="blockquote-footer">Peter Drucker</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
