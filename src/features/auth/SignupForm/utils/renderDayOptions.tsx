export const renderDayOptions = () => {
  return Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
    <option key={day} value={day}>
      {day}
    </option>
  ));
};
