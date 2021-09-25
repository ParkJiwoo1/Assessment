import React, { useContext } from "react";
import "./css/detail.css";
import { userContext } from "./Context.jsx";
import { AccountCircle } from "@material-ui/icons";

function Detail() {
  const { detail, setPage } = useContext(userContext);
  let jsonstring = detail.created_at;
  return (
    <div>
      <button style={{ margin: "5px" }} onClick={() => setPage("Home")}>
        back
      </button>
      <div className="detail-container">
        <div className="detail-box">
          <AccountCircle style={{ fontSize: "40px", marginBottom: "10px" }} />
          <div className="detail-name">{detail.from}</div>
          <div className="detail-infobox">
            <div className="detail-date">
              {new Date(jsonstring).toLocaleString("en-US", { hours: false })}
            </div>
            <div className="detail-text">Type : {detail.call_type}</div>
            <div className="detail-text">
              Duration for {detail.duration} seconds
            </div>
            <div className="detail-text">Direction : {detail.duration}</div>
            <div className="detail-text">To : {detail.to}</div>
            <div className="detail-text">Via : {detail.via}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
