import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ProgressBar from "react-bootstrap/ProgressBar";

import img1 from "../assets/images/img1.jpg";

function AppAbout() {
  const html = 80;
  const responsive = 80;
  const photoshop = 80;

  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>About Us</h2>
          <div className="subtitle">learn more about us</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={img1} />
          </Col>
          <Col sm={6}>
            <p>
              I’m a dedicated MERN stack developer with a strong passion for
              building clean, efficient, and user-centered web applications.
              With hands-on experience across MongoDB, Express, React, and
              Node.js, I enjoy transforming ideas into scalable digital
              solutions. I’m driven by problem-solving, continuous learning, and
              writing code that is both elegant and reliable. Whether working
              independently or collaborating within a team, I focus on
              delivering seamless user experiences and well-architected systems.
              My goal is to create meaningful technology that helps businesses
              grow and users succeed.
            </p>
            <div className="progress-block">
              <h4>HTML / CSS / Javascript </h4>
              <ProgressBar now={html} label={`${html}%`} />
            </div>
            <div className="progress-block">
              <h4>React / Bootstrap</h4>
              <ProgressBar now={responsive} label={`${responsive}%`} />
            </div>
            <div className="progress-block">
              <h4>Node.js / Express.js / MongoDb</h4>
              <ProgressBar now={photoshop} label={`${photoshop}%`} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppAbout;
