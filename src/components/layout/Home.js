import { Button, Carousel, Badge } from "react-bootstrap";
import React from "react";
import classes from "./Layout.module.css";
import image1 from "../../elements/image1.png";
import image2 from "../../elements/image2.png";
import image3 from "../../elements/image3.png";
import{Link }from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div>
        <Carousel variant="dark" className={classes.main}>
          <Carousel.Item interval={3000}>
            <img
              className={classes.center}
              display
              src={image1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>
                <Badge bg="primary" style={{ opacity: 0.95 }}>
                  Welcome To Minimalist Bank
                </Badge>
              </h3>
              <h5>
                <Badge bg="dark" text="light">
                  {" "}
                  Where Banking Become Easy.{" "}
                </Badge>
              </h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className={classes.second}
              src={image2}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>
                <Badge bd="primary">Easy as a Selfie!.</Badge>
              </h3>
              <Button variant="dark" as={Link} to="/AllUsers">
                Transfer.
              </Button>
              <p>Transfer with just two clicks!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className={classes.second}
              src={image3}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>
                <Badge>New features</Badge>
              </h3>
              <Button variant="dark" as={Link} to="/History-Trans">
                History
              </Button>
              <p>Track all your transactions.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Home;
