import "./App.css";
import PencilSquareIcon from "@heroicons/react/24/outline/PencilSquareIcon";
import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";
import UserCircleIcon from "@heroicons/react/24/outline/UserCircleIcon";
import PhoneIcon from "@heroicons/react/24/outline/PhoneIcon";
import ChatBubbleLeftRightIcon from "@heroicons/react/24/outline/ChatBubbleLeftRightIcon";
import CogIcon from "@heroicons/react/24/outline/CogIcon";
import UserItem from "./components/UserItem";

function App() {
    return (
        <div className="app">
            <div className="sidebar">
                <div className="search">
                    <div className="search-wrap">
                        <MagnifyingGlassIcon className="search-icon" />
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search..."
                        />
                    </div>
                    <PencilSquareIcon className="icon" />
                </div>
                <div className="user-list">
                    {Array.from(Array(20)).map((v, i) => {
                        return <UserItem key={i} />;
                    })}
                </div>
                <div className="others">
                    <UserCircleIcon className="icon" />
                    <PhoneIcon className="icon" />
                    <ChatBubbleLeftRightIcon className="icon" />
                    <CogIcon className="icon" />
                </div>
            </div>
            <div className="left"></div>
        </div>
    );
}

export default App;
