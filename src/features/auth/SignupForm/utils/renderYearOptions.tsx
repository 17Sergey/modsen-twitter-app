export const renderYearOptions = () => {
  return Array.from(
    { length: new Date().getFullYear() - 1900 + 1 },
    (_, i) => 1900 + i,
  ).map((year) => (
    <option key={year} value={year}>
      {year}
    </option>
  ));
};
