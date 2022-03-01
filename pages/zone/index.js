import React from "react";
import styles from "../../styles/Home.module.css";
import Cookies from "js-cookie";

export default function Page() {
    const [text, setText] = React.useState("");

    return (
        <div
            style={{
                gap: 64,
                display: "grid",
                justifyContent: "center",
            }}
        >
            <h1 className={styles.title}>MULTI ZONE APP ROUTE</h1>
            <div>
                <input
                    placeholder="Type Cookie Data"
                    onChange={(e) => setText(e.currentTarget.value)}
                />
                <button onClick={() => Cookies.set("_some_cookie", text)}>
                    Set Cookie
                </button>
            </div>
        </div>
    );
}
