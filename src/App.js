import './App.css';
import Header from "./components/Header/Header";
import UserBar from "./components/UserBar/UserBar";
import Profile from "./components/Profile/Profile";


function App() {
    return (
        <div className={"app-wrapper"}>
            <Header />
            <div className="main">
                <UserBar />
                <Profile />
            </div>
        </div>


    );
}


export default App;
