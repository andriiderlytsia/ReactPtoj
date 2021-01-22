import './App.css';
import Header from "./components/Header";
import UserBar from "./components/UserBar";
import Profile from "./components/Profile";


function App() {
    return (
        <div className={"app-wrapper"}>
            <Header />
            <div className="main">
                <UserBar />
                <Profile />
            </div>

            {/*<Profile />*/}

        </div>


    );
}


export default App;
