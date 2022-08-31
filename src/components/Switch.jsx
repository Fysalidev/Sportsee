import styled from "styled-components";

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
  width: 0;
  height: 0;
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

function Switch() {
  return (
    <SwitchButton>
      <Input type="checkbox" />
      <span></span>
    </SwitchButton>
  );
}

export default Switch;
