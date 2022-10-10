import '../styles/global.css';
import Navbar from "/components/Navbar.js";
import Bio from "/components/Bio.js";
import Stacks from "/components/Stacks.js";
import Contact from '../components/Contact';

export default function App({ Component, pageProps }) {
   return <>
   <Navbar />
   <Component {...pageProps} />
   <Bio />
   <Stacks />
   <Contact />;
   </>
 }
