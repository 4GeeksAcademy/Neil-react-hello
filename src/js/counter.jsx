import React from "react";

export const Counter = (props) => {
    return (
        <div className="w-100">
            <p>{props.digitFour % 10}</p>
            <p>{props.digitThree % 10}</p>
            <p>{props.digitTwo % 10}</p>
            <p>{props.digitOne % 10}</p>
        </div>
    );
};


