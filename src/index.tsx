import React, { Suspense } from "react";
import * as ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { RecoilRoot } from "recoil";

export const MyContext = React.createContext({ username: "" });

function App() {
  //const username = useUsername();
  return (
    //<MyContext.Provider value={{ username: username }}>
    <Suspense fallback={<div>Loading...</div>}>
      <RecoilRoot>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </RecoilRoot>
    </Suspense>
    //</MyContext.Provider>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
