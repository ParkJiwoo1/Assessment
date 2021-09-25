import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import Home from "./Home.jsx";
import { userContext } from "./Context.jsx";

const App = () => {
  const [page, setPage] = useState("Home");
  const [data, setData] = useState([]);
  const [check, setCheck] = useState(false);
  const [archive, setArchive] = useState(false);
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    fetch("https://aircall-job.herokuapp.com/activities")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setCheck(true);
      });
  }, []);

  return (
    <div>
      <userContext.Provider
        value={{
          data,
          check,
          page,
          setPage,
          archive,
          setArchive,
          detail,
          setDetail,
        }}
      >
        <Home />
      </userContext.Provider>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
