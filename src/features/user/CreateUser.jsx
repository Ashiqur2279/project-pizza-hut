import React, { useState } from "react";

const CreateUser = () => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>Welcome to Pizza Hut. Start by telling your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </form>
  );
};

export default CreateUser;
