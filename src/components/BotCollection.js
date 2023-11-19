import React from "react";
import BotCard from "./BotCard";

// A functional component representing a collection of bots
function BotCollection({ bots, addBot, deleteBot }) {
  // Map through the list of bots to create BotCard components
  const botItems = bots.map((bot) => {
    return (
      <BotCard
        key={bot.id}           // Unique key for each BotCard
        bot={bot}              // Pass the bot object as a prop to BotCard
        clickEvent={addBot}    // Pass the addBot function as a click event handler
        deleteBot={deleteBot}  // Pass the deleteBot function to handle bot deletion
      />
    );
  });

  // Render the collection of BotCard components within a container
  return (
    <div className="container mt-4">
      <div className="row">
        {botItems}
      </div>
    </div>
  );
}

export default BotCollection;
