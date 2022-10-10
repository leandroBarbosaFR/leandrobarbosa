import contactStyles from "../styles/contactStyles.module.css";
import Link from 'next/link'

function Contact() {

   return (
      <div className={contactStyles.contactBackground}>
         <Link href="https://www.linkedin.com/in/helloleandro"><a><span className={contactStyles.contactLinkedin}>Linkedin</span></a></Link>
         <Link href="https://github.com/leandroBarbosaFR"><a><span className={contactStyles.contactGithub}>Github</span></a></Link>
         <Link href="https://www.instagram.com/leandrobarbosa_______/?hl=fr"><a><span className={contactStyles.contactInstagram}>Instagram</span></a></Link>
         <Link href="mailto:leandrobarbosa@sfr.fr"><a><span className={contactStyles.contactMail}>Email</span></a></Link>
         <Link href="https://www.malt.fr/profile/leandrobarbosalemos"><a><span className={contactStyles.contactMalt}>Malt</span></a></Link>
      </div>
   )

}

export default Contact
