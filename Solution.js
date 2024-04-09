import React from "react";

const NestedDivs = ({ data }) => {
  const renderElement = (element) => {
    if (Array.isArray(element)) {
      const divs = [];
      for (let i = 0; i < element.length; i++) {
        if (Array.isArray(element[i])) {
          divs.push(
            <div
              key={i}
              style={{
                backgroundColor: "gray",
                margin: "5px",
                padding: "5px",
                border: "1px solid black",
              }}
            >
              {renderElement(element[i])}
            </div>
          );
        } else if (typeof element[i] === "object" && element[i] !== null) {
          const { color, number } = element[i];
          divs.push(
            <div
              key={i}
              style={{
                backgroundColor: color || "black",
                margin: "5px",
                padding: "5px",
                borderRadius: "5px",
                border: "1px solid black",
              }}
            >
              {number}
            </div>
          );
        }
      }
      return divs;
    } else if (typeof element === "object" && element !== null) {
      const { color, number } = element;
      return (
        <div
          style={{
            backgroundColor: color || "black",
            margin: "5px",
            padding: "5px",
            borderRadius: "5px",
            border: "1px solid black",
          }}
        >
          {number}
        </div>
      );
    }
  };

  return renderElement(data);
};

const App = () => {
  //I am taking this as an example
  const data = [
    { color: "blue", number: 10 },
    [
      { color: "green", number: 14 },
      [{ color: "yellow", number: 11 }, []],
      [{ color: "red", number: 11 }],
      [],
    ],
  ];

  return (
    <div
      className="App"
      style={{
        backgroundColor: "gray",
        margin: "5px",
        padding: "5px",
      }}
    >
      <NestedDivs data={data} />
    </div>
  );
};

export default App;
