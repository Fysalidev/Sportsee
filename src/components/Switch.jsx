import styled from "styled-components";
import { useContext } from "react";
import { ApiContext } from "../api/Apicontext";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
`;

const SwitchButton = styled.label`
  display: inline-block;
  cursor: pointer;
  height: 40px;
  overflow: hidden;
  position: relative;
  width: 70px;
`;

const Input = styled.input`
  height: 0;
  left: -30px;
  position: absolute;
  top: -30px;
  width: 0;
  & + span {
    background: #99b4df;
    border-radius: 20px;
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  &:checked + span {
    background: #346abf;
  }

  & + span:before {
    background: white;
    border-radius: 50%;
    content: "";
    display: inline-block;
    height: 32px;
    left: 4px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.5s;
    width: 32px;
  }
  &:checked + span:before {
    left: 34px;
  }
`;

const SwitchState = styled.span`
  color: #e60000;
  font-family: "Roboto", sans-serif;
  font-size: 2rem;
`;

/**
 * Create swich Api button
 * @returns {JSX.Element} Switch component
 */

function Switch() {
  const { toggleApi, api } = useContext(ApiContext);
  const handleChange = () => {
    toggleApi();
  };

  return (
    <Wrapper>
      <SwitchButton>
        <Input type="checkbox" checked={api} onChange={handleChange} />
        <span></span>
      </SwitchButton>
      <SwitchState> {api ? "Api" : "Mocked"}</SwitchState>
    </Wrapper>
  );
}

export default Switch;
