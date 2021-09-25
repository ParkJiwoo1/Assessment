import {
  Call,
  DialpadOutlined,
  PersonOutline,
  Settings,
} from "@material-ui/icons";
import React, { useContext } from "react";
import "./css/footer.css";
import { userContext } from "./Context.jsx";

function Footer() {
  const { data } = useContext(userContext);

  return (
    <div>
      <div className="footer-container">
        {data.length > 0 ? (
          <div className="footer-call">{data.length}</div>
        ) : (
          <div />
        )}
        <Call />
        <PersonOutline />
        <div className="circle-big">
          <div className="circle-big-in">
            <DialpadOutlined style={{ color: "white", fontSize: "30px" }} />
          </div>
        </div>
        <Settings />
        <Settings />
        <span className="circle-middle"></span>
        <span className="circle-small"></span>
      </div>
    </div>
  );
}
export default Footer;
