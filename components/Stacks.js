import stacksStyles from '../styles/stacksStyle.module.css';

function Stacks() {
   return (
      <div className={stacksStyles.stacksBackground}>
         <h1><span className={stacksStyles.stacksTitle}>Stacks</span></h1>
         <span className={stacksStyles.stacksContent}>
            I'm a fullStack developer working mostly of my time with Ruby on Rails since the Bootcamp {'<Le Wagon />'}, but also I've working with all these stacks {'=>'}</span>
         <div><span className={stacksStyles.stacksContentFramework}>Frameworks: <mark>Rails | Symfony | React.js | Next.js</mark></span></div>
         <div><span className={stacksStyles.stacksContentFrontEnd}>Frontend: <mark>HTML5 | CSS3 | JavaScript | jQuery</mark></span></div>
         <div><span className={stacksStyles.stacksContentBackEnd}>Backend:<mark>Ruby | Php | Node.js</mark></span></div>
         <div><span className={stacksStyles.stacksContentDataBase}>Database: <mark>PostgreSQL | Php.myAdmmin</mark></span></div>
         <div><span className={stacksStyles.stacksContentDesign}>Design: <mark>Figma and some Adobe Stuffs</mark></span></div>




      </div>
   )

}

export default Stacks
