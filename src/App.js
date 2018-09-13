import React, { Component } from "react";
import styled from "styled-components";

import axios from "axios";

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
// const Loading = styled.div``;

console.log(process.env.REACT_APP_SECRET_KEY);

// fetch(api).then((response) =>
// 	response.json(this.setState({ CityName: response.name }))
// );

class App extends Component {
	state = {
		list: [],
		CityName: "",
		isLoading: false
	};

	componentDidMount() {
		const api = `http://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=${
			process.env.REACT_APP_SECRET_KEY
		}`;
		axios.get(api).then((res) => {
			const list = res.data;
			this.setState({ list });
		});

		this.setState({ isLoading: true });
	}
	render() {
		const { list } = this.state;
		console.log(list);
		console.log(list.main);
		console.log(list.main.humidity);
		return (
			<Main className="container">
				<Weather>
					<Where>
						<p className="is-size-3">Погода в городе {list.name}</p>
						<WeatherIcon />
						<span className="is-size-4 ">main.temp</span>
						{/* <span className="is-size-4 ">{list.main.temp}</span> */}
					</Where>
					<TableInfo className="columns has-background-light">
						<TableLeft className="column is-half">
							<TableName>Влажность</TableName>
							<TableName>Описание</TableName>
							<TableName>Облачность</TableName>
							<TableName>Осадки</TableName>
						</TableLeft>
						<TableRight className="column is-half is-half-tablet">
							<TableName>humidity</TableName>
							{/* <TableName>{list.main.humidity}</TableName> */}
							<TableName>description</TableName>
							{/* <TableName>{list.weather.description}</TableName> */}
							<TableName>clouds.all</TableName>
							{/* <TableName>{list.clouds.all}</TableName> */}
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
