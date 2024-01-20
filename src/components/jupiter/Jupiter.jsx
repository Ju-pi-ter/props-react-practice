import React from "react";

const Jupiter = () => {
    let firstName;
    return (
        <React.Fragment>
        <p> Hello {firstName || "Anonymous"} </p>
        <p> It looks like you {firstName ? "have" : "don’t have"} a name</p>
        {!firstName && (
          <form>
            <p> Type your name here </p>
            <input type="text" />
          </form>
        )}
      </React.Fragment>
      
  );
};

export default Jupiter;
