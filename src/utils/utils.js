import accounting from "accounting";

export const getTotal = (cost) => {
  const nonhospCost = cost
    .map(
      ({ selected }) =>
        selected.cat !== "hospitality" && selected.pax * selected.unitcost
    )
    .filter(Boolean); //removes falsy values

  const hospCost = cost.map(
    ({ selected }) => selected.cat === "hospitality" && getHotelTotal(selected)
  );

  const rowCost = [...hospCost, ...nonhospCost];
  const reducer = (acc, currentValue) => acc + currentValue;
  return rowCost.reduce(reducer);
};

export const getHospitalityTotal = (cost, itemType) => {
  const hospCost = cost.map(
    ({ selected }) => selected.type === itemType && getHotelTotal(selected)
  );

  const reducer = (acc, currentValue) => acc + currentValue;
  return accounting.formatMoney(hospCost.reduce(reducer), "€", 0);
};

export const getSubTotal = (cost, itemType) => {
  const subTotalAmount = cost
    .map(
      ({ selected }) =>
        selected.type === itemType && selected.pax * selected.unitcost
    )
    .filter(Boolean)
    .reduce((acc, currentValue) => acc + currentValue);

  return accounting.formatMoney(subTotalAmount, "€", 0);
};

export const getHotelTotal = (cost) => {
  const { rooms } = cost;
  const total =
    rooms[0].units * rooms[0].nights * rooms[0].unitcost +
    rooms[1].units * rooms[1].nights * rooms[1].unitcost +
    rooms[2].unitcost * rooms[0].units * rooms[0].occupancy * rooms[0].nights +
    rooms[2].unitcost * rooms[1].units * rooms[1].occupancy * rooms[1].nights;

  return total;
};

export const getTotalRooms = (arr) => {
  const totalRooms = arr
    .filter((room) => room.cat !== "citytax")
    .map((room) => room.units * room.nights * room.occupancy);
  const reducer = (acc, currentValue) => acc + currentValue;
  return totalRooms.reduce(reducer);
};
