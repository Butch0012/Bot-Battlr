import React from "react";
import BotCard from "./BotCard";
import 'bootstrap/dist/css/bootstrap.min.css';

// A functional component to display the bot army
function BotArmy({ bots, removeBot, addBotToCollection }) {
  // Map through the bots to create BotCard components for each bot in the army
  let myBotArmy = bots.map((bot) => {
    return (
      <BotCard
        key={bot.id}
        bot={bot}
        deleteBot={removeBot} // Pass the removeBot function to handle bot removal
      />
    );
  });

  // Function to add a new bot to the collection
  const handleAddBot = () => {
    // Replace this with the logic to add a new bot to the collection
    const newBot = {
      id: Math.random().toString(36).substring(7), // Generate a unique ID (you may use a better ID generation method)
      // other bot properties...
    };

    // Call the addBotToCollection function passed as a prop
    addBotToCollection(newBot);
  };

  return (
    <div className="d-block p-2 bg-dark text-white army">
      {/* Display a heading for the bot army */}
      <strong>BOT BOT ARMY</strong>
      <div className="container mt-4">
        <div className="row">{myBotArmy}</div>
      </div>
      {/* Button to add a new bot */}
      <button className="btn btn-primary mt-3" onClick={handleAddBot}>
        Add Bot
      </button>
    </div>
  );
}

export default BotArmy;
