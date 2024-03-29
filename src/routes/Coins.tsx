import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 10px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 48px;
  color: ${props=>props.theme.accentColor};
`;
const CoinsList = styled.ul``;
const Coin = styled.li`
  background-color: white;
  color: ${(props)=> props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    padding: 20px;
    transition: color 0.2s ease-in;
    display: block;
  }
  &:hover {
    a {
      color: ${(props)=> props.theme.accentColor};
    }
  }
`;

// const coins = [
//   {id:"btc-bitcoin",name:"Bitcoin",symbol:"BTC",rank:1,is_new:false,is_active:true,type:"coin"},
//   {id:"eth-ethereum",name:"Ethereum",symbol:"ETH",rank:2,is_new:false,is_active:true,type:"coin"}
// ];

interface CoinInterface {
  id:string,
  name:string,
  symbol:string,
  rank:number,
  is_new:boolean,
  is_active:boolean,
  type:string,
}

function Coins() {
  const [coins, setCoins] = useState<CoinInterface[]>([]);

  useEffect(()=>{
    (async () => {
      const response = await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await response.json();
      console.log(json);
    })();
  }, []);
  return (
  <Container>
    <Header>
      <Title>Coin</Title>
    </Header>
    <CoinsList>
      { 
        coins.map( coin => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
            </Coin>
          )
        ) 
      }
    </CoinsList>
  </Container>
  );
}

export default Coins;