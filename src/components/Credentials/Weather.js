import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";

const Weather = () => {
  const classes = useStyles();
  const apiKey = "d2f6ddaf853258d3c2bd88fb723c274c";
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("Barcelona");

  useEffect(() => {
    const getWeather = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=en&appid=${apiKey}`
      );
      const data = await response.json();
      setWeatherData(data);
      console.log("weather data =>", weatherData);
    };

    getWeather();
  }, []);

  return (
    <div className={classes.container}>
      <div>{weatherData?.name}</div>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(3),
  },
}));

export default Weather;
