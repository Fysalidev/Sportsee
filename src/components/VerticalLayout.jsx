import styled from "styled-components";

import yoga from '../assets/yoga.png'
import swimming from "../assets/swimming.png";
import cycle from "../assets/cycle.png";
import weightlifting from "../assets/weightlifting.png";

const Wrapper = styled.div`
  background-color: black;
  min-height: 100%;
  width: 117px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
`;

const ButtonsWrapper = styled.ul`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
flex-grow:1;
gap:1.25rem;
`;

const Item = styled.li`

padding:0;

`;

const Btn = styled.button`
  border: none;
  padding: 0;
  border-radius: 6px;
  overflow:hidden;
`;

const Copyright = styled.div`
 
  display: flex;
  align-items: center;
  justify-content: center;

  & p {
    color: #ffffff;
    writing-mode: vertical-lr;
    transform: rotate(-180deg);
    bottom: 0;
    margin: 0 0 0 0;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 24px;
    padding: 3rem 0 1rem 0;
  }
`;

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
      <Copyright><p>Copyright SportSee 2022</p></Copyright>
    </Wrapper>
  );
}

export default VerticalLayout;
