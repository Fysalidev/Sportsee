import styled from "styled-components";

const Card = styled.div`
  align-items: center;
  background: #fbfbfb;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  display: flex;
  gap: 1.5rem;
  height: 124px;
  justify-content: center;
  ${'' /* width: 258px; */}
`;

const Icon = styled.img`
  height: 60px;
  width: 60px;
`;

const Infos = styled.div`
  & p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
  }

  & h2 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #74798c;
  }
`;

function ActivityCard({ name, unit, icon, data }) {
  return (
    <Card>
      <Icon src={icon} alt="icon" />
      <Infos>
        <p>
          {data} {unit}
        </p>
        <h2>{name}</h2>
      </Infos>
    </Card>
  );
}
export default ActivityCard;
