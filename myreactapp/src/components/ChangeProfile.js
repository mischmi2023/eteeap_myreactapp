import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

export const ChangeProfile = () => {

    const { setUsername } = useContext(AppContext);
    const [newUsername, setNewUsername] = useState("");

    return (
        <div>
            <input
                type="text"
                value={newUsername}
                onChange={(event) => {
                    setNewUsername(event.target.value);
                }}
            />     
            <button
                onClick={() => {
                    setUsername(newUsername);
                    setNewUsername("");
                }}
            >
                Change username
            </button>
        </div>
    );
};