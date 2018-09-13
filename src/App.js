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

console.log(process.env.REACT_APP_SECRET_KEY);

class App extends Component {
	state = {
		list: [],
		cityName: "",
		temperatureIcon: "°C",
		isLoading: false
	};

	componentDidMount() {
		const api = `http://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=${
			process.env.REACT_APP_SECRET_KEY
		}&units=metric`;
		// const apiReserve =
		// 	"https://openweathermap.org/data/2.5/weather/?appid=b6907d289e10d714a6e88b30761fae22&id=524901&units=metric";
		axios.get(api).then((res) => {
			const list = res.data;
			this.setState({ list, isLoading: true });
		});
	}

	toggleF = () => {
		const api = `http://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=${
			process.env.REACT_APP_SECRET_KEY
		}`;
		axios.get(api).then((res) => {
			const list = res.data;
			this.setState({ list, isLoading: true, temperatureIcon: "°F" });
		});
	};

	toggleMetric = () => {
		const api = `http://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=${
			process.env.REACT_APP_SECRET_KEY
		}&units=metric`;
		axios.get(api).then((res) => {
			const list = res.data;
			this.setState({ list, isLoading: true });
		});
	};

	onCityInputChange = (e) => {
		this.setState({ cityName: e.target.value });
		const api = `http://api.openweathermap.org/data/2.5/weather?q=${
			e.target.value
		}&appid=${process.env.REACT_APP_SECRET_KEY}&units=metric`;
		axios.get(api).then((res) => {
			const list = res.data;
			this.setState({ list, isLoading: true });
		});
	};

	render() {
		const { list, temperatureIcon } = this.state;
		console.log(list);
		return (
			<Main className="container">
				{this.state.isLoading && (
					<Weather>
						<p>Your City name</p>
						<input type="text" onChange={this.onCityInputChange} />
						<Where>
							<p className="is-size-3">Погода в городе {list.name}</p>
							<WeatherIcon
								src={`http://openweathermap.org/img/w/${
									list.weather[0].icon
								}.png`}
							/>
							<span className="is-size-4 ">
								{list.main.temp}
								{temperatureIcon}
							</span>
						</Where>
						<TableInfo className="columns has-background-light">
							<TableLeft className="column is-half">
								<TableName>Влажность</TableName>
								<TableName>Описание</TableName>
								<TableName>Облачность</TableName>
								<TableName>Осадки</TableName>
							</TableLeft>
							<TableRight className="column is-half is-half-tablet">
								<TableName>{list.main.humidity}</TableName>
								<TableName>{list.weather[0].description}</TableName>
								<TableName>{list.clouds.all}</TableName>
								<TableName>{list.weather[0].main}</TableName>
							</TableRight>
						</TableInfo>
						<Switch className="columns">
							<Temperature className="column">
								<Button onClick={this.toggleMetric} className="button is-light">
									°C
								</Button>
								<Button onClick={this.toggleF} className="button is-light">
									°F
								</Button>
							</Temperature>
							<Language className="column">
								<Button className="button is-light">RU</Button>
								<Button className="button is-light">EN</Button>
							</Language>
						</Switch>
					</Weather>
				)}
			</Main>
		);
	}
}

export default App;
