import styled from "styled-components";

import yoga from "../assets/yoga.png";
import swimming from "../assets/swimming.png";
import cycle from "../assets/cycle.png";
import weightlifting from "../assets/weightlifting.png";

const Wrapper = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  width: 8.12%;
`;

const ButtonsWrapper = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1.25rem;
  justify-content: center;
  margin-top: 30%;
`;

const Item = styled.li`
  padding: 0;
`;

const Btn = styled.button`
  border: none;
  border-radius: 6px;
  overflow: hidden;
  padding: 0;
`;

const Copyright = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  & p {
    bottom: 0;
    color: #ffffff;
    font-family: "Roboto";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    margin: 0 0 0 0;
    padding: 3rem 0 1rem 0;
    transform: rotate(-180deg);
    writing-mode: vertical-lr;
  }
`;

/**
 * Create Vertical Layout
 * @returns {JSX.Element} VerticalLayout component
 */

function VerticalLayout() {
  return (
    <Wrapper>
      <ButtonsWrapper>
        <Item>
          <Btn>
            <img src={yoga} alt="logo yoga" />
          </Btn>
        </Item>
        <Item>
          <Btn>
            <img src={swimming} alt="logo swimming" />
          </Btn>
        </Item>
        <Item>
          <Btn>
            <img src={cycle} alt="logo cycle" />
          </Btn>
        </Item>
        <Item>
          <Btn>
            <img src={weightlifting} alt="weightlifting" />
          </Btn>
        </Item>
      </ButtonsWrapper>
      <Copyright>
        <p>Copyright SportSee 2022</p>
      </Copyright>
    </Wrapper>
  );
}

export default VerticalLayout;
