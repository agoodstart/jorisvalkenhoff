import React from 'react';

export const Box: React.FC = () => {
    return (
            <div className="cube">
                <div className="side  front">1</div>
                <div className="side   back">6</div>
                <div className="side  right">4</div>
                <div className="side   left">3</div>
                <div className="side    top">5</div>
                <div className="side bottom">2</div>
            </div>

    )
}