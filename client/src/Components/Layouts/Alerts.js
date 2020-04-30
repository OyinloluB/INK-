import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

export const Alerts = () => {
  const alertContext = useContext(AlertContext);
  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => (
      <div
        key={alert.id}
        style={{
          color: "white",
          padding: "10px",
          backgroundColor: "#df0058",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "25%",
          height: "200px",
          position: "absolute",
          zIndex: "1",
          right: "0",
        }}
      >
        {alert.msg}
      </div>
    ))
  );
};
