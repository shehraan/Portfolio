import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import AIchat from "../../Assets/Projects/AI-Chat-in-AR.gif";
import msft from "../../Assets/Projects/image.png";
import dragon from "../../Assets/Projects/Dragon.jpg";
import health from "../../Assets/Projects/healthcare_800x600_newcolors.gif";
import Luminet from "../../Assets/Projects/laser.png";
import Meta from "../../Assets/Projects/meta-copy.png";
import Interac from "../../Assets/Projects/SS.png";
import Investor from "../../Assets/Projects/asodkoaopkd.png";
import stonks from "../../Assets/Projects/stonks.png";
import browser from "../../Assets/Projects/taplink.png";
import nanny from "../../Assets/Projects/Screenshot 2025-04-19 132754.png"
import vapi from "../../Assets/Projects/1722190046010-bd1a05f5a5309646.png"
import chat from "../../Assets/Projects/chaticonimages.png"
import x from "../../Assets/Projects/A_black_image.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Vapi Interview Practice"
              description="This webapp allows users to generate mock interview questions based on job criteria and then practice answering those questions with a voice agent, receiving feedback afterward."
              websiteLink="https://vapi-interview-practice.vercel.app/"
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vapi}
              isBlog={false}
              title="Vapi Discord Bot"
              description="This Discord Bot brings voice‑powered AI assistance right into your Discord server. With a simple slash‑command interface, you can start natural‑language calls to your Vapi AI assistant, monitor live call progress and retrieve call statuses, browse your recent conversations with adjustable history limits, terminate ongoing sessions on demand, and get help anytime with built‑in command guidance."
              webLink="https://drive.google.com/file/d/1roRtP3aeANeL9YAZuFCNjqsAz5cVMrF_/view?usp=sharingg"
              websiteLink="https://github.com/shehraan/Vapi-based-Discord-Bot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nanny}
              isBlog={false}
              title="AeyeR"
              description="Created the world's first 'ChatGPT for Eyes' app, which allows you to speak with AI in Augmented Reality. The app can take an image of what you're looking at, and provide a response to your message, based upon the image. My Nanny used it to learn English."
              webLink="https://youtu.be/KbjbYzSsAtg"
              websiteLink="https://github.com/shehraan/AR-Glasses-Assistant"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Luminet}
              isBlog={false}
              title="Luminet"
              description="Discovered a solution to the issue of internet inacessibility through free-space optical communication (aka satellites with lasers). I created a demonstration for this concept using an Arduino, a laserbeam, a light sensor, and a little bit of C++ which enabled the song 'Never Gonna Give You Up' to be played based on the laserbeam's transmission."
              websiteLink="https://luminet.typedream.app/"
              webLink="https://youtu.be/KbjbYzSsAtg?si=FPKgI_i3yQV2Hzhu"
              slideLink="https://firebasestorage.googleapis.com/v0/b/tks-life-prod.appspot.com/o/items%2FtNjFvF2r2jcwoYZ7O1yNdDg4FK13%2FLuminet%20Investor%20Pitch.pdf?alt=media&token=c5e271c8-e6ce-4acd-b6cc-8309e5b77501"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Interac}
              isBlog={false}
              title="Parkinson's Disease Detector"
              description="A program that can detect Parkinson's Disease with over 95% accuracy just by using MRI scans. I collaborated with the University of Southern California to get access to private medical data. It is based on Ultralytics' Yolo V8, a highly-advanced computer vision model which I used for the object classification."
              websiteLink="https://parkinsondiseasedetector.tech/"
              demoLink="https://medium.com/insights-of-nature/mri-scans-and-ai-a-novel-approach-to-diagnose-parkinsons-disease-in-a-matter-of-seconds-2b04e414e834"
              webLink="https://youtu.be/odBd20KFAdE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dragon}
              isBlog={false}
              title="AR Dragon"
              description="My first time diving into the AR space. This app allows you to fly a dragon in AR on your phone. Built using Unity Engine and C#."
              webLink="https://youtube.com/shorts/aZA7hzXDWKg?si=IGjJWXSTNYj6fSsF"
              demoLink="https://medium.com/@shehraanhafiz/flying-a-dragon-in-ar-f0ea0b902dcf"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={x}
              isBlog={false}
              title="Vapi Minimalist Assistant"
              description="This is a minimalist web application that integrates the Vapi Voice Widget. It allows users to interact with the Vapi AI assistant through a simple and clean interface. The app is designed to provide a seamless experience for users who want to access the Vapi assistant without any distractions."
              webLink="https://drive.google.com/file/d/1s1Xh1f67XsuatGPaXoEX5h8-RFvnp2qC/view?usp=sharing"
              websiteLink="https://github.com/shehraan/VAPI-BASIC-Assistant"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={browser}
              isBlog={false}
              title="TapLink (Coming Soon)"
              description="Working on the an AR browser with 3dof capabilities. The app will enable you to anchor the screen and make it appear as if it is pinned in place, regardless of the rotations of your head. The app also moves the mouse relative to your head motions, allowing you click where you look! Such functions are not natively supported, but have been implemented via software."
               />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={msft}
              isBlog={false}
              title="Microsoft Consulting"
              description="Had the opportunity to pitch our energy efficiency solution to a partner at Microsoft. Using a technique called Voltage Underscaling, we hoped to reduce GPU chip + cooling energy consumption by ~20%. Our idea ended up being selected out of 800+ other participants, and we were chosen to have our ideas be presented to executives and potentially implemented."
              slideLink="https://drive.google.com/file/d/1FbwyXGqiU5Waj860xmDyftjKCUuEJH81/view?usp=sharing"
              webLink="https://youtu.be/UwmFg5E4orE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Investor}
              isBlog={false}
              title="Interac Consulting"
              description="Worked with Interac, Canada’s largest payment network, on a smart product recommendation software for their upcoming Konek application. Prototyped a smart product suggestion software for upcoming Konek application. Ended up being chosen by Interac out of three other ideas."
              slideLink="https://docsend.com/view/4c3djdss6u5n42pv"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Meta}
              isBlog={false}
              title="Meta Consulting"
              description="Collaborated with Meta's oversight board on youth endangerment on social media and created a proposal to address the issue, with direct validation from Meta's trustee Kristina Arriaga and interviews with youth users/"
              slideLink="https://firebasestorage.googleapis.com/v0/b/tks-life-prod.appspot.com/o/items%2FtNjFvF2r2jcwoYZ7O1yNdDg4FK13%2FShehraan%2C%20Abdullah%2C%20Pirabaa%2C%20Matthew%2C%20Ram%20-%20META%20Challenge%20Slidedeck.pdf?alt=media&token=0cc668c4-2c5b-4b1b-9c36-286105395e89"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stonks}
              isBlog={false}
              title="AI Stock Price Predictor"
              description="Built an algorithm that could predict stock prices based on past statistics using NASDAQ's Data Link API. I built this using Jupyter Notebook and Python."
              demoLink="https://medium.com/@shehraanhafiz/cb3829b05cb2"
              webLink="https://youtu.be/NOIdTiEBRJw"           
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={health}
              isBlog={false}
              title="Medical chatbot"
              description="A chatbot webapp that allows you to talk with MedpaLM 2, Google's latest large language model oriented towards the medical domain."
              demoLink="https://medium.com/insights-of-nature/medpalm-the-doctor-of-tomorrow-8db91b9e26b0"
              webLink="https://youtu.be/4UiZsw3aTjk"     
              websiteLink="https://shehraan.online/"      
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
