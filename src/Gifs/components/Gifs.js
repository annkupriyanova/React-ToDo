import React from 'react';

const Gifs = (props) => {
    const { urls, status } = props
    //const displayStatus = status.split(' ')[0] === "Error"? 
                        //<p style={{color: 'red'}}>{status}</p> : <p>{status}</p>
    return (
        <div>
            <p>{ status }</p> 

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