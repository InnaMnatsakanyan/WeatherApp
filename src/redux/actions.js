export const setWeatherData = (data) => ({
    type: 'SET_WEATHER_DATA',
    payload: data,
});

export const fetchWeatherData = (city) => async (dispatch) => {
    try {
        const currentWResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=68f03e424af89025d47c695fcf0434d5`);
        const currentWData = await currentWResponse.json();

        const forecastWResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=68f03e424af89025d47c695fcf0434d5`);
        const forecastWData = await forecastWResponse.json();

        dispatch(setWeatherData({ current: currentWData, forecast: forecastWData }));
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
};