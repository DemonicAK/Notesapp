import React from 'react'

export default function Alert(props) {
    return (
        <div style={{height:'50px'}}> 
            {props.info && <div>
                <div className={`alert alert-${props.info.type} `} role="alert">
                    {props.info.type}:  {props.info.msg}
                </div>
            </div>}
        </div>


    )
}
