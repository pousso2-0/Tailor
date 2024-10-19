import React from "react";
import { Tab } from "react-bootstrap";
import ChatItem from "./ChatItem";


import user1 from "../../../../assets/images/user/user-1.jpg"; // Mettez à jour le chemin et le nom de fichier selon votre structure
import user2 from "../../../../assets/images/user/user-2.jpg";
import user3 from "../../../../assets/images/user/user-3.jpg";
import user4 from "../../../../assets/images/user/user-4.jpg";
import user5 from "../../../../assets/images/user/user-5.jpg";
import user6 from "../../../../assets/images/user/user-6.jpg";
const ChatList = () => (
  <>
    <Tab.Pane eventKey="first">
      <ChatItem
        avatar={user1}
        name="Anna Sthesia"
        message="hey! how are you?"
        time="2min"
      />
      <ChatItem
        avatar={user2}
        name="Paul Molive"
        message="hey! how are you?"
        time="1Day"
      />
      <ChatItem
        avatar={user3}
        name="Anna Mull"
        message="hey! how are you?"
        time="01 Nov"
      />
      <ChatItem
        avatar={user4}
        name="Paige Turner"
        message="hey! how are you?"
        time="33min"
      />
      <ChatItem
        avatar={user5}
        name="Bob Frapples"
        message="hey! how are you?"
        time="33min"
      />
      <ChatItem
        avatar={user6}
        name="Barb Ackue"
        message="hey! how are you?"
        time="33min"
      />
    </Tab.Pane>
    <Tab.Pane eventKey="second">
      <ChatItem
        avatar={user6}
        name="Thunder Bolts"
        message="hey! how are you?"
        time="2min"
      />
      <ChatItem
        avatar={user4}
        name="The Developer"
        message="hey! how are you?"
        time="2min"
      />
      <ChatItem
        avatar={user5}
        name="The Guardians"
        message="hey! how are you?"
        time="2min"
      />
    </Tab.Pane>
  </>
);

export default ChatList;