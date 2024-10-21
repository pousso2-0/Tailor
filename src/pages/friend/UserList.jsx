import ProfileHeader from "../../components/friend/ProfileHeader";
import img3 from "../../../assets/images/page-img/profile-bg3.jpg";
import React, {useState, useEffect} from "react";
import { userService } from "../../services/userService";

export default function UserList() {
    const [users, setUsers] = useState([]);


    return (
        <>
            <ProfileHeader title="Friend Lists" img={img3} />
            <div id="content-page" className="content-inner">
                <Container></Container>
            </div>
        </>
    );
}