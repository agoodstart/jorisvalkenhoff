import React from 'react';

interface Props {
    text: String
}

export const IntroSection: React.FC<Props> = () => {
    return (
        <section className="App"> 
            <header className="App-header">
            <p>
                
            </p>
        
            <p>
                Check out my <a target="_blank" rel="noreferrer" className="test-anchor" href="https://nl.linkedin.com/in/joris-valkenhoff-22670a186">LinkedIn</a> page
            </p>
    
            <p>Test</p>
            </header>
      </section>
    )
}