import React from "react";
import Message from "./Message/Message";


const History = (props) => {
    return (
        <div>
            <Message />
            <Message />

            {/*{props.messages.map(message =>{*/}
            {/*    return <Message message= {message}  />*/}
            {/*})}*/}
        </div>
    )
}

export default History