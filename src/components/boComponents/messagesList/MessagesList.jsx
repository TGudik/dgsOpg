import { useLoaderData } from "react-router-dom";
import styles from "./messagesList.module.css"

export default function MessagesList() {

    const messages = useLoaderData()

    console.log(messages)

    function formatTime(string) {

        const date = new Date(string)
        const formatted = date.toLocaleString("da-DK", {
            day: "2-digit",
            month: "short",
            hour:"2-digit",
            minute: "2-digit"
        })

        return formatted

    } 

    return (
        <div className={styles.wrapper}>
            {messages.map((mes) => {
                return (
                    <div className={styles.mesWrapper}>
                        <div>
                            <p>Sendt:</p>
                            <p>{formatTime(mes.created)}</p>
                        </div>
                        <div>
                            <p>Afsender:</p>
                            <p>{mes.name}</p>
                        </div>
                        <div>
                            <p>Emne:</p>
                            <p>{mes.subject}</p>
                        </div>
                        <div>
                            <p>Beskrivelse:</p>
                            <p>{mes.description}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )

}