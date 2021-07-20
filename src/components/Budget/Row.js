import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import accounting from "accounting";
import { getHotelTotal, getTotalRooms } from "../../utils/utils";
import HotelChoice from "./HotelChoice";
import RestaurantChoice from "./RestaurantChoice";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

const Row = ({
  row: {
    event,
    selected,
    selected: { date, cat, pax, unitcost, rooms },
  },
}) => {
  const [open, setOpen] = useState(false);
  const classes = useRowStyles();
  return (
    <>
      <TableRow className={classes.root}>
        {cat === "hospitality" ? (
          <TableCell>
            <IconButton
              aria-label='expand row'
              size='small'
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
        ) : (
          <TableCell></TableCell>
        )}

        <TableCell>{date}</TableCell>
        <TableCell>
          {cat === "hospitality" ? (
            <HotelChoice />
          ) : (
            <RestaurantChoice event={event} />
          )}
        </TableCell>
        <TableCell>{pax}</TableCell>
        <TableCell>
          {cat !== "hospitality" && accounting.formatMoney(unitcost, "€")}
        </TableCell>
        <TableCell>
          {cat !== "hospitality"
            ? accounting.formatMoney(pax * unitcost, "€")
            : accounting.formatMoney(getHotelTotal(selected), "€")}
        </TableCell>
      </TableRow>
      {/* breakdown starts here  */}
      {cat === "hospitality" && (
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout='auto' unmountOnExit>
              <Box margin={1}>
                <Table size='small' aria-label='hotel breakdown'>
                  <TableHead>
                    <TableRow>
                      <TableCell>Description</TableCell>
                      <TableCell>Nr. Units </TableCell>
                      <TableCell>Nr. of nights </TableCell>
                      <TableCell>Cost per room per night</TableCell>
                      <TableCell>Total Cost</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rooms.map((room) => (
                      <TableRow key={room.title}>
                        <TableCell component='th' scope='row'>
                          {room.title}
                        </TableCell>
                        <TableCell>
                          {room.cat === "citytax"
                            ? getTotalRooms(selected.rooms)
                            : room.units}
                        </TableCell>
                        <TableCell>{room.nights}</TableCell>
                        <TableCell>
                          {accounting.formatMoney(room.unitcost, "€")}
                        </TableCell>
                        <TableCell>
                          {room.cat === "citytax"
                            ? accounting.formatMoney(
                                getTotalRooms(rooms) * room.unitcost,
                                "€"
                              )
                            : accounting.formatMoney(
                                room.units * room.nights * room.unitcost,
                                "€"
                              )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      )}
    </>
  );
};

export default Row;
