import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link, useHistory } from "react-router-dom";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url("https://cdn.shopify.com/app-store/listing_images/4a0f1e1d352c9968474bf69ab15f5f0a/banner/CO6wv57s8O8CEAE=.png")
    center;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
width: 25%;
padding: 20px;
background-color: white;
border-radius:20px;
${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  text-align: center
  font-weight: 700;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 3;
  min-width: 40%;
  border: 1px solid #444;
  border-radius: 6px;
  margin: 20px 10px 0px 0px;
  background-color: #000000;
  color: white;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  color: white;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: black;
  color: #f7cb09;
  font-weight: 700;
  cursor: pointer;
`;

const Links = styled.span`
  font-size: 15px;
  margin: 20px 0px;
`;

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("https://babi-rental.herokuapp.com/api/auth/register", {
        username,
        email,
        password,
      });
      res.data && history.push("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <Input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
          <Input type="email" placeholder="E-Mail" onChange={(e) => setEmail(e.target.value)} />
          <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <Agreement style={{ color: "green", fontWeight:"bold"}}>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
            <br/>
            <br/>
          <Link to="/login">
          <Links style={{ marginTop:"20px", color: "blue"}}>Already, Have an Account?</Links>
          </Link>
          </Agreement>
          <Button type="submit">CREATE</Button>
          {error && <span style={{color:"red", marginTop:"30px"}}>Something went wrong!</span>}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;