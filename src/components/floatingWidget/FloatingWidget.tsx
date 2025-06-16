import React from "react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { scrollToTop } from "../../utils/ScrollUtils";

export default function FloatingWidget() {
  const handleOnClickScrollToTop = React.useCallback(() => {
    scrollToTop();
  }, []);

  return (
    <button
      className="floating-widget"
      onClick={handleOnClickScrollToTop}
      aria-label="Scroll to top"
    >
      <FontAwesomeIcon className="icon" icon={faArrowUp} />
    </button>
  );
}
