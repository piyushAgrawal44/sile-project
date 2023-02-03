import React from 'react'

function Alert(props) {
    return (
        <>
            <div className={`w-[94%] left-[3%] bg-${props.bg} bg-purple-500 text-white rounded-lg ${props.display} 
            p-2 mx-2 mb-2 fixed bottom-0`}>
                {props.message}
            </div>
        </>
    )
}

export default Alert