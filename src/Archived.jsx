import React, { useContext } from "react";
import { userContext } from "./Context.jsx";
import ListItem from "./ListItem.jsx";
import "./css/archive.css";

function Archived() {
  const { archive } = useContext(userContext);

  const test = useContext(userContext);
  const checks = test.check;
  return (
    <div className="archived-container">
      {checks &&
        archive &&
        test.data.map((list) => <ListItem key={list.id} list={list} />)}
    </div>
  );
}

export default Archived;
