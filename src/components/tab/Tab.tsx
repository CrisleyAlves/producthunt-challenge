import React from "react";
import clsx from "clsx";

import { POST_ORDER_TYPE } from "@config/constants";

export default function Tab({
  selectedTab,
  onClickTabItem,
}: {
  selectedTab: string;
  onClickTabItem: (tab: string) => void;
}) {
  return (
    <div className="tab">
      <button
        className={clsx("tab__item", {
          "tab__item--active": selectedTab === POST_ORDER_TYPE.POPULAR.label,
        })}
        onClick={() => onClickTabItem(POST_ORDER_TYPE.POPULAR.label)}
      >
        Popular
      </button>
      <button
        className={clsx("tab__item", {
          "tab__item--active": selectedTab === POST_ORDER_TYPE.NEWEST.label,
        })}
        onClick={() => onClickTabItem(POST_ORDER_TYPE.NEWEST.label)}
      >
        Newest
      </button>
    </div>
  );
}
