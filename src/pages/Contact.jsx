import ContactForm from "../components/contactForm/ContactForm";
import Welcome from "../components/welcome/Welcome";

export default function Contact() {

    return (
      <div>
        <Welcome
          title={`Har du spørgsmål eller ønsker du at bestille din favoritpizza?`}
          text={`Udfyld formularen herunder, så vender vi hurtigt tilbage til dig. Vi glæder os til at høre fra dig!`}
        />
        <ContactForm />
      </div>
    );

}