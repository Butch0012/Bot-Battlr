## Bot Battlr React App

Welcome to Bot Battlr, the ultimate platform for building your own Bot Army!

## Project Overview

Bot Battlr is a React application that allows users to browse a list of available bots, view details of each bot, and enlist them into their army. This app also provides features to release bots from the army and permanently discharge them.

## Getting Started

Follow these steps to set up and run the project locally:

1. Clone this repository to your local machine.

    ```bash
    git clone https://github.com/Butch0012/Bot-Battlr.git
    ```

2. Navigate to the project directory.

    ```bash
    cd Bot-Battlr-react-app
    ```

3. Install dependencies.

    ```bash
    npm install
    ```

4. Run the JSON server.

    ```bash
    json-server --watch db.json --port 8001
    ```

5. Start the React app.

    ```bash
    npm start
    ```

6. Open your browser and go to [http://localhost:3000](http://localhost:3000).

## Features

- View profiles of all bots in `BotCollection`.
- Add an individual bot to your army by clicking on it.
- Release a bot from your army by clicking on it.
- Discharge a bot permanently by clicking the red "x" button.

## Endpoints

### GET /bots

Example Response:

```json
[
  {
    "id": 101,
    "name": "wHz-93",
    // ...other bot details
  },
  {
    "id": 102,
    "name": "RyM-66",
    // ...other bot details
  }
]

## Contributing
Feel free to contribute to the development of Bot Battlr by submitting pull requests or reporting issues.

## License
This project is licensed under the MIT License.