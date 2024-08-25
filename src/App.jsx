import { useState, useEffect } from "react";
import "./App.css";
import phoneBookData from "./PhoneBook.json";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";

export default function App() {
  const [phoneBook, setPhone] = useState(() => {
    const savedValues = window.localStorage.getItem("phoneBook");
    if (savedValues !== null) {
      return JSON.parse(savedValues);
    }
    return phoneBookData;
  });
  useEffect(() => {
    window.localStorage.setItem("phoneBook", JSON.stringify(phoneBook));
  }, [phoneBook]);

  const addPhone = (newPhone) => {
    setPhone((prevPhone) => {
      return [...prevPhone, newPhone];
    });
  };
  const deletePhone = (phoneId) =>{
    setPhone((prevPhone) => {
      return prevPhone.filter((phone) => phoneId !== phone.id)
    });
  }
  const [filterBook, setFilterBook] = useState("");
  const visiblePhone = phoneBook.filter((phone) =>
    phone.name.toLowerCase().includes(filterBook.toLowerCase())
  );
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addPhone} />
      <SearchBox value={filterBook} onFilter={setFilterBook} />
      <ContactList phoneBook={visiblePhone} onDelete={deletePhone} />
    </>
  );

}