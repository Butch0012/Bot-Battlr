import React from 'react';
import BotCard from "../components/BotCard";

// Functional component representing the user's bot army
export default function YourBotArmy(props) {
  // Map over the bots in the army to display individual BotCard components
  const displayBots = props.bots.map(bot => {
    return <BotCard bot={bot} action={props.action} removeCard={props.removeCard} />;
  });

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/* Display the BotCards for the bot army */}
          {displayBots}
        </div>
      </div>
    </div>
  );
}

