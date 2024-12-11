import styled from "styled-components";
import { Button } from "../components/Button";

export const Wrap = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  display: flex;
  padding: 20px;
`;
export const FiltersContainer = styled.div`
  background-color: white;
  min-width: 250px;
  width: 27%;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  background-color: white;
`;

export const Li = styled.li`
  background-color: white;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  background-color: white;
  display: flex;
`;

export const CurrencyWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px auto;
`;

export const ButtonCurency = styled(Button)`
  border: 1px solid #2196f3;
  width: 100%;
  background-color: ${(props) => (props.isActive ? "#2196f3" : "white")};
  color: ${(props) => (props.isActive ? "white" : "black")};

  &:hover {
    background-color: #2196f342;
    color: white;
  }
`;
export const ButtonBuy = styled(Button)`
  width: auto;
  height: auto;
  background-color: #ff7930;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 0.5rem;

  &:hover {
    background-color: #2196f3;
    color: white;
  }
`;
export const Ul = styled.ul`
  list-style-type: none;
  width: 100%;
  padding-left: 20px;
`;

export const FilterTransferWrap = styled.div`
  display: flex;
  height: 70%;
  flex-direction: column;
  justify-content: space-between;

  .filter-label {
    cursor: pointer;
    & > input {
      margin-right: 10px;
    }
  }
`;
export const ButtonBuyWrap = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const InfoTransferWrap = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
`;
export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #e6e6e6;
`;
export const LineImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Stops = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: #b2b2b2;
`;

export const SpanTime = styled.span`
  font-size: 2rem;
`;
export const SpanDate = styled.span`
  color: #b2b2b2;
`;
export const SpanNameAirport = styled.span`
  font-weight: bold;
  line-height: 2.2;
`;
export const AirportDestinationInfo = styled.div`
  text-align: right;
`;
export const Divider = styled.div`
  width: 2px;
  height: 158px;
  background-color: #e6e6e6;
  margin: -20px 15px;
`;
export const Header = styled.h1`
  text-align: center;
`;
