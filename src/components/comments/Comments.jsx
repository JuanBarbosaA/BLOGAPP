import Image from "next/image"
import styles from "./comments.module.css"
import Link from "next/link"
export default function Comments(){
    
    const status = "authenticated"

    return(
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {status === "authenticated" ? (
                <div className={styles.write}>
                    <textarea placeholder="write a comment..." className={styles.input}></textarea>
                    <button className={styles.button}>Send</button>
                </div>
            ):(
                <Link href="/login">Login to wirte a comment</Link>
            )}
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image}/>
                        <div className={styles.userInfo}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>01.01.2023</span>
                        </div>
                    </div>
                    <p className={styles.desc}>Description</p>
                </div>
            </div>
        </div>
    )
}