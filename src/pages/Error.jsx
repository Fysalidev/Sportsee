import styled from "styled-components";
import { Link } from "react-router-dom";

const Main = styled.main`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

const Section = styled.section`
  align-items: center;
  display: flex;
  font-family: "Roboto", sans-serif;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
`;

const Title = styled.h1`
  color: red;
  font-size: 10rem;
`;

const Paragraph = styled.p`
  font-size: 2rem;
`;

const Root = styled(Link)`
  color: red;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  &:hover {
    font-weight: 500;
  }
`;

function Error() {
  return (
    <Main>
      <Section>
        <Title>Erreur 404</Title>
        <Paragraph>La page que vous demandez n'éxiste pas !!!</Paragraph>
        <Root to="/">Retourner sur la page d'accueil</Root>
      </Section>
    </Main>
  );
}
export default Error;
