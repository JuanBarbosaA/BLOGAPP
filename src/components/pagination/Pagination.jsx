"use client"
import { useRouter } from "next/navigation"
import styles from "./pagination.module.css"
export default function Pagination({page, hasPrev, hasNext}){

    const router = useRouter()

    return(
        <div className={styles.container}>
            <button className={styles.button} disabled={!hasPrev} onClick={()=>router.push(`?page=${page-1}`)}>Previous</button>
            <button className={styles.button} disabled={!hasNext} onClick={()=>router.push(`?page=${page+1}`)}>Next</button>
        </div>
    )
}