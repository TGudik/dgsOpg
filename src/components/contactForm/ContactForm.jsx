import styles from "./contactForm.module.css"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useFetchMessages } from "../../hooks/useFetchMessages"
import { useState } from "react"


export default function ContactForm() {
    const [show, setShow] = useState(false)

    /* custom hook til at sende beskeden til server */
    const { sendMessage } = useFetchMessages()

    /* opretter et skema for hvordan form body skal være opsat */
    const schema = yup.object().shape({
        name: yup.string().required("Navn er påkrævet"),
        subject: yup.string().required("Emne er påkrævet"),
        description: yup.string().required("Beskrivelse er påkrævet")
    })

    /* henter relevante funktioner fra yupresolver */
    const {
        register,
        handleSubmit,
        watch,
        reset,
        /* state af om der er fejl og mens form submittes */
        formState: {errors, isSubmitting}
    } = useForm({resolver: yupResolver(schema) })

    /* watch opdatere værdi af name når inputfeltet opdateres */
    const name = watch("name")

    function showSuccess() {
        setShow(true)
        setTimeout(() => {

            setShow(false)
            reset()
        }, 3000);
    }

    async function onSubmit(data) {
        try{
            await sendMessage(data)
            showSuccess()
        } catch (error) {
            console.error("Fejl i afsendelse af besked", error)
        }
    }

    return (
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={`${styles.successScreen} ${show && styles.shown}`}>
          <div className={styles.successOverlay}></div>
          <div className={styles.successMessage}>
            <h3 className={styles.successText}>Tak for din besked {name}!</h3>
            <h3 className={styles.successText}>
              Vi vender tilbage hurtigst muligt!
            </h3>
          </div>
        </div>
        <label>Navn</label>
        <input
          type="text"
          /* tilkobler inputfelt til hvad der er navngivet i schema */
          {...register("name")}
        />
        {errors.name && (
          <span className={styles.error}>{errors.name.message}</span>
        )}

        <label>Emne</label>
        <input type="text" {...register("subject")}/>
        {errors.subject && (
          <span className={styles.error}>{errors.subject.message}</span>
        )}

        <label>Beskrivelse</label>
        <textarea rows={6} {...register("description")}></textarea>
        {errors.description && (
          <span className={styles.error}>{errors.description.message}</span>
        )}

        <button type="submit" className={styles.submitBtn}>
          {isSubmitting ? "Sender..." : "Send"}
        </button>
      </form>
    );

}