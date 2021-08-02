import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import accounting from "accounting";
import Row from "./Row";
import { getTotal } from "../../utils/utils";
import { useSelector } from "react-redux";
import { selectHotel } from "../../features/HotelSlice";
import {
  selectDay1Dinner,
  selectDay1Lunch,
  selectDay2Dinner,
  selectDay2Lunch,
  selectDay3Lunch,
} from "../../features/RestaurantSlice";
import {
  airport29,
  airport29dep,
  disposal5h29,
  disposal6h29,
} from "../../data/transfers";
import {
  beertasting,
  fcbexperience,
  footballtickets,
  tapastour,
  walkingtour,
} from "../../data/activities";
import { elarenal, fabricamoritz, corcaliu } from "../../data/restaurants";
import { forwardRef } from "react";

const Budget = (props, ref) => {
  const classes = useStyles();
  const hotel = useSelector(selectHotel);
  const day1Dinner = useSelector(selectDay1Dinner);
  const day2Dinner = useSelector(selectDay2Dinner);
  const day3Lunch = useSelector(selectDay3Lunch);

  const budgetRows = [
    { event: "accommodation", selected: hotel },
    { event: "29-seater Airport Transfer to Hotel", selected: airport29 },
    { event: "Tapas tour for Lunch", selected: tapastour },
    { event: "Fabrica Moritz beer tasting", selected: beertasting },
    { event: "Dinner at Fabrica Moritz", selected: fabricamoritz },
    {
      event: "29-Seater bus at disposal for up to 6hours",
      selected: disposal6h29,
    },
    {
      event: "FCBarcelona Experience Museum & Stadium",
      selected: fcbexperience,
    },
    {
      event: "Lunch at the Beach - El Arenal",
      selected: elarenal,
    },
    { event: "day1Dinner", selected: day1Dinner },
    { event: "Walking Tour Art Nouveau", selected: walkingtour },
    { event: "Lunch at Cor Caliu", selected: corcaliu },
    { event: "Bus at disposal to Stadium and Dinner", selected: disposal5h29 },
    { event: "Football tickets 3rd Stand Central", selected: footballtickets },
    { event: "day2Dinner", selected: day2Dinner },
    { event: "Transfer to Airport", selected: airport29dep },
  ];

  return (
    <div className={classes.root} ref={ref}>
      <Table
        aria-label='collapsible table'
        stickyHeader
        size='small'
        id='budget'
      >
        <TableHead>
          <TableRow>
            <TableCell width='5%' />
            <TableCell width='20%'>Date</TableCell>
            <TableCell width='35%'>Service</TableCell>
            <TableCell width='5%'>pax</TableCell>
            <TableCell width='15%'>unit cost w/VAT</TableCell>
            <TableCell width='10%'>Cost incl VAT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {budgetRows.map((row) => (
            <Row key={row.event} row={row} />
          ))}
          <TableRow>
            <TableCell colSpan={4} />
            <TableCell>Total Budget</TableCell>
            <TableCell>
              {accounting.formatMoney(getTotal(budgetRows), "€")}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: "auto",
    width: "100%",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      overflowX: "scroll",
    },
  },
}));

export default forwardRef(Budget);
