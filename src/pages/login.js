import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Message from "../components/Message";
import Button from "../components/Button";


const LoginPage = () => {
    const users = [
        { userName: "lilwayne", password: "111" },
        { userName: "em", password: "999" },
        { userName: "lilbaby", password: "616" },
        { userName: "21savage", password: "313" },
        { userName: "kendrickLamar", password: "555" },
    ];

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const foundUser = users.find(
            (user) => user.userName === userName && user.password === password
        );

        if (foundUser) {
            localStorage.setItem("user", JSON.stringify(foundUser));
            setErrorMessage("");
            navigate("/shop");
        } else {
            setErrorMessage("You dont seem to be a famous person (GO OUTSIDE AND CRY ) ");
        }
    };

    return (
        <>
            <Message>
                You must be an artist to enter
            </Message>
            <div className="logincontainer">
                
               
               
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="userName">Artist name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="userName"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            placeholder="username"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Pass</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="??????"
                        />
                    </div>
                    {errorMessage && <p className="text-danger">{errorMessage}</p>}
                    <Button type="submit">welcome</Button>
                </form>
            </div>
        </>
    );
};

export default LoginPage;
