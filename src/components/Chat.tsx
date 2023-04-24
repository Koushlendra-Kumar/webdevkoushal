import React from "react";
import Popup from "reactjs-popup";

function Chat() {
  return (
    <Popup
      trigger={
        <button className="fixed bottom-0 right-0 m-8 p-4 rounded-full text-white flex justify-center items-center bg-lime-500">
          <i className="fa-solid fa-2x fa-message"></i>
        </button>
      }
      position="top center"
    >
      <div className="">Hello</div>
    </Popup>
  );
}

export default Chat;
