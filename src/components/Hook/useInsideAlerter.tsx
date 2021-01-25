import React from "react";

function useInsideAlerter(ref: any, callback: any) {
  React.useEffect(() => {
    /** Alert if clicked on outside of element */
    const handleClickOutside = (event: any) => {
      if (!ref) return;
      if (ref.current && ref.current.contains(event.target)) {
        console.log("You clicked outside of me!");
        callback();
      }
    };

    // Bind the event listener
    document.addEventListener("click", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("click", handleClickOutside);
    };
  });
}
export default useInsideAlerter;
