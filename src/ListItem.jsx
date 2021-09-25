import { MoreVertOutlined, PhoneCallbackOutlined } from "@material-ui/icons";
import React, { useContext } from "react";
import "./css/listitem.css";
import { userContext } from "./Context.jsx";

function ListItem({ list }) {
  const { setPage, setDetail } = useContext(userContext);
  const details = () => {
    setPage("Detail");
    setDetail(list);
  };
  let jsonstring = list.created_at;
  console.log(
    new Date(jsonstring).toLocaleTimeString("en-US", { hours: false })
  );
  const newDate = new Date(jsonstring).toLocaleDateString("en-US", {
    hours: false,
  });
  const newTime = new Date(jsonstring).toLocaleTimeString("en-US", {
    hours: false,
  });
  return (
    <div>
      <div className="listitem-date">{newDate}</div>
      <div className="listitem-container">
        <button className="listitem-box" onClick={details}>
          <div className="listitem-call">
            <PhoneCallbackOutlined
              style={{
                color: "gray",
                marginLeft: "10px",
                marginRight: "15px",
              }}
            />
            <div>
              <div className="listitem-number">{list.from}</div>
              <div className="listitem-description">
                tried to call on {list.to}
              </div>
            </div>
          </div>
          <div className="listitem-time">
            <MoreVertOutlined
              style={{ fontSize: "15px", marginRight: "5px" }}
            />
            <div>{newTime}</div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default ListItem;
