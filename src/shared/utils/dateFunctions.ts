export const formatPostDate = (createdAt: Date) => {
  const currentDate = new Date();
  const createdAtDate = createdAt;

  const timeDifferenceInSeconds: number = Math.floor(
    (currentDate.getTime() - createdAtDate.getTime()) / 1000,
  );
  const timeDifferenceInMinutes = Math.floor(timeDifferenceInSeconds / 60);
  const timeDifferenceInHours = Math.floor(timeDifferenceInMinutes / 60);
  const timeDifferenceInDays = Math.floor(timeDifferenceInHours / 24);

  switch (true) {
    case timeDifferenceInDays > 1:
      return createdAtDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });

    case timeDifferenceInDays === 1:
      return "1d";

    case timeDifferenceInHours >= 1:
      return `${timeDifferenceInHours}h`;

    case timeDifferenceInMinutes >= 1:
      return `${timeDifferenceInMinutes}m`;

    default:
      return "Just now";
  }
};

export const formatMemberSinceDate = (createdAt: string) => {
  const date = new Date(createdAt);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `Joined ${month} ${year}`;
};
