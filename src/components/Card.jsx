import styled from "styled-components";
import PropTypes from "prop-types";
import woman from "../assets/woman.png";
import man from "../assets/man.png";
import { Link } from "react-router-dom";

const Root = styled(Link)``;

const CardWrapper = styled.div`
  align-items: center;
  background: red;
  border-radius: 11rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 20rem;
  justify-content: center;
  opacity: 0.75;
  width: 20rem;
`;

const Logo = styled.img`
  height: 10rem;
  width: 10rem;
`;

const Title = styled.h2`
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 2rem;
  font-weight: 500;
`;

/**
 * Create a user card
 * @param {{gender:string, id:string}} param0
 * @returns {JSX.Element} Card component
 */

function Card({ gender, id }) {
  return (
    <Root to={`user/${id}`}>
      <CardWrapper>
        <Logo src={gender === "woman" ? woman : man} />
        <Title>User {id}</Title>
      </CardWrapper>
    </Root>
  );
}

Card.propTypes = {
  gender: PropTypes.oneOf(['woman', 'man']).isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;
