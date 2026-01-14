import React, { useState } from "react";

export const ChangeProfile = (props) => {
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
                    props.setUsername(newUsername);
                    setNewUsername("");
                }}
            >
                Change username
            </button>
        </div>
    );
};