import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const servicesData = [
  {
    id: 1,
    icon: "fab fa-js",
    title: "Javascipt",
    description:
      "I use JavaScript to create dynamic, interactive web applications. It powers client-side functionality and makes websites come alive.",
  },
  {
    id: 2,
    icon: "fab fa-bootstrap",
    title: "Bootstrap",
    description:
      "With Bootstrap, I design responsive, mobile-first layouts quickly. It provides ready-to-use components and a clean grid system for sleek designs.",
  },
  {
    id: 3,
    icon: "fab fa-react",
    title: "React",
    description:
      "React allows me to build fast, scalable, and maintainable user interfaces. Using reusable components, I create seamless modern web experiences.",
  },
  {
    id: 4,
    icon: "fab fa-node-js",
    title: "Node.js",
    description:
      "Node.js lets me build fast, scalable server-side applications using JavaScript.It powers real-time web apps and APIs with high performance.",
  },
  {
    id: 5,
    icon: "fas fa-server",
    title: "Express.js",
    description:
      "Express.js is a lightweight framework for Node.js that simplifies server and API development.It provides robust routing, middleware, and easy integration with databases.",
  },
  {
    id: 6,
    icon: "fas fa-database",
    title: "Mongodb",
    description:
      "MongoDB is a flexible, document-based NoSQL database for modern web apps.It stores data in JSON-like documents, making it scalable and easy to manage.",
  },
];

function AppServices() {
  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our Resume</h2>
          <div className="subtitle">***--Resume--***</div>
        </div>
        <Row>
          {servicesData.map((services) => {
            return (
              <Col sm={4} className="holder" key={services.id}>
                <div className="icon">
                  <i className={services.icon}></i>
                </div>
                <h3>{services.title}</h3>
                <p>{services.description}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default AppServices;
