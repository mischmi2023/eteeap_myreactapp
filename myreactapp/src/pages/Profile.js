import React from "react";
import { ChangeProfile } from "../components/ChangeProfile";
export const Profile = (props) => {
    return (
        <div>
            <p>Profile, user is: {props.username}</p>
            <ChangeProfile setUsername={props.setUsername} />
        </div>
    );
};