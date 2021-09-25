import React, { useContext } from "react";
import ListItem from "./ListItem.jsx";
import { userContext } from "./Context.jsx";

function Lists() {
  const test = useContext(userContext);
  const checks = test.check;
  return (
    <div>
      {checks &&
        test.data.map((list) => <ListItem key={list.id} list={list} />)}
    </div>
  );
}

export default Lists;
