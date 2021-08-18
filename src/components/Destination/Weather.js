import { useEffect, useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";

const Weather = () => {
  const classes = useStyles();
  const apiKey = "876d8e428d4184ffa9414a76bd35027d";
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Barcelona");

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=en&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((err) => setWeatherData(null));
    console.log("data=>", weatherData);
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.weather}>
        {weatherData ? (
          <>
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt='icons'
            />
            <Typography variant='h6'>{weatherData?.name}</Typography>
            <div className={classes.degrees}>
              <Typography variant='h6'>
                {Math.floor(weatherData?.main.temp)}
              </Typography>
              <Typography variant='h6'>º C</Typography>
            </div>
            <Typography variant='h6'>
              <em>{weatherData.weather[0]?.description}</em>
            </Typography>
          </>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    padding: theme.spacing(3),
  },
  weather: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    top: 10,
    right: 10,
  },
  degrees: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default Weather;
