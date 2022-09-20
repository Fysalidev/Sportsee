import styled from "styled-components";
import PropTypes from "prop-types";

const Card = styled.div`
  align-items: center;
  background: #fbfbfb;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  display: flex;
  gap: 5%;
  height: 20.3%;
  justify-content: flex-start;
  padding-left: 7%;
`;

const Icon = styled.img`
  height: 60px;
  width: 60px;
`;

const Infos = styled.div`
  & p {
    font-family: "Roboto";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
  }

  & h2 {
    color: #74798c;
    font-family: "Roboto";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
`;

/**
 * Create activity card
 * @param {string} name
 * @param {string} unit
 * @param {string} icon
 * @param {number} data
 * @returns {JSX.Element} ActivityCard component
 */

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

ActivityCard.propTypes = {
  name: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  data: PropTypes.number.isRequired,
};

export default ActivityCard;
