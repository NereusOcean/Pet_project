import React from 'react';
import Template from "./componentHelper/StripsTemplate";



function GenerateStrips(props) {
    

    const Cards = [];

    for (let i = 0; i < props.data.length; ++i) {
        let current = props.data[i];
        Cards.push(<Template data={current} key={current.id} filterFunc={props.filterFunc}/>);
    }

    return (
        <>
            {Cards}
        </>

    )
}

export default GenerateStrips