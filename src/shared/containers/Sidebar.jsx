import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "config/firebase";
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import SidebarOption from "shared/containers/SidebarOption";
import MessageIcon from '@mui/icons-material/Message';

const Sidebar = () => {
  const [user] = useAuthState(auth);

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Việt Úc Frontent</h2>
          <h3>
            <FiberManualRecordIcon color={"success"}/>
            {user?.displayName}
          </h3>
        </SidebarInfo>
        {/*refs: https://mui.com/material-ui/api/icon/*/}
        <IconButton sx={{color: "#fff"}} aria-label="delete" size="small">
          <EditIcon fontSize="inherit" />
        </IconButton>
      </SidebarHeader>

      <SidebarOption Icon={MessageIcon} title={"Threads"} />
      <SidebarOption Icon={MessageIcon} title={"Mentions & reactions"} />
      <SidebarOption Icon={MessageIcon} title={"Channel browser"} />
      <SidebarOption Icon={MessageIcon} title={"People and user groups"} />
      <SidebarOption Icon={MessageIcon} title={"Apps"} />
      <SidebarOption Icon={MessageIcon} title={"file browser"} />
      <SidebarOption Icon={MessageIcon} title={"Show less"} />

    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  color: #fff;
  max-width: 260px;
  margin-top: 60px;
  border-top: 1px solid darkred;
`

const SidebarHeader = styled.div`
  display: flex;
  padding: 12px;
  border-bottom: 1px solid #d6d6d7;
`

const SidebarInfo = styled.div`
  
  flex: 1;
  > h2 {
    font-size: 14px;
    font-weight: 900;
    padding-bottom: 4px;
  }
  
  > h3 {
    display: flex;
    font-weight: 400;
    font-size: 12px;
    align-items: center;
  }
`