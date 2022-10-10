import bioStyles from '../styles/bioStyles.module.css';

function Bio() {
   return (
      <div>
         <h1><span className={bioStyles.bioTitle}>Bio</span></h1>
         <span className={bioStyles.bioContent}>
            Hey! I'm a web developer, teacher Assistant at Le Wagon and I live in the most beautiful city in the whole world "MARSEILLE".
            when I was 16 I had my first company that was on the IT area doin' some maintenance of networks for coffee shops in Brazil and also reparing computers
            after that I moved to London/Uk and I become Bartender after livin' 4 years in that beautiful city I've moved to Marseille where I'm since 2014, I have 2 little girls Charlie and Ana-Luisa,
            I'm 32 years old and I've been making websites for about 2 years now!
            I use HTML, CSS and JavaScript everyday. Though constantly changing, my focus right now is React.js, Node and Next.js.
         </span>


      </div>
   )

}

export default Bio
