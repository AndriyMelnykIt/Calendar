import React from 'react';
import styled from 'styled-components';

const DivWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #000;
  padding: 16px;
`;

const ButtonWrapper = styled('div')`
  display: flex;
  align-items: center;
`;

const TextWrapper = styled('span')`
  font-size: 32px;
  text-transform: uppercase;
`;

const TitleWrapper = styled(TextWrapper)`
  font-weight: bold;
  margin-right: 7px;
`;


const Tittle = ({today,prevHandler,todayHandler,nextHandler}) => {
    return (
        <DivWrapper>
            <div>
                <TitleWrapper>{today.format('MMMM')}</TitleWrapper>
                <TextWrapper>{today.format('YYYY')}</TextWrapper>
            </div>
            <ButtonWrapper>
                <button onClick={(prevHandler)}>&lt;</button>
                <button onClick={(todayHandler)}>today</button>
                <button onClick={(nextHandler) }>&gt;</button>
            </ButtonWrapper>
        </DivWrapper>
    );
}
export default Tittle;