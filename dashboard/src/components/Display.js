import React from 'react';
import styled from 'styled-components';

const Display = props => {

    return (
        <DashboardContainer className="dashboardContainer">
            <DisplayContainer className="displayContainer">
                <div className="topRow">
                    <TopTitle className="playerName">Luna Lovegood</TopTitle>
                    <TopTitle className="atBat">At-Bat</TopTitle>
                </div>
                {/* TODO - We need to change the dynamic values in these divs to accept dynamic values from our state. */}
                <BottomRow className="bottomRow">
                    <BottomRowDiv className="ballsDisplay">
                        <CountTitle className="ballsCountTitle">Balls</CountTitle>
                        <CountDisplay className="ballsCountDisplay">{props.balls}</CountDisplay>
                    </BottomRowDiv>
                    <BottomRowDiv className="strikesDisplay">
                        <CountTitle className="strikesCountTitle">Strikes</CountTitle>
                        <CountDisplay data-testid="strikes-count-display" className="strikesCountDisplay">{props.strikes}</CountDisplay>
                    </BottomRowDiv>
                </BottomRow>
            </DisplayContainer>
        </DashboardContainer>
    )
}

export default Display

const DashboardContainer = styled.div`
    display: flex;
    width: 50%;
    margin-right: 25%;
    margin-left: 25%;
    background: white;
    border-radius: 20px;
    border: 3px solid #000089;
    padding: 30px;
    margin-top: 30px;
    margin-bottom: 10px;
    justify-items: center;
`;

const DisplayContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #CD0001;
    border-radius: 20px;
    padding: 10px;
`;

const TopTitle = styled.h2`
    font-size: 2rem;
    color: white;
    text-align: center;
    font-family: 'Livvic', sans-serif;
    letter-spacing: 1.5px;
    border-radius: 10px;
`;

const BottomRow = styled.div`
    display: flex;
    width: 100%;
`;

const BottomRowDiv = styled.div`
    width: 50%;
    padding: 10px;
`;


const CountTitle = styled.h3`
  font-size: 1.5rem;
  color: white;
  text-align: center;
  font-family: 'Livvic', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border-radius: 10px;
  background: #000089;
  padding: 10px;
`;



const CountDisplay = styled.div`
    font-size: 2rem;
    color: white;
    text-align: center;
    font-family: 'Graduate', cursive;
    padding: 10px;
`;