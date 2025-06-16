import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { PROFILE_PICTURE } from "@config/constants";
import Avatar from "@components/avatar/Avatar";
import InputDate from "@components/datepicker/DatePIcker";

export default function Header({
  handleOnChangeDate,
  postDate,
  setShowSearchForm,
}) {
  return (
    <div className="header">
      <Avatar
        classNames="avatar--circle"
        avatarUrl={PROFILE_PICTURE}
        altText="profile avatar"
        ariaDescription="profile avatar"
      />

      <InputDate onChangeDate={handleOnChangeDate} currentDate={postDate} />

      <button
        className="search__button"
        aria-describedby="search"
        onClick={setShowSearchForm}
      >
        <FontAwesomeIcon className="icon" icon={faSearch} />
      </button>
    </div>
  );
}
