import { InboxOutlined } from "@material-ui/icons";
import React, { useContext } from "react";
import Header from "./Header.jsx";
import Lists from "./Lists.jsx";
import Footer from "./Footer.jsx";
import Detail from "./Detail.jsx";
import { userContext } from "./Context.jsx";
import Archived from "./Archived.jsx";

function Home() {
  const { data, page, archive, setArchive } = useContext(userContext);
  const achiveCall = () => {
    data.map((call) => {
      setArchive((call.is_archived = true));
    });
  };
  const unachiveCall = () => {
    data.map((call) => {
      setArchive((call.is_archived = false));
    });
  };

  return (
    <div className="container">
      <Header />
      {page === "Home" ? (
        <div style={{ overflow: "scroll", height: "500px" }}>
          <div className="archive-container">
            <div className="archive-box">
              <InboxOutlined style={{ color: "gray" }} />
              <button className="archive-button" onClick={achiveCall}>
                Archive all calls
              </button>
            </div>
          </div>
          {!archive ? <Lists /> : <div />}
        </div>
      ) : page === "Archive" ? (
        <div style={{ overflow: "scroll", height: "500px" }}>
          <div className="archive-container">
            <div className="archive-box">
              <InboxOutlined style={{ color: "gray" }} />
              <button className="archive-button" onClick={unachiveCall}>
                Unarchive all calls
              </button>
            </div>
          </div>
          <Archived />
        </div>
      ) : (
        <Detail />
      )}
      <Footer />
    </div>
  );
}

export default Home;
