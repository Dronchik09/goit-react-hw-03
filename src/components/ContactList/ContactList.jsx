import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"

export default function PhoneList({phoneBook, onDelete}) {
    return(
        <ul className={css.list}>
            {phoneBook.map((data) =>(
               <li className={css.contact} key={data.id}> 
               <Contact data={data} onDelete={onDelete} />
               </li>
            ))}
        </ul>
    )



}