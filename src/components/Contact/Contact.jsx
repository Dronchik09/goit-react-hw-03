import { MdDelete, MdPerson, MdPhone } from "react-icons/md";

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <>
      <div>
        <p>
          <MdPerson />
          {name}
        </p>
        <p>
          <MdPhone /> {number}
        </p>
      </div>
      <button onClick={() => onDelete(id)}>
        <MdDelete /> Delete
      </button>
    </>
  );
}