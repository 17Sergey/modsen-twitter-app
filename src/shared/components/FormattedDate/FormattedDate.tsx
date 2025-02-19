import { formatPostDate } from "@/shared/utils/dateFunctions";
import { FC } from "react";
import styles from "./FormattedDate.module.scss";

interface FormattedDateProps {
  date: Date;
}

export const FormattedDate: FC<FormattedDateProps> = ({ date }) => {
  return <p className={styles.date}>{formatPostDate(date)}</p>;
};
