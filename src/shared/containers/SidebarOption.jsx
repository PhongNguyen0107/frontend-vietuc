import React from "react";
import styled from "styled-components"
import {db} from "config/firebase";
import { collection, addDoc } from "firebase/firestore";
import {DATABASE_NAME} from "config/firestore.constant";

// refs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND
const SidebarOption = (props) => {
  const {Icon, title, type, addChannelOption} = props;

  const onClickMenuItem = () => {
    console.log('log::9 onClickMenuItem', )

    if(addChannelOption){
      onAddChannel()
    }
  }

  const onAddChannel = async () => {
    console.log('log::18 onAddChannel', )
    const channelName = prompt("Bạn hãy nhập tên channel muốn tạo: ");

    try {
      const docRef = await addDoc(collection(db, DATABASE_NAME.CHANNELS), {
        name: channelName
      });

      // if(docRef.id){
      //   window.location.reload()
      // }
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }


  }

  if(type === "channel") {
    return (
      <SidebarOptionContainer>
        <h3>#{title}</h3>
      </SidebarOptionContainer>
    )
  }

  return (
    <SidebarOptionContainer onClick={onClickMenuItem}>
      {Icon && <Icon fontSize={"small"} style={{padding: 12}} />}
      <h3>{title}</h3>
    </SidebarOptionContainer>
  );
};

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding: 4px 12px;
  cursor: pointer;
  
  :hover {
    opacity: 0.9;
    background: #282c34;
  }
  
  > h3 {
    font-weight: 500;
  }
  
  > h3 > span {
    
  }
`