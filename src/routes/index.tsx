import { BrowserRouter, Routes } from "react-router-dom";
import Menu from "../components/Menu";
import styled from "styled-components";

export default function Rotas() {
  return (
    <PageSld>
      <BrowserRouter>
        <Menu />
        <BodySld>
          <Routes>{/* definir as rotas aqui */}</Routes>
        </BodySld>
      </BrowserRouter>
    </PageSld>
  );
}

const PageSld = styled.div`
  display: flex;
`;

const BodySld = styled.div`
  position: absolute; /* Alterado para position: absolute */
  top: calc(
    50% + 60px
  ); /* Posiciona o elemento no meio verticalmente e Ajusta o valor para compensar a altura do menu */
  left: 50%; /* Posiciona o elemento no meio horizontalmente */
  transform: translate(
    -50%,
    -50%
  ); /* Move o elemento de volta metade de sua própria largura e altura */
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;
