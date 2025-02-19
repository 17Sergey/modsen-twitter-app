import { MONTHS } from "../constants";

export const renderMonthOptions = () => {
  return [
    <option key="" value="">
      January
    </option>,
    ...MONTHS.map((month) => (
      <option key={month} value={month}>
        {month}
      </option>
    )),
  ];
};
