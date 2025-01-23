"use client"
import Image from "next/image"
import styles from "./writePage.module.css"
import { useState } from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.bubble.css"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"

export default function WritePage(){
    
    const { status } = useSession()
    const router = useRouter()

    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")

    if (status === "loading") {
        return <div className={styles.loading}>Loading...</div>
    }

    useEffect(() => {
        if (status === "authenticated") {
            router.push("/")
        }
    }, [status, router])


    return(
        <div className={styles.container}>
            <input type="text" placeholder="Title" className={styles.input}/>
            <div className={styles.editor}>
                <button className={styles.button} onClick={()=>setOpen(!open)}>
                    <Image src="/plus.png" alt="" width={16} height={16}/>
                </button>

                {open && (
                    <div className={styles.add}>
                        <button className={styles.addButton}>
                            <Image src="/image.png" alt="" width={16} height={16} />
                        </button>
                        <button className={styles.addButton}>
                            <Image src="/external.png" alt="" width={16} height={16}/>
                        </button>
                        <button className={styles.addButton}>
                            <Image src="/video.png" alt="" width={16} height={16}/>
                        </button>
                    </div>
                )}

                <ReactQuill className={styles.textArea} theme="bubble" value={value} onChange={setValue} placeholder="Tell your story..."/>
            </div>
            <button className={styles.publish}>Publish</button>
        </div>
    )
}