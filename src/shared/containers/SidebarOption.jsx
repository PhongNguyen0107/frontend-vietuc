import React from "react";
import styled from "styled-components"

const SidebarOption = (props) => {
  const {Icon, title} = props;

  return (
    <SidebarOptionContainer>
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