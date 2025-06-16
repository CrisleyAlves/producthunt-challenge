import React from "react";
import clsx from "clsx";

export default function Search({
  showSearchForm,
  onClickClearSearchForm,
  handleOnSubmitSearchForm,
}: {
  showSearchForm: boolean;
  onClickClearSearchForm: () => void;
  handleOnSubmitSearchForm: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <div
      className={clsx("search__wrapper", {
        "search__wrapper--active": showSearchForm,
      })}
    >
      <form onSubmit={handleOnSubmitSearchForm}>
        <input name="topic" className="search__input" />
        <button
          type="reset"
          className="search__clear"
          onClick={onClickClearSearchForm}
        >
          clear
        </button>
      </form>
    </div>
  );
}
