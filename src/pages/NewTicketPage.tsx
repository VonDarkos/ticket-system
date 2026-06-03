import React, { useState,useEffect,useRef } from "react";
import { useTicketsContext } from "../features/tickets/context/TicketContext";
import type { TicketPriority } from "../features/tickets/types/ticket";
import "./NewTicketPage.css";


export default function NewTicketPage() {

const {createTicket} = useTicketsContext()
const[title,setTitle]=useState("")
const[description,setDescription]=useState("")
const[priority,setPriority]=useState<TicketPriority>("medium")
const[link,setLink]=useState("")
const[image,setImage]=useState("")
const[imageError,setImageError]=useState("")
const maxSize = 2 * 1024 * 1024;
const[successMessage,setSuccessMessage]=useState("")
const fileInputRef = useRef<HTMLInputElement | null>(null);

 useEffect(() => {
    if (!successMessage) return;

    const timer = setTimeout(() => {
      setSuccessMessage("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [successMessage]);

const readTitle = (e:React.ChangeEvent<HTMLInputElement>)=>{setTitle(e.target.value), setSuccessMessage("")}
const readDescription = (e:React.ChangeEvent<HTMLTextAreaElement>)=>{setDescription(e.target.value)}
const readPriority = (e:React.ChangeEvent<HTMLSelectElement>)=>{setPriority(e.target.value as TicketPriority)}
const readImage = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const file = e.target.files?.[0]
    if(!file)return

    if(file.size > maxSize){
        setImageError("File superiore a 2Mb")
        return
    }
    else{
        setImageError("")
    }

    const reader = new FileReader()
    reader.onloadend=()=>{
        setImage(reader.result as string)
    }

    reader.readAsDataURL(file)
} 

const readLink = (e:React.ChangeEvent<HTMLInputElement>)=>{setLink(e.target.value)}

const submitTicket = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(title.trim()==="" || description.trim()==="")return
   createTicket({title: title.trim(), description: description.trim(), priority, link: link.trim(), image,});
   setSuccessMessage("Ticket creato con Successo");
   
   setTitle("")
    setDescription("")
    setPriority("medium")
    setLink("")
    setImage("")
    if (fileInputRef.current) {
  fileInputRef.current.value = "";
}
}

   




return (
  <section className="new-ticket-page">
    <header className="new-ticket-page__header">
      <h1>Crea un nuovo Ticket</h1>
      <p>Compila il form per aprire una nuova richiesta di supporto.</p>
    </header>

    {successMessage && (
      <p className="new-ticket-page__success">{successMessage}</p>
    )}

    <form className="new-ticket-form" onSubmit={submitTicket}>
      <div className="form-group">
        <label htmlFor="title">Titolo</label>
        <input type="text" id="title" value={title} onChange={readTitle} />
      </div>

      <div className="form-group">
        <label htmlFor="description">Inserisci la richiesta</label>
        <textarea
          id="description"
          value={description}
          onChange={readDescription}
        />
      </div>

      <div className="form-group">
        <label htmlFor="priority">Priorità</label>
        <select id="priority" value={priority} onChange={readPriority}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="link">Link allegato</label>
        <input
          type="text"
          id="link"
          placeholder="Incolla qui il link"
          value={link}
          onChange={readLink}
        />
      </div>

      <div className="form-group">
        <label htmlFor="image">Immagine allegata</label>
        <input
        ref={fileInputRef}
        id="image"
        type="file"
        accept="image/*"
        onChange={readImage}
        />
      </div>

      {imageError && <p className="new-ticket-page__error">{imageError}</p>}

      <button className="new-ticket-form__submit" type="submit">Invia</button>
    </form>
  </section>
);
}
