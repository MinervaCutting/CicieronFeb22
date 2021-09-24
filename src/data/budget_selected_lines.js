
import {
  airport29,
  disposal5h29,
  disposal6h29,
  airport29dep,
} from "./transfers";


import { windsor } from "../vendors/windsor/data";

export const useBudgetRows = () => {

  const budgetRows = [

    { event: "29-seater Airport Transfer to Hotel", selected: airport29 },
    { event: "29-Seater bus at disposal for up to 6hours",selected: disposal6h29,},
    {
      event: "Windsor",
      selected: windsor,
    },
    {
      event: "Bus at disposal to Stadium and Dinner",
      selected: disposal5h29,
    },
  ];

  return [budgetRows];
};
