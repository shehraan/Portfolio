import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Parkinson's Disease Detector"
              description="A program that can detect Parkinson's Disease with over 95% accuracy just by using MRI scans. It is based on Ultralytics' Yolo V8, a highly-advanced computer vision model which I used for the object classification."
              websiteLink="https://parkinsondiseasedetector.tech/"
              demoLink="https://medium.com/insights-of-nature/mri-scans-and-ai-a-novel-approach-to-diagnose-parkinsons-disease-in-a-matter-of-seconds-2b04e414e834"
              webLink="https://youtu.be/odBd20KFAdE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Luminet"
              description="Discovered a solution to the issue of internet inacessibility through free-space optical communication (aka satellites with lasers). I created a demonstration for this concept using an Arduino, a laserbeam, a light sensor, and a little bit of C++ which enabled the song 'Never Gonna Give You Up' to be played based on the laserbeam's transmission."
              websiteLink="https://luminet.typedream.app/"
              demoLink="https://firebasestorage.googleapis.com/v0/b/tks-life-prod.appspot.com/o/items%2FtNjFvF2r2jcwoYZ7O1yNdDg4FK13%2FLuminet%20Investor%20Pitch.pdf?alt=media&token=c5e271c8-e6ce-4acd-b6cc-8309e5b77501"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="AR Dragon"
              description="My first time diving into the AR space. This app allows you to fly a dragon in AR on your phone. Built using Unity Engine and C#."
              demoLink="https://medium.com/@shehraanhafiz/flying-a-dragon-in-ar-f0ea0b902dcf"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Microsoft Consulting"
              description="Had the opportunity to pitch our energy efficiency solution to a partner at Microsoft. Using a technique called Voltage Underscaling, we hoped to reduce GPU chip + cooling energy consumption by ~20%. Our idea ended up being selected out of 800+ other participants, and we were chosen to have our ideas be presented to executives and potentially implemented."
              demoLink="https://drive.google.com/file/d/1f-H8FJXL65xSUvMz5zOXgZtTFef5Kir2/view"
              webLink="https://youtu.be/UwmFg5E4orE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Interac Consulting"
              description="Worked with Interac, Canada’s largest payment network, on a smart product recommendation software for their upcoming Konek application."
              demoLink="https://docsend.com/view/4c3djdss6u5n42pv"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Meta Consulting"
              description="Collaborated with Meta's oversight board on youth endangerment on social media and created a proposal to address the issue, with direct validation from Meta's trustee Kristina Arriaga and interviews with youth users/"
              demoLink="https://firebasestorage.googleapis.com/v0/b/tks-life-prod.appspot.com/o/items%2FtNjFvF2r2jcwoYZ7O1yNdDg4FK13%2FShehraan%2C%20Abdullah%2C%20Pirabaa%2C%20Matthew%2C%20Ram%20-%20META%20Challenge%20Slidedeck.pdf?alt=media&token=0cc668c4-2c5b-4b1b-9c36-286105395e89"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="AI Stock Price Predictor"
              description="Built an algorithm that could predict stock prices based on past statistics using NASDAQ's Data Link API. I built this using Jupyter Notebook and Python."
              demoLink="https://medium.com/@shehraanhafiz/cb3829b05cb2"
              webLink="https://youtu.be/NOIdTiEBRJw"           
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
