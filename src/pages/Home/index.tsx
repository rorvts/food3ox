import React from "react";
import {Link} from "react-router-dom";
import waveImage from "../../assets/VectorLayout.svg";
import logoImage from "../../assets/Logo.svg";

import { Container, Options, Waves, Logo } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Waves src={waveImage}/>
      <h2>Welcome to</h2>
      <h1>Food3ox</h1>
      <h3>The best food control platform for anyone! </h3>
      <h3>Join For Free.</h3>
      <Logo src={logoImage}/>
      <Options>
        <Link to="/">Sign Up</Link>
        <Link to="/signin">Sign In</Link>
      </Options>
    </Container>
  );
};

export default Home;
