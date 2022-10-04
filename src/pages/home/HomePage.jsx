import React from "react";
// import {useAuthState} from "react-firebase-hooks/auth";
// import {auth} from "config/firebase";
import styled from "styled-components";
import Header from "shared/containers/Header";
import Sidebar from "shared/containers/Sidebar";
import ChannelPage from "pages/channels/ChannelPage";

const HomePage = () => {
  // const [user] = useAuthState(auth);

  return (
    <React.Fragment>
      <Header />
      <AppBody>
        <Sidebar />
        <ChannelPage />
      </AppBody>
    </React.Fragment>
  );
};

export default HomePage;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`