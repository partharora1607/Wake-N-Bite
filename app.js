import React from "react";
import ReactDOM from "react-dom/client";

const h1 = <h1>Namaste React from Akshay Saini</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

// React Components

const Title = () => {
  return <h1>Namaste React using JSX🗿</h1>;
};

const HeadingComponent = () => {
  return (
    <div>
      <Title />
      <h1>Namaste react functional Components! by Akshay Saini</h1>
    </div>
  );
};

root.render(<HeadingComponent />);
