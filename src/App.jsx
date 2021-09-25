import React, { useState } from 'react';

function App() {
    const [hovered, setHovered] = useState(false);
    const toggleHover = () => setHovered(!hovered);
    return (
        <>
            <button
                className={hovered ? 'red animated' : ''}
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}
            >
            Submit
            </button>
        </>
    );
}

export default App;