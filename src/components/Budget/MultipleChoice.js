import {
  makeStyles,
  MenuItem,
  FormControl,
  Select,
  Typography,
  Tooltip,
  withStyles,
  Fade,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_DAY1DINNER,
  SET_DAY2DINNER,
  selectDay1Dinner,
  selectDay2Dinner,
} from "../../features/RestaurantSlice";
import { useBudgetRows } from "../../data/budget_selected_lines";
import { selectActivity1, SET_ACTIVITY1 } from "../../features/ActivitySlice";

export default function MultipleChoice({ event }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [budgetRows] = useBudgetRows();
  const activity1 = useSelector(selectActivity1);
  const day1Dinner = useSelector(selectDay1Dinner);
  const day2Dinner = useSelector(selectDay2Dinner);
  const eventOptions = budgetRows.filter((rows) => rows.options);
  const currentOption = eventOptions
    .map((option) => option.event === event && option.options)
    .filter(Boolean)
    .flat();

  const selectedEvent = (event) => {
    switch (event) {
      case "activity1":
        return activity1;
      case "day1Dinner":
        return day1Dinner;
      case "day2Dinner":
        return day2Dinner;
      default:
        return activity1;
    }
  };

  const whichDispatch = (event) => {
    switch (event) {
      case "activity1":
        return SET_ACTIVITY1;
      case "day1Dinner":
        return SET_DAY1DINNER;
      case "day2Dinner":
        return SET_DAY2DINNER;
      default:
        return null;
    }
  };

  const handleChange = (e) => {
    const chosenEvent = (items) => {
      for (let i = 0; i < items.length; i++) {
        if (items[i].title === e.target.value) {
          return items[i];
        }
      }
    };

    const eventDispatched = whichDispatch(event);

    dispatch(eventDispatched(chosenEvent(currentOption)));
  };

  return (
    <div>
      <FormControl
        className={classes.formControl}
        style={{ width: "fit-content", maxWidth: "230px" }}
      >
        <Select
          labelId='demo-simple-select-filled-label'
          id='demo-simple-select-filled'
          value={selectedEvent(event).title}
          onChange={handleChange}
        >
          {eventOptions.map(
            (eventOption) =>
              eventOption.event === event &&
              eventOption.options.map((option) => (
                <MenuItem key={option.title} value={option.title}>
                  {option.explanation ? (
                    <BudgetTooltip
                      title={option.explanation}
                      arrow
                      interactive
                      TransitionComponent={Fade}
                      TransitionProps={{ timeout: 800 }}
                      placement='top-end'
                    >
                      <Typography variant='body1'>{option.title}</Typography>
                    </BudgetTooltip>
                  ) : (
                    <Typography variant='body1'>{option.title}</Typography>
                  )}
                </MenuItem>
              ))
          )}
        </Select>
      </FormControl>
    </div>
  );
}

const BudgetTooltip = withStyles((theme) => ({
  tooltip: {
    fontSize: 16,
    backgroundColor: "#ea5933",
  },
  arrow: {
    color: "#ea5933",
    fontSize: 25,
  },
}))(Tooltip);

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
