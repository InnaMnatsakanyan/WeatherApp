import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherData } from '../redux/actions';
import '../styles/styles.css'

const WeatherPageComponent = () => {
    const [city, setCity] = useState('');
    const weatherData = useSelector(state => state.weatherData);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(fetchWeatherData(city));
    };

    return (
        <div>
            <div className='header'>
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                <button onClick={handleClick}>Apply City</button>
                <input type="radio" value="C" />
                <label htmlFor="C">°C</label>
                <input type="radio" value="F" defaultChecked/>
                <label htmlFor="F">°F</label>
            </div>

            <div className='currentWeather'>
                {weatherData && weatherData.current && (
                    <div>
                        <h2>Current Weather:</h2>
                        <p>{weatherData.current.name}</p>
                        <p>Temperature: {weatherData.current.main.temp}°C</p>
                        {weatherData.current.weather.map(weather =>
                            <div>
                                <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}></img>
                                <h3>{weather.main}</h3>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {weatherData && weatherData.forecast && (
                <div className='forecastWeather'>
                    <h2>Forecast Weather</h2>
                    <div className='forecastWeatherGrid'>
                        {weatherData.forecast.list.map((details, index, array) => {
                                return (
                                    <div key={details.dt} className='forecastDetail'>
                                        <p>{details.dt_txt}</p>
                                        <p>{details.main.temp}</p>
                                        {details.weather.map(weather => <div>
                                                <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt={''}></img>
                                                <h3>{weather.main}</h3>
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default WeatherPageComponent;