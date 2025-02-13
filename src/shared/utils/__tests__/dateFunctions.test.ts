import { formatMemberSinceDate, formatPostDate } from "../dateFunctions";

describe("formatPostDate", () => {
  it('should return "Just now" if the post was just created', () => {
    const now = new Date();
    expect(formatPostDate(now)).toBe("Just now");
  });

  it("should return minutes ago if the post was created less than an hour ago", () => {
    const now = new Date();
    const lessThanAnHourAgo = new Date(now.getTime() - 30 * 60 * 1000); // 30 минут назад
    expect(formatPostDate(lessThanAnHourAgo)).toBe("30m");
  });

  it("should return hours ago if the post was created less than a day ago", () => {
    const now = new Date();
    const lessThanADayAgo = new Date(now.getTime() - 3 * 60 * 60 * 1000); // 3 часа назад
    expect(formatPostDate(lessThanADayAgo)).toBe("3h");
  });

  it('should return "1d" if the post was created exactly one day ago', () => {
    const now = new Date();
    const exactlyOneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000); // 1 день назад
    expect(formatPostDate(exactlyOneDayAgo)).toBe("1d");
  });

  it("should return formatted date if the post was created more than a day ago", () => {
    const now = new Date();
    const moreThanADayAgo = new Date(now.getTime() - 5 * 24 * 60 * 60 * 1000); // 5 дней назад
    const expectedDate = moreThanADayAgo.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
    expect(formatPostDate(moreThanADayAgo)).toBe(expectedDate);
  });
});

describe("formatMemberSinceDate", () => {
  it("should return the correct member since date format", () => {
    const createdAt = "2020-01-15T00:00:00Z"; // 15 января 2020 года
    expect(formatMemberSinceDate(createdAt)).toBe("Joined January 2020");
  });

  it("should handle invalid date format gracefully", () => {
    const createdAt = "invalid-date";
    expect(formatMemberSinceDate(createdAt)).toBe("Joined NaN NaN"); // Проверяем поведение для некорректной даты
  });
});
