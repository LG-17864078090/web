import React, { Component } from 'react';


const Children = ({match}) =>{
    return (
        <div>
            Children页面<br/>
            {
                match?match.params.num:0
            }
        </div>
    )
};

export default Children;