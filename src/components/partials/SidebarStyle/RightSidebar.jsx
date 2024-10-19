import React, { useEffect, useState } from "react";
import { Button, Card, Tab } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SearchBar from "./rightsidebas/SearchBar";
import ChatTabs from "./rightsidebas/ChatTabs";
import ChatList from "./rightsidebas/ChatList";
import ChatPopupModal from "./rightsidebas/ChatPopupModal";
import SearchModal from "../../../components/SearchModal";

const RightSidebar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchUpdate = (term) => {
    setSearchTerm(term);
  };

  const minirightsidebar = () => {
    document.getElementById("rightSidebar").classList.toggle("right-sidebar");
    document.body.classList.toggle("right-sidebar-close");
  };

  useEffect(() => {
    // Logique pour gérer les événements
  }, []);

  return (
      <>
        <div className="right-sidebar-mini" id="rightSidebar">
          <div className="right-sidebar-panel p-0">
            <Card className="shadow-none m-0 h-100">
              <Card.Body className="px-0 pt-0">
                <div className="p-4">
                  <h6 className="fw-semibold m-0">Chats</h6>
                  <SearchBar searchTerm={searchTerm} />
                  <SearchModal onSelectUser={handleSearchUpdate} />
                </div>
                <Tab.Container defaultActiveKey="first">
                  <ChatTabs />
                  <div className="media-height" data-scrollbar="init">
                    <Tab.Content className="right-sidebar-tabs-content">
                      <ChatList />
                    </Tab.Content>
                  </div>
                </Tab.Container>
                <div className="right-sidebar-toggle bg-primary text-white mt-3 d-flex">
                  <span className="material-symbols-outlined">chat</span>
                </div>
                <div className="conversion-button">
                  <Button onClick={() => navigate('/chat/index')} className="btn btn-primary w-100 py-3 d-block rounded-0">
                    View All Conversion
                  </Button>
                </div>
                <div className="right-sidebar-toggle bg-primary text-white mt-3 d-flex" onClick={minirightsidebar}>
                  <span className="material-symbols-outlined">chat</span>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
        <ChatPopupModal />
      </>
  );
};

export default RightSidebar;