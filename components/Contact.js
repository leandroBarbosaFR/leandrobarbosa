import contactStyles from "../styles/contactStyles.module.css";

function Contact() {
   return (
      <div className={contactStyles.contactBackground}>
         <a href=" www.linkedin.com/in/helloleandro"><span className={contactStyles.contactLinkedin}>Linkedin</span></a>
         <p><span className={contactStyles.contactGithub}>Github</span></p>
         <p><span className={contactStyles.contactInstagram}>Instagram</span></p>
         <p><span className={contactStyles.contactMail}>Email</span></p>
         <p><span className={contactStyles.contactMalt}>Malt</span></p>
      </div>
   )

}

export default Contact
