import React, { Component } from "react";
import styled from "styled-components";

import axios from "axios";
import "bulma/css/bulma.css";

const WeatherWidget = styled.div`
	@media screen and (max-width: 320px) {
		width: 295px;
		margin-top: -50px;
	}
	@media screen and (max-width: 768) {
		width: 728px;
	}
`;
const WeatherData = styled.div`
	display: flex;
	flex-flow: column;
`;
const Place = styled.div``;
const PlaceName = styled.h1``;
const Icon = styled.img``;
const WeatherStatus = styled.div`
	display: flex;
	align-items: center;
`;
const Table = styled.div`
	margin-top: 12px;
	display: flex;
	justify-content: space-between;

	background-color: #d3d3d3;
	border-radius: 10px;
`;
const ColumnLeft = styled.ul`
	border-right: 1px solid #808080;
`;
const ColumnRight = styled.ul``;
const TableName = styled.li`
	border-bottom: 1px solid #808080;
`;

const SwitchButtons = styled.div`
	display: flex;
	justify-content: space-between;
`;
const TemperatureContainer = styled.div``;
const LanguageContainer = styled.div``;
const Button = styled.button`
	margin-right: 10px;
`;

const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=${
	process.env.REACT_APP_SECRET_KEY
}`;
// По дефолтку стоит apiUrlReserve, иначе если апи не грузиться отоброжается белый экран
const apiUrlReserve =
	"https://openweathermap.org/data/2.5/weather/?appid=b6907d289e10d714a6e88b30761fae22&id=524901";

const apiUrlName = (value) => {
	"http://api.openweathermap.org/data/2.5/weather?q=" +
		value +
		`&appid=${process.env.REACT_APP_SECRET_KEY}`;
};

class App extends Component {
	state = {
		weather: [],
		temperatureIcon: "°C",
		temperatureUnits: "",
		isLoaded: false
	};

	componentDidMount() {
		axios.get(`${apiUrl}&units=metric`).then(({ data }) => {
			const weather = data;
			this.setState({ weather, isLoaded: true });
		});
	}

	convertToFahrenheit = () => {
		this.setState({ temperatureUnits: "" });
		axios.get(apiUrl).then(({ data }) => {
			const weather = data;
			this.setState({
				weather,
				isLoaded: true,
				temperatureIcon: "°F"
			});
		});
	};

	convertToCelsius = () => {
		axios.get(`${apiUrl}&units=metric`).then(({ data }) => {
			const weather = data;
			this.setState({
				weather,
				isLoaded: true,
				temperatureIcon: "°C"
			});
		});
	};

	onCityInputChange = (value) => {
		axios.get(apiUrlName(value)).then(({ data }) => {
			const weather = data;
			this.setState({ weather, isLoaded: true });
		});
	};

	render() {
		const { weather, temperatureIcon } = this.state;
		const { onCityInputChange, convertToCelsius, convertToFahrenheit } = this;
		return (
			<WeatherWidget className="container is-mobile">
				{this.state.isLoaded && (
					<WeatherData>
						<label>Your City name</label>
						<input type="text" onChange={onCityInputChange} />
						<Place>
							<PlaceName className="is-size-3">
								Погода в городе {weather.name}
							</PlaceName>
							<WeatherStatus>
								<Icon
									src={`http://openweathermap.org/img/w/${
										weather.weather[0].icon
									}.png`}
								/>
								<span className="is-size-4 ">
									{weather.main.temp}
									{temperatureIcon}
								</span>
							</WeatherStatus>
						</Place>
						<Table className="columns">
							<ColumnLeft className="column is-6">
								<TableName>Влажность</TableName>
								<TableName>Описание</TableName>
								<TableName>Облачность</TableName>
								<TableName>Осадки</TableName>
							</ColumnLeft>
							<ColumnRight className="column is-6">
								<TableName>{weather.main.humidity}</TableName>
								<TableName>{weather.weather[0].description}</TableName>
								<TableName>{weather.clouds.all}</TableName>
								<TableName>{weather.weather[0].main}</TableName>
							</ColumnRight>
						</Table>
						<SwitchButtons className="columns">
							<TemperatureContainer className="column">
								<Button onClick={convertToCelsius} className="button is-light">
									°C
								</Button>
								<Button
									onClick={convertToFahrenheit}
									className="button is-light"
								>
									°F
								</Button>
							</TemperatureContainer>
							<LanguageContainer className="column">
								<Button className="button is-light">RU</Button>
								<Button className="button is-light">EN</Button>
							</LanguageContainer>
						</SwitchButtons>
					</WeatherData>
				)}
			</WeatherWidget>
		);
	}
}

export default App;
