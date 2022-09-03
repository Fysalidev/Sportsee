import { useState } from "react";
import styled from "styled-components";
import { useContext } from "react";
import { ApiContext } from "../utils/context";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const SwitchButton = styled.label`
  display: inline-block;
  position: relative;
  width: 70px;
  height: 40px;
  cursor: pointer;
  overflow: hidden;
`;

const Input = styled.input`
  position: absolute;
  top: -30px;
  left: -30px;
  height: 0;
  width: 0;
  & + span {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #99b4df;
    border-radius: 20px;
  }
  &:checked + span {
    background: #346abf;
  }
  & + span:before {
    content: "";
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 4px;
    width: 32px;
    height: 32px;
    background: white;
    border-radius: 50%;
    transform: translateY(-50%);
    transition: all 0.5s;
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

function Switch() {
  const {toggleApi, api} = useContext(ApiContext)
  console.log(api)

  const handleChange = () => {
    toggleApi()
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
