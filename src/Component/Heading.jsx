import React from 'react'

function Heading(props) {
    return (

        <div className="w-full text-center">
            <h1 className="title text-secondary">
                {props.title}
            </h1>
            <h1 className="subtitle">
                {props.subtitle}
            </h1>
        </div>

    )
}

export default Heading