import React, { useState } from "react";
import "./styles.css";

function LoaderButton(props: any) {
  const [isLoading, setIsLoading] = useState(false);

  const handleOnClick = () => {
    if (isLoading) return;

    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <button
      className={isLoading ? "loading" : undefined}
      onClick={handleOnClick}
    >
      <div className="spinner" />
      <p className="text">{props.text}</p>
    </button>
  );
}

// function App() {
//   return (
//     <div className="app">
//       <Button text="CLICK ME!!" />
//       <Button text="LOOK AT ME I'M ANOTHER BUTTON!!" />
//     </div>
//   );
// }

export default LoaderButton;
