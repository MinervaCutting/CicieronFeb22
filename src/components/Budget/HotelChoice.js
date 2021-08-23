import { makeStyles, MenuItem, FormControl, Select } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { hotelOptions } from "../../data/budget_selected_lines";
import { selectHotel, SET_HOTEL } from "../../features/HotelSlice";

export default function HotelChoice() {
  const classes = useStyles();
  const hotel = useSelector(selectHotel);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    if (e.target.value === "") {
      dispatch(SET_HOTEL(null));
    } else {
      const chosenHotel = (hotels) => {
        for (let i = 0; i < hotels.length; i++)
          if (hotels[i].title === e.target.value) return hotels[i];
      };

      dispatch(SET_HOTEL(chosenHotel(hotelOptions)));
    }
  };

  return (
    <div>
      <FormControl className={classes.formControl} style={{ width: "15rem" }}>
        <Select
          labelId='demo-simple-select-filled-label'
          id='demo-simple-select-filled'
          value={hotel.title}
          onChange={handleChange}
        >
          {hotelOptions.map((hotel) => (
            <MenuItem key={hotel.id} value={hotel.title}>
              {hotel.title}
            </MenuItem>
          ))}
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
