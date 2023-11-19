import React from "react";
import BotCard from "./BotCard";

// A functional component to display the bot army
function BotArmy({ bots, removeBot, deleteBot }) {
  // Map through the bots to create BotCard components for each bot in the army
  let myBotArmy = bots.map((bot) => {
    return (
      <BotCard
        key={bot.id}
        bot={bot}
        deleteBot={removeBot} // Pass the removeBot function to handle bot removal
        // deleteBot={deleteBot} 
      />
    );
  });

  return (
    <div className="d-block p-2 bg-dark text-white army">
      {/* Display a heading for the bot army */}
      <strong>BOT ARMY</strong>
      <div className="container mt-4">
        <div className="row">{myBotArmy}</div>
      </div>
    </div>
  );
}


export default BotArmy;
