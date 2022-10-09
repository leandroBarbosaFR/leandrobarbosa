import utilStyles from '../styles/utils.module.css';

function Navbar() {
   return (
      <nav className={utilStyles.navbar}>
         <ul>
            <li className={utilStyles.active}>Stacks</li>
            <li>Contact</li>
            <li>Project</li>
         </ul>
      </nav>

   )

}

export default Navbar
