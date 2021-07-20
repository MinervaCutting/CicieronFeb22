import { makeStyles, MenuItem, FormControl, Select } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  albagranados,
  asadoraranda,
  calpinxo,
  cangrejoloco,
  cantravi,
  casacarmen,
  fitora,
  vinotecatorres,
  julivertmeu,
  flamant,
} from "../../data/restaurants";
import {
  SET_DAY1LUNCH,
  SET_DAY1DINNER,
  SET_DAY2LUNCH,
  SET_DAY2DINNER,
  SET_DAY3LUNCH,
  selectDay1Lunch,
  selectDay1Dinner,
  selectDay2Lunch,
  selectDay2Dinner,
  selectDay3Lunch,
} from "../../features/RestaurantSlice";

const restaurantOptions = [
  { event: "day1Lunch", options: [fitora, cangrejoloco] },
  { event: "day1Dinner", options: [cantravi, asadoraranda] },
  { event: "day2Lunch", options: [julivertmeu, flamant] },
  { event: "day2Dinner", options: [albagranados, calpinxo] },
  { event: "day3Lunch", options: [casacarmen, vinotecatorres] },
];

export default function RestaurantChoice({ event }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const day1Lunch = useSelector(selectDay1Lunch);
  const day1Dinner = useSelector(selectDay1Dinner);
  const day2Lunch = useSelector(selectDay2Lunch);
  const day2Dinner = useSelector(selectDay2Dinner);
  const day3Lunch = useSelector(selectDay3Lunch);

  const currentOption = restaurantOptions
    .map((option) => option.event === event && option.options)
    .filter(Boolean)
    .flat();

  const selectedRestaurant = (event) => {
    switch (event) {
      case "day1Lunch":
        return day1Lunch;
      case "day1Dinner":
        return day1Dinner;
      case "day2Lunch":
        return day2Lunch;
      case "day2Dinner":
        return day2Dinner;
      case "day3Lunch":
        return day3Lunch;
      default:
        return day1Lunch;
    }
  };

  const whichDispatch = (event) => {
    switch (event) {
      case "day1Lunch":
        return SET_DAY1LUNCH;
      case "day1Dinner":
        return SET_DAY1DINNER;
      case "day2Lunch":
        return SET_DAY2LUNCH;
      case "day2Dinner":
        return SET_DAY2DINNER;
      case "day3Lunch":
        return SET_DAY3LUNCH;
      default:
        return null;
    }
  };

  let dispatchAction = whichDispatch(event);

  const handleChange = (e) => {
    const chosenRestaurant = (restaurants) => {
      for (let i = 0; i < restaurants.length; i++) {
        if (restaurants[i].title === e.target.value) {
          return restaurants[i];
        }
      }
    };

    const eventDispatched = whichDispatch(event);

    dispatch(eventDispatched(chosenRestaurant(currentOption)));
  };

  return (
    <div>
      <FormControl className={classes.formControl} style={{ width: "10rem" }}>
        <Select
          labelId='demo-simple-select-filled-label'
          id='demo-simple-select-filled'
          value={selectedRestaurant(event).title}
          onChange={handleChange}
        >
          {restaurantOptions.map(
            (restaurantOption) =>
              restaurantOption.event === event &&
              restaurantOption.options.map((option) => (
                <MenuItem key={option.title} value={option.title}>
                  {option.title}
                </MenuItem>
              ))
          )}
        </Select>
      </FormControl>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
