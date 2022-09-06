import React from "react";
import OpenConversation from "./OpenConversation";
import Sidebar from "./Sidebar";
import { useConversations } from "../contexts/ConversationsProvider";

function Dashboard({ id }) {
  const { selectedConversation } = useConversations();
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <Sidebar id={id} />
      {selectedConversation && <OpenConversation />}
    </div>
  );
}

export default Dashboard;
