import React, { useState } from 'react'
import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';
import Display from './Display';

const Dashboard = () => {

const [balls, setBalls] = useState(0)
const [strikes, setStrikes] = useState(0)

const handleBallCount = () => {
    if (balls === 3 ){
        setBalls(0);
        setStrikes(0);
    } else if ( balls >= 0 ){
        setBalls(balls + 1)
    }
}

const handleStrikeCount = () => {
    if (strikes === 2){
        setStrikes(0);
        setBalls(0);
    } else if ( strikes >= 0 ){
        setStrikes(strikes + 1)
    }
}

const handleFoulCount = () => {
   if (strikes < 2){
    setStrikes(strikes + 1)}
}

const handleHitCount = () => {
    setBalls(0);
    setStrikes(0);
}


    return (
        <MainContainer className="container">
            <Display strikes={strikes} balls={balls}/>
            <DashboardContainer className="dashboardContainer">
            <Grid>
                <Grid.Row>
                <GridColumn width={8}>
                    <DashboardButton onClick={handleBallCount} className="ballsCountTitle">Ball</DashboardButton>
                </GridColumn>
                <GridColumn width={8}>
                    <DashboardButton onClick={handleStrikeCount} className="strikesCountTitle">Strike</DashboardButton>
                </GridColumn>
                </Grid.Row>

                <Grid.Row>
                <GridColumn width={8}>
                    <DashboardButton onClick={handleFoulCount} className="foulCountTitle">Foul</DashboardButton>
                </GridColumn>
                <GridColumn width={8}>
                    <DashboardButton onClick={handleHitCount} className="hitCountTitle">Hit</DashboardButton>
                </GridColumn>
                </Grid.Row>
            </Grid>
            </DashboardContainer>
        </MainContainer>
    )
}

export default Dashboard

const MainContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const DashboardContainer = styled.section`
  width: 30%;
  margin-right: 35%;
  margin-left: 35%;
  background: #CD0001;
  border-radius: 20px;
  padding: 30px;
  margin-top: 20px;
  margin-bottom: 40px;
`;

const GridColumn = styled(Grid.Column)`
    display: flex !important;
    flex-direction: column;
    align-items: center;
`;

const DashboardButton = styled.button`
  width: 90%;
  font-size: 1.25rem;
  color: white;
  text-align: center;
  font-family: 'Livvic', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border-radius: 10px;
  background: #000089;
  padding: 10px;
  border: 1px solid #000089 !important;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19); 
  
  :hover {
      transform: scale(1.15);
  } 
`;

const CountDisplay = styled.div`
    font-size: 1.5rem;
    color: white;
    text-align: center;
    font-family: 'Graduate', cursive;
    padding: 10px;
`;