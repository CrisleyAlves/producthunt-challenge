import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MAX_DATE = new Date();

/**
 * InputDate is a reusable date picker component.
 *
 * @param onChangeDate - Callback function invoked when the selected date changes.
 * @param currentDate - The currently selected date value.
 *
 * @returns A DatePicker component with a maximum selectable date defined by MAX_DATE.
 */
export default function InputDate({ onChangeDate, currentDate }) {
  return (
    <DatePicker
      className="datepicker"
      selected={currentDate}
      onChange={(date) => onChangeDate(date)}
      maxDate={MAX_DATE}
    />
  );
}
