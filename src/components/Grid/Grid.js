import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  //grid-template-rows: repeat(6, 1fr);
  grid-gap: 2px;
  background-color: #484848;
`;



const CellWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  min-width: ${props => props.isHeader ? 24 : 100}px;
  min-height: 25px;
  color: ${props => props.isSelectedMonth ? '#000000' : '#9F9898'};
  background-color: #fff;
  font-weight: bold;
  text-transform: uppercase;
`;

const RowInCell = styled.div`
  ${props => props.pr && `padding-right: ${props.pr * 8}px`}
`;


const DayWrapper = styled.div`
  font-size: 18px;
  height: 80px;
  width: 25px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-weight: 700;
  margin: 2px;
`;

const CurrentDay = styled('div')`
  height: 30%;
  width: 100%;
  background-color: #ECA8A8;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;



const Grid = ({startDay, today}) => {
    const isCurrentDay = (day) => moment().isSame(day, 'day');
    const isSelectedMonth = (day) => today.isSame(day, 'month');
    const totalDays = 42;
    const day = startDay.clone();
    const daysArray = [...Array(totalDays)].map(() => day.add(1, 'day').clone());


    return (
        <>
            <GridWrapper>
                {[...Array(7)].map((_, i) => (
                    <CellWrapper isSelectedMonth>
                            <RowInCell pr={5}>
                                {moment().day(i).format('ddd')}
                            </RowInCell>
                    </CellWrapper>
                ))}

                {
                    daysArray.map((dayItem) => (
                        <CellWrapper
                            key={dayItem.unix()}
                            isSelectedMonth={isSelectedMonth(dayItem)}
                        >
                            <RowInCell
                                justifyContent={'center'}
                            >
                                <DayWrapper>
                                    {!isCurrentDay(dayItem) && dayItem.format('D')}
                                    {isCurrentDay(dayItem) && <CurrentDay> {dayItem.format('D')}</CurrentDay>}
                                </DayWrapper>
                            </RowInCell>
                        </CellWrapper>
                    ))
                }
            </GridWrapper>
        </>
    );
}

export default Grid;