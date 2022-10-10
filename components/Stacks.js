import stacksStyles from '../styles/stacksStyle.module.css';

function Stacks() {
   return (
      <div>
         <h1><span className={stacksStyles.stacksTitle}>Stacks</span></h1>
         <span className={stacksStyles.stacksContent}>
            I'm a fullStack developer working mostly of my time with Ruby on Rails since the Bootcamp {'<Le Wagon />'}, but also I've working with all these stacks {'=>'}</span>
         <div><span className={stacksStyles.stacksContentFramework}> as a frameworks: Rails | Synfony | React.js | Next.js</span></div>
         <div><span className={stacksStyles.stacksContentFrontEnd}> as a frontend: HTML5 | CSS3 | JavaScript | jQuery</span></div>
         <div><span className={stacksStyles.stacksContentBackEnd}> as a Backend: Ruby | Php | Node.js</span></div>
         <div><span className={stacksStyles.stacksContentDataBase}> as a Database: PostgreSQL | Php.myAdmmin</span></div>
         <div><span className={stacksStyles.stacksContentDesign}> as a Design: Figma and some Adobe Stuffs</span></div>




      </div>
   )

}

export default Stacks
