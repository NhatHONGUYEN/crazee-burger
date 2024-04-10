import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
import TextInput from "../../reusable-ui/TextInput";
import Button from "../../reusable-ui/Button";
import { theme } from "../theme";
import styled from "styled-components";
import { authenticateUser } from "../../../api/user";
import Welcome from "./Welcome.jsx";

export default function LoginForm() {
  //state
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  //comportement
  const handleSubmit = async (e) => {
    e.preventDefault();

    authenticateUser(username);

    setUsername("");
    navigate(`order/${username}`);
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  //affichage (render)
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <Welcome />
      <div>
        <TextInput
          value={username}
          onChange={handleChange}
          placeholder={"Entrez votre prénom"}
          Icon={<BsPersonCircle />}
          required
          className="input-login"
          version="normal"
        />
      </div>
      <Button
        className="button-with-icon"
        label={"Accédez à mon espace"}
        Icon={<IoChevronForward />}
      />
      <Link to="/order"></Link>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 40px ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};
  font-family: "Amatic SC", cursive;

  hr {
    border: 1.5px solid ${theme.colors.primary};
    margin-bottom: ${theme.gridUnit * 5};
  }

  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P5};
  }

  h2 {
    color: ${theme.colors.white};
    margin: 20px 10px 10px;
    font-size: ${theme.fonts.size.P4};
  }

  .input-login {
    margin: 18px 0;
  }
`;
