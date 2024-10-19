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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);

  // Fonction appelée lorsque l'utilisateur est sélectionné
  const handleSearchUpdate = (selectedUserName) => {
    console.log("handleSearchUpdate appelé avec :", selectedUserName); // Vérifiez si cette fonction est bien appelée
    setSearchTerm(selectedUserName);
    console.log("Utilisateur sélectionné :", selectedUserName);
  };

  const minirightsidebar = () => {
    document.getElementById("rightSidebar").classList.toggle("right-sidebar");
    document.body.classList.toggle("right-sidebar-close");
  };

  useEffect(() => {
    // Simulons le chargement des utilisateurs
    setLoading(true);
    setTimeout(() => {
      console.log("Chargement des utilisateurs simulé"); // Vérifiez si le chargement est effectué
      setUsers([
        { id: 1, name: "John Doe", profilePicture: "path/to/john.jpg" },
        { id: 2, name: "Jane Smith", profilePicture: "path/to/jane.jpg" },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
      <>
        <div className="right-sidebar-mini" id="rightSidebar">
          <div className="right-sidebar-panel p-0">
            <Card className="shadow-none m-0 h-100">
              <Card.Body className="px-0 pt-0">
                <div className="p-4">
                  <h6 className="fw-semibold m-0">Chats</h6>
                  <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                  <SearchModal
                      users={users}
                      loading={loading}
                      error={error}
                      onSelectUser={handleSearchUpdate} // Passer la fonction pour gérer la sélection
                  />
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
                  <Button
                      onClick={() => navigate('/chat/index')}
                      className="btn btn-primary w-100 py-3 d-block rounded-0"
                  >
                    View All Conversion
                  </Button>
                </div>
                <div
                    className="right-sidebar-toggle bg-primary text-white mt-3 d-flex"
                    onClick={minirightsidebar}
                >
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
