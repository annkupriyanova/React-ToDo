import React, {Component} from 'react';
import Input from './Input'
import Gifs from './Gifs'

const AsyncGifs = (props) => {
    const {
        value, 
        numberOfElemnts, 
        status, 
        urls, 
        inputChange, 
        numberOfElemntsChange,
        fetchGifs 
    } = props

    return (
        <div>
            <Input value={value} numberOfElemnts={numberOfElemnts} 
                inputChange={inputChange} numberOfElemntsChange={numberOfElemntsChange} 
                submitClick={fetchGifs}/>
            <Gifs urls={urls} status={status} />
        </div>
    );
}


export default AsyncGifs;
