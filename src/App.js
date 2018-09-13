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

// console.log(process.env.REACT_APP_SECRET_KEY);

class App extends Component {
	state = {
<<<<<<< HEAD
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
=======
		list: {},
		isLoaded: false
	};

	componentDidMount() {
		// console.log(process.env.REACT_APP_SECRET_KEY);
		const api = `http://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=dd00a55fbd1496c6e83e48c022c18eff`;
		axios.get(api).then(res => {
			const list = res.data;
			this.setState({ list, isLoaded: true });
>>>>>>> c3ea7fd4a4fbced1ab525a1d37f44581bf274480
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

<<<<<<< HEAD
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
=======
		// this.setState({ isLoading: true });
	}
	render() {
		const { list, isLoaded } = this.state;
		// console.log(list);
		console.log(list);
		// this.state.isLoading && console.log(list.main.humidity);
		return (
			isLoaded && (
				<Main className="container">
					<Weather>
						<Where>
							<p className="is-size-3">Погода в городе {list.name}</p>
							<WeatherIcon />
							<span className="is-size-4 ">main.temp</span>
							{/* <span className="is-size-4 ">{list.main.temp}</span> */}
>>>>>>> c3ea7fd4a4fbced1ab525a1d37f44581bf274480
						</Where>
						<TableInfo className="columns has-background-light">
							<TableLeft className="column is-half">
								<TableName>Влажность</TableName>
								<TableName>Описание</TableName>
								<TableName>Облачность</TableName>
								<TableName>Осадки</TableName>
							</TableLeft>
							<TableRight className="column is-half is-half-tablet">
<<<<<<< HEAD
								<TableName>{list.main.humidity}</TableName>
								<TableName>{list.weather[0].description}</TableName>
								<TableName>{list.clouds.all}</TableName>
								<TableName>{list.weather[0].main}</TableName>
=======
								<TableName>humidity</TableName>
								{/* <TableName>{list.main.humidity}</TableName> */}
								<TableName>description</TableName>
								{/* <TableName>{list.weather.description}</TableName> */}
								<TableName>clouds.all</TableName>
								{/* <TableName>{list.clouds.all}</TableName> */}
								<TableName>1мм</TableName>
>>>>>>> c3ea7fd4a4fbced1ab525a1d37f44581bf274480
							</TableRight>
						</TableInfo>
						<Switch className="columns">
							<Temperature className="column">
<<<<<<< HEAD
								<Button onClick={this.toggleMetric} className="button is-light">
									°C
								</Button>
								<Button onClick={this.toggleF} className="button is-light">
									°F
								</Button>
=======
								<Button className="button is-light">°C</Button>
								<Button className="button is-light">°F</Button>
>>>>>>> c3ea7fd4a4fbced1ab525a1d37f44581bf274480
							</Temperature>
							<Language className="column">
								<Button className="button is-light">RU</Button>
								<Button className="button is-light">EN</Button>
							</Language>
						</Switch>
					</Weather>
<<<<<<< HEAD
				)}
			</Main>
=======
				</Main>
			)
>>>>>>> c3ea7fd4a4fbced1ab525a1d37f44581bf274480
		);
	}
}

export default App;
