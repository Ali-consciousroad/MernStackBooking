import { userSelector, useSelector, useStore } from "react-redux";

// Use hook
const Home = () => {
    //const state = useSelector((state) => state);
    // Destructure the state
    const { user } = useSelector((state) => ({...state}));
    return (
        <div className="container-fluid h1 p-5 text-centesr">
            Home Page {JSON.stringify(user)}
        </div>
    );
};

export default Home;