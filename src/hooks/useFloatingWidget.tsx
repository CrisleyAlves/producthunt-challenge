import { useEffect, useState } from "react";

function useFloatingWidget() {
  const [showFloatingWidget, setShowFloatingWidget] = useState(false);

  const handleScroll = () => {
    setShowFloatingWidget(window.scrollY > 1000);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return showFloatingWidget;
}

export default useFloatingWidget;
