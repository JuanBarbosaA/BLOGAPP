import Image from "next/image"
import styles from "./featured.module.css"
export default function Featured(){
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hola</b> soy un titulo
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
                </div>
                <div className={styles.textContainer}>
                    <h2 className={styles.postTitle}>Titulo secundario del blog</h2>
                    <p className={styles.postDesc}>Descripcion del blog</p>
                    <button className={styles.button}>Read more</button>
                </div>
            </div>
        </div>
    )
}