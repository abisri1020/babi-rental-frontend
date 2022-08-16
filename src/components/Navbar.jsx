// import { Badge } from "@material-ui/core";
// import { ShoppingCartOutlined } from "@material-ui/icons";
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {NavLink} from "react-router-dom"
import React, { useContext } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

const Container = styled.div`
  height: 60px;
  background: #000000;
  color: white;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: white;
  text-decoration: none;
  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <NavLink to="/" style={{ textDecoration: 'none'}}>
          <Logo>Babi Rental</Logo>
          </NavLink>
        </Left>
        <Right>
        <NavLink  style={{ textDecoration: 'none', color:"white", fontSize:"2rem", fontWeight:"bolder"}} aria-current="page" to="/"><MenuItem>HOME</MenuItem></NavLink>
        <NavLink  style={{ textDecoration: 'none', color:"white", fontSize:"2rem", fontWeight:"bolder"}} aria-current="page" to="/products/:category"><MenuItem>PRODUCTS</MenuItem></NavLink>
        
        <NavLink to="/register" style={{ textDecoration: 'none', color:"white"}}>
          <MenuItem>{!user && "REGISTER"}</MenuItem>
          </NavLink>
          <NavLink to="/login" style={{ textDecoration: 'none', color:"white"}}>
          <MenuItem>{!user && "SIGN IN"}</MenuItem>
          </NavLink>
          <MenuItem onClick={handleLogout}>{user && "LOGOUT"}</MenuItem>
          <NavLink to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="secondary">
              <ShoppingCartOutlinedIcon style={{ color: 'white' }} />
            </Badge>
          </MenuItem>
          </NavLink>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;