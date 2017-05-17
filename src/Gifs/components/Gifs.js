import React from 'react';

const Gifs = ({ urls = [], status = "" }) => {
    const displayStatus = status.split(' ')[0] === "Error"? 
                        <p style={{color: 'red'}}>{status}</p> : <p>{status}</p>
    return (
        <div>
            {displayStatus}

            <div className="flex">
                { 
                    urls.map( gif => 
                        <div key={ gif } className="flex-item">
                            <img src={ gif } />
                        </div>
                )}
            </div>
        </div>
    )
}

export default Gifs