import React, {Component} from 'react';
import Input from './Input'
import Gifs from './Gifs'

const AsyncGifs = (props) => {
    const {
        value, 
        elements, 
        urls,
        status, 
        inputChange, 
        elementsChange,
        fetchGifs 
    } = props

    return (
        <div>
            <Input value={value} elements={elements} 
                inputChange={inputChange} elementsChange={elementsChange} 
                fetchGifs={fetchGifs}/>
            <Gifs urls={urls} status={status} />
        </div>
    );
}


export default AsyncGifs;
