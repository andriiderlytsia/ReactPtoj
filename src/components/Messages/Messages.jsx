import React from "react";
import Dialogs from "./Dialogs/Dialogs";
import s from './Messages.module.css'
import History from "./History/History";
import {BrowserRouter, Route} from "react-router-dom";

const Messages = (props) => {

    let users = [
        {
            id: 1,
            name: "John",
            ava: "https://m.economictimes.com/thumb/msid-59821212,width-1200,height-900,resizemode-4,imgsize-207608/science-reveals-harry-styles-is-one-of-the-most-handsome-people-in-the-world.jpg",
            messages: ['message1', 'seconf message']
        },
        {
            id: 2,
            name: "Jessica",
            ava: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080",
            messages: ['Hello', 'Hi', 'sdasdass']
        }
    ]
    return (
        <BrowserRouter>
            <div className={s.messages}>
                <Dialogs users={users}/>
                <History />



                {/*<div>*/}
                {/*    <Route path={'/Messages/John'} component={History(users[0])}/>*/}
                {/*    <Route path={'/Messages/Jessica'} component={History(users[1])}/>*/}
                {/*</div>*/}


            </div>
        </BrowserRouter>

    )
}

export default Messages;