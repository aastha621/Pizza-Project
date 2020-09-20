import React from "react";

export default function Header()
{
	return(
		 <div
      style={{
        background: "#0D0628",
        padding: "15px 50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        
        <div
          style={{
            marginLeft: 20,
            fontSize: 30,
            color: "yellow",
            fontFamily: "Alata,sans-serif",
          }}
        >
          Pizza Customization
        </div>
      </div>
    </div>
    
		);

}