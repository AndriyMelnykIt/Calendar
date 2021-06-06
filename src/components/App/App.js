import React, {useState} from 'react';
import moment from 'moment';
import Grid from "../Grid/Grid";
import Tittle from "../Title/Title";
import styled from "styled-components";

const ContainerWrapper = styled.div`
  border: 2px solid #000;
`;


function App() {
    moment.updateLocale('en', {week: {dow: 6}});
    // const today = moment();
    const [today, setToday] = useState(moment())
    const startDay = today.clone().startOf('month').startOf('week');

    // window.moment = moment;

    const prevHandler = () => setToday(prev => prev.clone().subtract(1, 'month'));

    const todayHandler = () => setToday(moment());

    const nextHandler = () => setToday(prev => prev.clone().add(1, 'month'))


    return (

        <ContainerWrapper>
            <Tittle
                today={today}
                prevHandler={prevHandler}
                todayHandler={todayHandler}
                nextHandler={nextHandler}

            />
            <Grid startDay={startDay}   today={today}/>
        </ContainerWrapper>
    );
}

export default App;
