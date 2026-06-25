import styles from "./welcome.module.css"

export default function Welcome({title, text}) {

    return (
      <div className={styles.welcomeWrapper}>
        <h2>{title}</h2>
        <p>
          {text}
        </p>
      </div>
    );

}