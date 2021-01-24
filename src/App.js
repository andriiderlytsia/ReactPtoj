import './App.css';
import Header from "./components/Header/Header";
import UserBar from "./components/UserBar/UserBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Messages/Dialogs/Dialogs";
import Messages from "./components/Messages/Messages";
import {BrowserRouter, Route, Link} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <div className="main">
                    <UserBar/>
                    <div className={"content"}>
                        <Route path={'/Profile'} component={Profile}/>
                        <Route path={'/Messages'} component={Messages}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>

    );
}


export default App;
