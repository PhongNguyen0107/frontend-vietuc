import React, {useEffect, useState} from "react";
import styled from "styled-components";
import MessageIcon from "@mui/icons-material/Message";
import {Button} from "@mui/material";
import Message from "shared/containers/Message";
import ChatInput from "shared/containers/ChatInput";
import {doc, getDoc} from "firebase/firestore";
import {db} from "config/firebase";
import {DATABASE_NAME} from "config/firestore.constant";

const ChannelPage = (props) => {
  const {channelId} = props;
  const [channelData, setChannelData] = useState(null);

  const getDetailChannelById = async (cId) => {
    const docRef = doc(db, DATABASE_NAME.CHANNELS, cId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) setChannelData(docSnap.data());
  };

  useEffect(() => {
    if (channelId) {
      getDetailChannelById(channelId);
    }

  }, [channelId]);

  const onDeleteChannel = () => {
    console.log("log::8 onDeleteChannel");
  };

  if (!channelData) return <React.Fragment/>;
  return (
    <ChannelContainer>
      <Header>
        <HeaderLeft>
          <h4>#{channelData.name}</h4>
          <MessageIcon fontSize={"small"} style={{padding: 12}}/>
        </HeaderLeft>
        <HeaderRight>
          <Button>Detail</Button>
          <Button onClick={onDeleteChannel}>Delete</Button>
        </HeaderRight>
      </Header>

      <ChatMessage>
        <Message/>
      </ChatMessage>

      <ChatInput/>
    </ChannelContainer>
  );
};


export default ChannelPage;


const ChannelContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid lightgray;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    align-items: center;
    text-transform: lowercase;
    margin-right: 12px;


  }
`;

const HeaderRight = styled.div`
  display: flex;

`;

const ChatMessage = styled.div`

`;