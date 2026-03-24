import React from "react";
import { Link, useNavigate, useParams } from "react-router";

const About = () => {
  // URL params — route defined as path="projects/:id"
  const { id } = useParams();

  console.log(id);

  // Programmatic
  const navigate = useNavigate();
  navigate("/");

  return (
    <div>
      <Link to="/">Home</Link>
      <p>About</p>
    </div>
  );
};

export default About;
