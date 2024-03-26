// import { useState } from "react";
import { useState } from "react";
import "./App.css";
import { CustomButton } from "./components/CustomButton.jsx";

function App() {
  const [stringToDisplay, setStringToDisplay] = useState("");
  const getButtonValue = (value) => {
    setStringToDisplay(stringToDisplay + value);
  };
  const btns = [
    { cls: "result", label: stringToDisplay },
    { cls: "btn btn-ac", label: "AC" },
    { cls: "btn btn-c", label: "C" },
    { cls: "btn btn-modulus", label: "%" },
    { cls: "btn btn-divide", label: "/" },
    { cls: "btn btn-7", label: "7" },
    { cls: "btn btn-8", label: "8" },
    { cls: "btn btn-9", label: "9" },
    { cls: "btn btn-multiply", label: "*" },
    { cls: "btn btn-4", label: "4" },
    { cls: "btn btn-5", label: "5" },
    { cls: "btn btn-6", label: "6" },
    { cls: "btn btn-minus", label: "-" },
    { cls: "btn btn-1", label: "1" },
    { cls: "btn btn-2", label: "2" },
    { cls: "btn btn-3", label: "3" },
    { cls: "btn btn-plus", label: "+" },
    { cls: "btn btn-0", label: "0" },
    { cls: "btn btn-point", label: "." },
    { cls: "btn btn-equals", label: "=" },
  ];

  return (
    <>
      <h1>Calculator</h1>
      <div className="wrapper">
        {btns.map((btn, i) => {
          return <CustomButton key={i} cls={btn.cls} label={btn.label} getButtonValue={getButtonValue}/>;
        })}
      </div>
    </>
  );
}

export default App;
