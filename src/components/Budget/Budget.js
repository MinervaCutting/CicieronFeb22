import { useState } from "react";
import {
  Grid,
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
  selectDay2Dinner,
} from "../../features/RestaurantSlice";
import { selectActivity1 } from "../../features/ActivitySlice";
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
} from "../../data/activities";
import { elarenal, fabricamoritz, corcaliu } from "../../data/restaurants";
import { forwardRef } from "react";
import BudgetSubTotals from "./BudgetSubTotals";
import bedOutline from "@iconify-icons/mdi/bed-outline";
import silverwareVariant from "@iconify-icons/mdi/silverware-variant";
import medalOutline from "@iconify-icons/mdi/medal-outline";
import bus from "@iconify-icons/mdi/bus";

const Budget = (props, ref) => {
  const classes = useStyles();
  const hotel = useSelector(selectHotel);
  const day1Dinner = useSelector(selectDay1Dinner);
  const day2Dinner = useSelector(selectDay2Dinner);
  const activity1 = useSelector(selectActivity1);

  const budgetRows = [
    { event: "accommodation", selected: hotel },
    { event: "29-seater Airport Transfer to Hotel", selected: airport29 },
    { event: "activity1", selected: activity1 },
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
    { event: "Lunch at Cor Caliu", selected: corcaliu },
    {
      event: "Bus at disposal to Stadium and Dinner",
      selected: disposal5h29,
    },
    {
      event: "Football tickets 3rd Stand Central",
      selected: footballtickets,
    },
    { event: "day2Dinner", selected: day2Dinner },
    { event: "Transfer to Airport", selected: airport29dep },
  ];

  const typesArr = [
    { type: "Hospitality", icon: bedOutline },
    { type: "Meals", icon: silverwareVariant },
    { type: "Activities", icon: medalOutline },
    { type: "Transfers", icon: bus },
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
          {budgetRows?.map((row) => (
            <Row key={row.event} row={row} />
          ))}
          <TableRow>
            <TableCell colSpan={4} />
            <TableCell>
              <strong>TOTAL BUDGET</strong>
            </TableCell>
            <TableCell>
              <strong>
                {accounting.formatMoney(getTotal(budgetRows), "€")}
              </strong>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Grid container spacing={3} className={classes.gridLayout}>
        {typesArr.map(({ type, icon }, i) => (
          <Grid item key={i} xs={6} md={3}>
            <BudgetSubTotals cost={budgetRows} itemType={type} icon={icon} />
          </Grid>
        ))}
      </Grid>
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
  gridLayout: {
    padding: theme.spacing(3),
  },
}));

export default forwardRef(Budget);
