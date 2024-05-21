import { Footer } from "./Footer";
import "./styles.css";

export default function App() {
  return (
    <div class="wholeApp">
      <header>
        <form id="search-form">
          <input
            type="search"
            placeholder="Enter a city.."
            required
            class="search-input"
            id="search-input"
          />
          <input type="submit" value="Search" class="search-button" />
        </form>
      </header>
      <main>
        <div class="weatherAppData">
          <div class="currentInfo">
            <h1 class="cityName" id="city-name"></h1>
            <p class="weather-app-details">
              <span id="current-day">Day</span>
              <span id="current-time">10:00</span>,
              <span class="weather-description" id="weather-description">
                scattered clouds
              </span>
              <br />
              Humidity:
              <strong>
                {" "}
                <span class="humidity" id="humidity"></span> %
              </strong>
              , Wind:{" "}
              <strong>
                <span class="wind" id="wind"></span> km/h
              </strong>
            </p>
          </div>
          <div class="currentTemperature">
            <img src="" class="weather-picture" id="weather-picture" />
            <div class="tempValue" id="tempValue"></div>
            <div class="tempUnit">°C</div>
          </div>
        </div>
      </main>
      <div class="weather-forecast" id="weather-forecast"></div>
      <Footer />
    </div>
  );
}
