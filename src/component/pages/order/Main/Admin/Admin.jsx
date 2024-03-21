import styled from "styled-components";
import { theme } from "../../../theme";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel";

export default function Admin() {
  return (
    <AdminStyled>
      <AdminTabs />
      <AdminPanel />
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  background: red;
  height: 250px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
