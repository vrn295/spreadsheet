import { FC, ReactNode } from "react";
import styles from "./Row.module.scss";

interface IRowProps {
  children: ReactNode;
}

export const Row: FC<IRowProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
