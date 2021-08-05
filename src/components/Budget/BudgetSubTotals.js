import { getHospitalityTotal, getSubTotal } from "../../utils/utils";
import accounting from "accounting";

export default function BudgetSubTotals({ cost, itemType }) {
  return (
    <div>
      {itemType !== "Hospitality" ? (
        <>
          <div>{itemType}</div>
          <div>{accounting.formatMoney(getSubTotal(cost, itemType), "€")}</div>
        </>
      ) : (
        <>
          <div>{itemType}</div>
          <div>
            {accounting.formatMoney(getHospitalityTotal(cost, itemType), "€")}
          </div>
        </>
      )}
    </div>
  );
}
