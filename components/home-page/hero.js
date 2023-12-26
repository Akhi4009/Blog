import Image from "next/image";

import classes from "./hero.module.css"

function Hero(){

    return(
        <section className={classes.hero}>
        <div className={classes.image}>
        <Image src="/images/site/aky.jpg" alt="aky" width={200} height={200} />
        </div>
        <h1>Hi, I'm AKY</h1>
        <p>I blog about web development.</p>
        </section>
    )
}

export default Hero;