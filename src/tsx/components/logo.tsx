import React from 'react';

export const Logo: React.FC = () => {
    return (
        <div className="box">
                    <svg className="box--logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 198 189">
            <polygon className="box--logo__right-middle" points="117,126 117,180 126,172.8 126,126 196.88,15.75 198,0 "/>
            <polygon className="box--logo__right-right" points="135,126 135,169.2 144,162 144,126 196.92,42.84 198,27 "/>
            <polygon className="box--logo__left-middle" points="0,0 1.59,14.82 81,126 81,172.8 90,180 90,126 "/>
            <polygon className="box--logo__left-left" points="0,27 1.67,41.67 63,126 63,162 72,169.2 72,126 "/>
            {/* <path d="M93.83,24.52"/> */}
            <polygon className="box--logo__middle-middle" points="99,90 99,186 103.5,189 108,186 108,99 103.43,90 "/>
        </svg>
        </div>
    )
}