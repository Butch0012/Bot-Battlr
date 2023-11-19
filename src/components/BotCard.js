import React from "react";

// A functional component for rendering a card representing a bot
function BotCard({ bot, clickEvent, deleteBot }) {
  return (
    // Bootstrap card component
    <div className="card col-4 mt-5 h-100 shadow p-3 mb-5 bg-body rounded"
         // Set the key and attach a click event handler
         key={bot.id}
         onClick={() => clickEvent(bot)}
    >
      {/* Card body */}
      <div className="card-body">

        {/* Bot Name */}
        <h3 className="date" onClick={() => clickEvent(bot)}>
          Name: {bot.name}
        </h3>

        {/* Health */}
        <h3 className="description">Health: {bot.health}</h3>

        {/* Damage */}
        <h3 className="category">Damage: {bot.damage}</h3>

        {/* Armor */}
        <h3 className="amount">Armor: {bot.armor}</h3>

        {/* Catchphrase */}
        <p>
          <strong>Catchphrase: </strong>
          {bot.catchphrase}
        </p>

        {/* Bot Image */}
        <img src={bot.avatar_url} alt="url" className="img" />

        {/* Delete Button */}
        <button className="btn btn-warning"
          onClick={(event) => {
            // Prevent the click event from propagating to the card
            event.stopPropagation();
            // Invoke the deleteBot function with the bot as an argument
            deleteBot(bot);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}


export default BotCard;
