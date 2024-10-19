import React from "react";
import PersonOnline from "./PersonOnline";

const UserList = ({ person_online }) => {
  return (
    <ul className="nav navbar-nav iq-main-menu mb-5 pb-5" id="sidebar-menu" role="tablist">
      <h6 className="mb-3 pb-1">Recent Chats</h6>
      {person_online.map((user, index) => (
        <li key={index}>
          <PersonOnline img={user.img} name={user.name} />
        </li>
      ))}
    </ul>
  );
};

export default UserList;