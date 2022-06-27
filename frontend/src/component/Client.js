import React, {useState} from "react";
import "../css/client.css"

const client = function Client() {
    const [connectButtonValue, setValueConnectButton] = useState(false);
    const [disconnectButtonValue, setValueDisconnectButton] = useState(true);

    return (
        <div className="main">
            <h1>Chat Application</h1>
            <div className="panel">
                <div className="connection-panel">
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
                <div className="input-panel">
                    <input placeholder="Type something"/>
                    <button id="submit" className="btn btn-default" type="text"
                            disabled={disconnectButtonValue}>Submit
                    </button>
                </div>
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

export default client;