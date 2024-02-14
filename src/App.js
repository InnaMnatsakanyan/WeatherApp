import './App.css';
import WeatherPageComponent from "./components/WeatherPageComponent";
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <WeatherPageComponent />
        </Provider>
    </div>
  );
}

export default App;
