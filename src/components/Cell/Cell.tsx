import { FC, useEffect, useState } from "react";
import styles from "./Cell.module.scss";

interface ICellProps {
  data: string | number;
  id: number;
  valueBy: string;
  handleCellClick: (id: string | number, key: string, e: any) => void;
  resetState: () => void;
  colorData: any[];
  isBiggerCell: boolean;
}

export const Cell: FC<ICellProps> = ({
  data,
  valueBy,
  handleCellClick,
  id,
  resetState,
  colorData,
  isBiggerCell,
}) => {
  const [inputValue, setinputValue] = useState(data);
  const [color, setcolor] = useState("#fff");

  const handleInputChange = (e: any) => {
    setinputValue(e.target.value);
  };

  useEffect(() => {
    const filteredColorData = colorData.find(
      (item) => item.id === `${id}-${valueBy}`
    );
    if (filteredColorData) {
      setcolor(filteredColorData.color);
    }
  }, [colorData]);

  return (
    <div
      className={`${styles.container}`}
      onClick={(e) => handleCellClick(id, valueBy, e)}
      style={{
        background: color,
        width: isBiggerCell ? "334px" : "150px",
      }}
    >
      <input
        value={inputValue}
        onChange={handleInputChange}
        onBlur={resetState}
      />
    </div>
  );
};
