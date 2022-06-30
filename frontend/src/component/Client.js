import React, {useState} from "react";
import "../css/client.css"

const client = function Client() {
    const [connectButtonValue, setValueConnectButton] = useState(false);
    const [disconnectButtonValue, setValueDisconnectButton] = useState(true);
    const [chat, setChat] = useState("");
    const [chatHistory, setChatHistory] = useState([]);

    return (
        <div className="main">
            <h1>Chat Application</h1>
            <div className="panel">
                <div className="panel__connection-panel button">
                    <label>Websocket Connection :</label>
                    <button id="connect" className="btn btn-default" type="text"
                            onClick={() => onSubmitConnect(setValueConnectButton, setValueDisconnectButton)}
                            disabled={connectButtonValue}>Connect
                    </button>
                    <button id="disconnect" className="btn btn-default" type="text"
                            onClick={() => onSubmitDisconnect(setValueConnectButton, setValueDisconnectButton)}
                            disabled={disconnectButtonValue}>Disconnect
                    </button>
                </div>
                <div className="panel__input-panel button">
                    <input placeholder="Type something" onChange={(e) => setChat(e.target.value)}/>
                    <button id="submit" className="btn btn-default" type="text"
                            onClick={() => sendChat(chat, chatHistory, setChatHistory)}
                            disabled={disconnectButtonValue}>Send
                    </button>
                </div>
            </div>
            <div>
                <table className="panel__chat-table">
                    <thead>
                    <tr>
                        <th className="panel__chat-table th">Chat Session</th>
                    </tr>
                    </thead>
                    <tbody>
                    {chatHistory.map(x => (<tr>
                        <td className="panel__chat-table td">{x}</td>
                    </tr>))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const onSubmitConnect = (setValueConnectButton, setValueDisconnectButton) => {
    console.log("Client connected!");
    setValueConnectButton(true);
    setValueDisconnectButton(false);

    //Connect WS
}

const onSubmitDisconnect = (setValueConnectButton, setValueDisconnectButton) => {
    console.log("Client disconnected!");
    setValueConnectButton(false);
    setValueDisconnectButton(true);

    //Disconnect WS 
}

const sendChat = (chat, chatHistory, setChatHistory) => {
    setChatHistory([...chatHistory, chat]);
}

export default client;