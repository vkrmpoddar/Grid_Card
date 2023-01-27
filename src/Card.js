import React from "react";



const Card = (props) => {

    return (
      <>
        <div className="boxes">
          <div className = "circle">
            <h3>{props.user.name[0]}</h3>
            <h3>{props.user.name}</h3>
          </div>
        </div>
      </>
    );

}
export default Card;