import Carousel from "react-bootstrap/Carousel";

var heroData = [
  {
    id: 1,
    image: require("../assets/images/img-hero1.jpg"),
    title: "Modern Web Solutions",
    description:
      "Build fast, scalable, and stunning web applications tailored to your business goals. Transform your ideas into reality with cutting-edge MERN development.",
    link: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile",
  },
  {
    id: 2,
    image: require("../assets/images/img-hero2.jpg"),
    title: "Seamless User Experiences",
    description:
      "Deliver smooth, intuitive, and responsive interfaces that keep users engaged. From frontend elegance to backend power we craft it all.",
    link: "https://www.facebook.com",
  },
  {
    id: 3,
    image: require("../assets/images/img-hero3.jpg"),
    title: "Smart, Scalable Architecture",
    description:
      "Future-proof your digital platform with robust, secure, and scalable systems. Designed for performance, optimized for growth.",
    link: "https://www.twitter.com",
  },
];

function AppHero() {
  return (
    <section id="home" className="hero-block">
      <Carousel>
        {heroData.map((hero) => {
          return (
            <Carousel.Item key={hero.id}>
              <img
                className="d-block w-100"
                src={hero.image}
                alt={"slide " + hero.id}
              />
              <Carousel.Caption>
                <h2>{hero.title}</h2>
                <p>{hero.description}</p>
                <a className="btn btn-primary" href={hero.link}>
                  Learn More <i className="fas fa-chevron-right"></i>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}

export default AppHero;
