
import * as React from "react";
import "./App.css";
import AppHeader from "./AppHeader";
import ExpandBox from "./expandBox";
import GlobalProvider from './provider/GlobalController';

type DummyProp = {
  item: { id: number };
};

function DummyFn({ item }: DummyProp) {
  const isOdd = Boolean(item.id % 2);
  const divCssClassName = isOdd ? "odd" : "even";

  return <div className={divCssClassName}>{item.id}</div>;
}

function App() {
  const testArr = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];
  return (
    <div className="App">
      {testArr.map((item, i) => (
        <DummyFn item={item} key={i} />
      ))}
      <GlobalProvider>
        <AppHeader />
        <ExpandBox />
      </GlobalProvider>
    </div>
  );
}

export default App;
