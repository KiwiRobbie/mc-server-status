import { React } from "react";
import "./server.css"


const Server = (props) => {
    return <div className="server">
        <div className="server__icon">
            <img src={props.status.favicon}/>
        </div>
        <div className="server__name">
            {props.name}
        </div>
        <div className="server__address">
            {props.address}
        </div>
        <div className="server__motd">
            {props.status.motd}
        </div>
        <div className="server__players">
            {props.status.players.now}/{props.status.players.max}
        </div>
        <div className="server__version">
            {props.status.server.name}
        </div>
    </div>
}

export default Server;
