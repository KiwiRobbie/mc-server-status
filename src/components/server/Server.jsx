import { React, useState, useEffect} from "react";
import "./server.css"


const Server = (props) => {
    console.log(props.server.name)
    let [status, setStatus] = useState(null);
    let [favicon, setFavicon] = useState(null);
    useEffect(
      ()=>{
        fetch("https://mcapi.us/server/status?ip="+props.server.address).then(
          (response) => {
            response.json().then(setStatus)
        });
    }, [props.server.address]);

    if (status === null){
        return (<div className="server__placeholder"/>)
    }
    
    if(status.motd_json.hasOwnProperty('text')) {
        status.motd_json = status.motd_json.text
    }


    [
        "\u00A70",
        "\u00A71",
        "\u00A72",
        "\u00A73",
        "\u00A74",
        "\u00A75",
        "\u00A76",
        "\u00A77",
        "\u00A78",
        "\u00A79",
        "\u00A7a",
        "\u00A7b",
        "\u00A7c",
        "\u00A7d",
        "\u00A7e",
        "\u00A7f",
        "\u00A7l",
        "\u00A7o",
        "\u00A7n",
        "\u00A7m",
        "\u00A7k",
        "\u00A7"
    ].map((val) => {
        status.motd_json=status.motd_json.replaceAll(val, '')
    })
    
    console.log(status.motd_json)


    if(status.online){
        return <div className="server">
            <div className="server__icon">
                <img src={status.favicon}/>
            </div>
            <div className="server__name">
                {props.server.name}
            </div>
            <div className="server__address">
                {props.server.address}
            </div>
            <div className="server__motd">
                {status.motd_json}
            </div>
            <div className="server__players">
                {status.players.now}/{status.players.max}
            </div>
            <div className="server__version">
                {status.server.name}
            </div>
        </div>
    } else {
        return <div className="server">
            <div className="server__icon">
            </div>
            <div className="server__name">
                {props.server.name}
            </div>
            <div className="server__address_offline">
                {props.server.address}
            </div>
            <div className="server__offline">
                Offline
            </div>
            <div className="server__players">
                {status.players.now}/{status.players.max}
            </div>
            <div className="server__version">
            </div>
        </div>
    }
}

export default Server;
