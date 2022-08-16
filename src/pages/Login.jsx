import axios from "axios";
import { useContext,useRef } from "react";
import styled from "styled-components";
import { Context } from "../context/Context";
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
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  border: 1px solid #444;
  border-radius: 6px;
  background-color: #000000;
  color: white;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 10px 20px;
  background-color: black;
  color: #f7cb09;
  font-weight: 700;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Links = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("https://babi-rental.herokuapp.com/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      res.data && history.push("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="Username"
            ref={userRef}
          />
          <Input
            placeholder="Password"
            type="password"
            ref={passwordRef}
          />
          <Button type="submit" disabled={isFetching} >
            LOGIN
          </Button>
          <Link to="/register">
          <Links style={{color: "blue"}} >CREATE A NEW ACCOUNT</Links>
          </Link>
        </Form>
        <p style={{ margin: "1em", fontSize: ".9rem", color: "black" }}>Sample Login</p>
        <p style={{ margin: "1em", fontSize: ".9rem", color: "black" }}>Username: vel , Password: mushika</p>
      </Wrapper>
    </Container>
  );
};

export default Login;