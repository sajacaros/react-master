import { useParams } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
  color: ${props=>props.theme.accentColor};
`;

interface Params{
  coinId:string;
}

function Coin() {
  const {coinId} = useParams<Params>();
  return <Title>{coinId}</Title>
}

export default Coin;