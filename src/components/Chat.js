import React, { useState } from "react";

function Chat() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button
        className="fixed bottom-8 right-8 p-4 rounded-full bg-blue-500 text-white shadow-lg"
        onClick={toggleModal}
      >
        <i className="fa-solid fa-2x fa-message"></i>
      </button>
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:w-80 sm:h-96 bg-gray-100 border-black border rounded-lg shadow-xl z-10">
          <div className="flex justify-end pt-2 pr-2">
            <button className="font-bold" onClick={toggleModal}>
              X
            </button>
          </div>
          <div className="sm:px-4 sm:py-6 p-2 h-full overflow-y-auto">
            <p className="text-lg font-semibold mb-4">
              Hello, How can I help you.
            </p>
            {/* Chat conversation goes here */}
          </div>
        </div>
      )}
    </>
  );
}

export default Chat;
