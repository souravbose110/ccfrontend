import React from "react";
import "./Card.css";

const Card = () => {
    return (
        <div className="explore-card">
            <div className="top-part">
                <h4>TITLE</h4>
            </div>
            <div className="bottom-part">
                <div className="column">
                    <h2>0</h2>
                </div>
                <div className="column">
                    <h2>50</h2>
                </div>
                <div className="column">
                    <h2>0%</h2>
                </div>
            </div>
        </div>
    );
};

export default Card;
