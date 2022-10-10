import utilStyles from '../styles/utils.module.css';
// import Image from 'next/image';


function Navbar() {
   return (
      <nav className={utilStyles.navbar}>
           {/* <Image
              priority
              src="/images/lewagon.png"
              className={utilStyles.wagonTop}
              height={40}
              width={70}
              alt=""
            /> */}
         <ul>
            <li className={utilStyles.active}>Stacks</li>
            <li>Contact</li>
            <li>Project</li>
         </ul>
      </nav>

   )

}

export default Navbar
