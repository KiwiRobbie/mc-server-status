import { React } from "react";
import "./server_list.css"

import { Server } from "../../components";
const ServerList = (props) => {

    let date = new Date(props.updated_date)
    let now = new Date()

    let elapsed = Math.round((now - date) / 60000)



    let minutes = (elapsed) % 60
    elapsed = Math.floor(elapsed / 60)

    let hours = (elapsed) % 24
    elapsed = Math.floor(elapsed / 24)

    let days = elapsed

    if (days > 0) {
        elapsed = days + "d " + hours + "h " + minutes + "m"

    } else if (hours > 0) {
        elapsed = hours + "h " + minutes + "m"
    } else {
        elapsed = minutes + " minute"
        if (minutes != 1) {
            elapsed += "s"
        }
    }

    let updated = "";

    if (date.getDate() === now.getDate()
        && date.getMonth() === now.getMonth()
        && date.getFullYear() === now.getFullYear()
    ) {
        updated = date.toLocaleTimeString()
    } else {
        updated = date.toLocaleDateString()
    }

    let update_txt = (
        "IP's Updated: "
        + updated
        + " ("
        + elapsed
        + " ago)"
    )


    return (
        <div className="server_list__frame">
            <div className="server_list__header">
                <div className="server_list__header__title">
                    The Roblist (For MC servers)
                </div>
                <div className="server_list__header__updated">
                    {update_txt}
                </div>
            </div>

            {
                props.servers.map((server, n) =>
                    <Server server={server} key={n} />
                )
            }
        </div>
    )


}

export default ServerList;
