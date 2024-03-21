import styled from "styled-components";
import { useState } from "react";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel";

export default function Admin() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <AdminStyled>
      <AdminTabs isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      {!isCollapsed && <AdminPanel />}
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
