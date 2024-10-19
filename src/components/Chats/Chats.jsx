import React, { useState, useEffect } from "react";
import { Tab, Nav } from "react-bootstrap";
import ChatSidebar from "./ChatSidebar";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import Scrollbar from "smooth-scrollbar";

import user1 from "../../assets/images/user/01.jpg";
import user2 from "../../assets/images/user/02.jpg";
import user3 from "../../assets/images/user/03.jpg";

const Chats = () => {
  const [active, setActive] = useState("first");
  const person_online = [
    {img: user1, name: "Paul Molive"},
    {img: user2, name: "John Travolta"},
    {img: user3, name: "Barb Ackue"}
  ]
  const messages = [
    {
      id: 1,
      user: {
        img: user1, // image de l'utilisateur
        name: "Paul Molive",
      },
      text: "Salut, comment ça va ?",
      time: "16:34",
      type: "sent", // 'sent' pour les messages envoyés, 'received' pour les messages reçus
    },
    {
      id: 2,
      user: {
        img: user2,
        name: "John Travolta",
      },
      text: "Ça va bien, merci ! Et toi ?",
      time: "16:35",
      type: "received",
    },
    {
      id: 3,
      user: {
        img: user1,
        name: "Paul Molive",
      },
      text: "Je cherche un bon template d'administration.",
      time: "16:36",
      type: "sent",
    },
    {
      id: 4,
      user: {
        img: user2,
        name: "John Travolta",
      },
      text: "J'en ai trouvé un super sur ThemeForest.",
      time: "16:37",
      type: "received",
    },
    {
      id: 5,
      user: {
        img: user1,
        name: "Paul Molive",
      },
      text: "Peux-tu me donner le lien ?",
      time: "16:38",
      type: "sent",
    },
    {
      id: 6,
      user: {
        img: user2,
        name: "John Travolta",
      },
      text: "Bien sûr, voici le lien : [lien du template].",
      time: "16:39",
      type: "received",
    },
  ];

  useEffect(() => {
    Scrollbar.init(document.querySelector(".data-scrollbar"));
  })

  const minisidebar = () => {
    document.getElementsByTagName("ASIDE")[0].classList.toggle("sidebar-mini");
  };

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <ChatSidebar person_online={person_online} active={active} setActive={setActive} minisidebar={minisidebar} />
      <main className="main-content">
        <div className="container-fluid content-inner p-0" id="page_layout">
          <Tab.Content id="myTabContent">
            <Tab.Pane eventKey="first">
              <ChatHeader user={person_online[0]} />
              <ChatBody messages />
              <ChatFooter />
            </Tab.Pane>
          </Tab.Content>
        </div>
      </main>
    </Tab.Container>
  );
};

export default Chats;