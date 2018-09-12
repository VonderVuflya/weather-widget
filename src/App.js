import React, { Component } from 'react';
import styled from "styled-components";

const Main = styled.main``;
const Weather = styled.div``;
const Where = styled.div``;
const WeatherIcon = styled.img``;
const TableInfo = styled.div`
  margin-top: 12px;
`;
const TableLeft = styled.ul``;
const TableRight = styled.ul``;
const TableName = styled.li``;

const Switch = styled.div``;
const Temperature = styled.div``;
const Language = styled.div``;
const Button = styled.button`
  margin-right: 10px;
`;


class App extends Component {
  render() {
    return (
      <Main className="container">
        <Weather>
          <Where>
            <p className="is-size-3">Погода в городе Москва</p>
            <WeatherIcon/>
            <span className="is-size-4 ">23°C</span>
          </Where>
          <TableInfo className="columns has-background-light">
            <TableLeft className="column is-half">
              <TableName>Влажность</TableName>
              <TableName>Описание</TableName>
              <TableName>Облачность</TableName>
              <TableName>Осадки</TableName>
            </TableLeft>
            <TableRight className="column is-half is-half-tablet">
              <TableName>56%</TableName>
              <TableName>Временами осадки</TableName>
              <TableName>Ясное небо</TableName>
              <TableName>1мм</TableName>
            </TableRight>
          </TableInfo>
          <Switch className="columns">
            <Temperature className="column">
              <Button className="button is-light">°C</Button>
              <Button className="button is-light">°F</Button>
            </Temperature>
            <Language className="column">
              <Button className="button is-light">RU</Button>
              <Button className="button is-light">EN</Button>
            </Language>
          </Switch>
        </Weather>
      </Main>
    );
  }
}

export default App;
