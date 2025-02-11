import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Profile-pic.svg";
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
              I'm an 18-year-old working on AI x AR. Right now, most of us rely on our phones or laptops to access smart apps like ChatGPT—taking a photo here, typing a question there. But I like to imagine a future where we don't have to reach for our devices at all. Instead, picture wearing AR glasses that let you ask questions and get answers simply by speaking naturally, all based on what you're looking at.
              <br />
              <br />
              And there's even more to get excited about. As we move beyond touch controls and toward more intuitive interfaces—especially with advances in brain-computer interface technology—we’re looking at a future where simple gestures replace physical devices. I believe that AR Glasses will be for smartphones, was the Iphone was for keyboard phones - it will be next evolution in daily-use devices.          <br />
              <br />
              I'm super excited to be a part of this journey and to see where it takes us.              <br />
              
              <br />
              Check out my monthly newsletter <a href="https://shehraan.substack.com/?utm_source=substack&utm_medium=web&utm_campaign=substack_profile">Learning to Learn</a>,
              <b> where I talk about:</b>
              <ul>
                <li>My consulting work with Microsoft, Meta and Interac</li>
                <li>Creating a Parksinon's disease detector with the help of USC researchers</li>
                <li>My learnings from life</li>
                <li>And More!</li>
              </ul>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
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
                  href="https://github.com/shehraan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/ShehraanH"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shehraan-hafiz/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/shehraan_ah/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
