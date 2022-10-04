import React from "react";
import styled from "styled-components"
import HelpIcon from '@mui/icons-material/Help';
import SearchIcon from '@mui/icons-material/Search';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "config/firebase";
import {Avatar} from "@mui/material";

const Header = () => {
  const [user] = useAuthState(auth);

  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <QueryBuilderIcon/>
      </HeaderLeft>
      <HeaderSearch>
        <SearchIcon />
        <input type="text" placeholder={"Typing to search..."}/>
      </HeaderSearch>
      <HeaderRight>
        <HelpIcon/>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  background-color: var(--slack-color);
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  color: white;
`

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  padding-left: 24px;
  flex: 0.3;
`

const HeaderSearch = styled.div`
  flex: 0.4;
  border-radius: 6px;
  display: flex;
  padding: 0 50px;
  color: gray;
  border: 1px gray solid;
  text-align: center;
  
  > input {
    background: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    color: #fff;
    outline: 0;
  }
`

const HeaderRight = styled.div`
  display: flex;
  align-items: flex-end;
  flex: 0.3;
  justify-content: flex-end;
  padding-right: 24px;
`

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  
  :hover {
    opacity: 0.8;
  }
`