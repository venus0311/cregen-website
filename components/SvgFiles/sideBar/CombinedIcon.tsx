import React from "react";
import Rectangle from "./SmallRectangle";

// Inline the Vector SVG as a component
const Vector = () => (
  <svg width="19" height="31" viewBox="0 0 19 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.0298 15.4989H13.0362L16.5525 4.97577C16.5525 2.21982 14.3352 0 11.6222 0H4.97018C2.21733 0 0 2.21982 0 4.97577V10.5253C0 13.2813 2.21733 15.5011 4.97018 15.5011H5.96378L2.44747 26.0242C2.44747 28.7802 4.6648 31 7.37782 31H14.0298C16.7827 31 19 28.7802 19 26.0242V20.4747C19 17.7187 16.7827 15.4989 14.0298 15.4989ZM3.55614 10.5231V4.97356C3.55614 4.16937 4.1669 3.55792 4.97018 3.55792H11.6222C12.3878 3.55792 13.0362 4.16937 13.0362 4.97356V11.9388H4.97018C4.1669 11.9388 3.55614 11.2874 3.55614 10.5231ZM15.4461 26.022C15.4461 26.8262 14.8353 27.4376 14.032 27.4376H7.38004C6.61437 27.4376 5.96599 26.8262 5.96599 26.022V19.0568H14.032C14.8353 19.0568 15.4461 19.7081 15.4461 20.4725V26.022Z" fill="white"/>
  </svg>
);

const CombinedIcon = () => (
  <div style={{ position: "relative", width: 59, height: 59 }}>
    <Rectangle />
    <div style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    }}>
      <Vector />
    </div>
  </div>
);

export default CombinedIcon;