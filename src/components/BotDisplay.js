
import React, { useEffect, useState } from "react";
import BotsCollection from "./BotCollection";
import BotArmy from "./YourBotArmy";

// A functional component to display bots and manage their army status
function Display() {
  // State to store the list of bots
  let [bots, setBot] = useState([]);

  // Fetch bots data from the API on component mount
  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((resp) => resp.json())
      .then(data => setBot(data));
  }, []);

  // Function to add a bot to the army
  let addBot = (bot) => {
    // Update the bot list, setting the 'army' status to true for the selected bot
    setBot(bots.map((b) => (b.id === bot.id ? { ...b, army: true } : b)));
  };

  // Function to remove a bot from the army
  let removeBot = (bot) => {
    // Update the bot list, setting the 'army' status to false for the selected bot
    setBot(bots.map((b) => (b.id === bot.id ? { ...b, army: false } : b)));
  };

  // Function to delete a bot permanently
  let deleteBot = (bot) => {
    // Filter out the selected bot from the bot list
    let botRemoved = bots.filter((b) => b.id !== bot.id);
    // Update the bot list without the deleted bot
    setBot(botRemoved);
  };

  // Render the BotArmy and BotsCollection components
  return (
    <div>
      <BotArmy
        bots={bots.filter((b) => b.army)} // Filter bots with 'army' status true
        removeBot={removeBot}
        deleteBot={deleteBot}
      />
      <BotsCollection
        bots={bots} // Pass the entire list of bots to BotsCollection
        addBot={addBot}
        deleteBot={deleteBot}
      />
    </div>
  );
}


export default Display;
