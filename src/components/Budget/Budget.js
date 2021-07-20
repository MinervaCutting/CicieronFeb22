import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { BudgetContainer } from "./styles";
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

export default function Budget() {
  const hotel = useSelector(selectHotel);
  const day1Lunch = useSelector(selectDay1Lunch);
  const day1Dinner = useSelector(selectDay1Dinner);
  const day2Lunch = useSelector(selectDay2Lunch);
  const day2Dinner = useSelector(selectDay2Dinner);
  const day3Lunch = useSelector(selectDay3Lunch);

  const budgetRows = [
    { event: "accommodation", selected: hotel },
    { event: "day1Lunch", selected: day1Lunch },
    { event: "day1Dinner", selected: day1Dinner },
    { event: "day2Lunch", selected: day2Lunch },
    { event: "day2Dinner", selected: day2Dinner },
    { event: "day3Lunch", selected: day3Lunch },
  ];

  return (
    <BudgetContainer>
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
            <Row key={row.selected.title} row={row} />
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
    </BudgetContainer>
  );
}
