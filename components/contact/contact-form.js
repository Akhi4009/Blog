import classes from "./contact-form.module.css"
import {useState} from "react"
import toast from "react-hot-toast";
import {useRouter} from "next/router"

function ContactForm(){

    const [email,setEmail] = useState('')
    const [name,setName] = useState('')
    const [message,setMessage] = useState('')
    const router = useRouter()

    function sendMessageHandler(event){
        event.preventDefault()

        fetch(`/api/contact`,{
            method:"POST",
            body:JSON.stringify({
               email,
               name,
               message 
            }),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(res=>res.json())
        .then(res=>{
            toast.success("Message recieved successfully. I will contact you soon.")
            router.push("/")
        });
    }
    
    return (
        <section className={classes.contact}>
        <h1>How can I help you?</h1>
        <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
        <div className={classes.control}>
        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" value={email} required onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" value={name} required onChange={(e)=>setName(e.target.value)}/>
        </div>
        </div>
        <div className={classes.control}>
        <label htmlFor="message">Your Message</label>
        <textarea id="message" rows='5' value={message} required onChange={(e)=>setMessage(e.target.value)}></textarea>
        </div>
        <div className={classes.action}>
        <button>Send Message</button>
        </div>
        </form>
        </section>
        )
}

export default ContactForm;