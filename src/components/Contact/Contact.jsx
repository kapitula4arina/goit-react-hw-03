import css from "./Contact.module.css";
import { BiUser } from "react-icons/bi";
import { AiOutlinePhone } from "react-icons/ai";

const Contact = ({ data: { name, number, id }, onDelete }) => {
  return (
    <>
      <div className={css.contactGroup}>
        <div className={css.contactItem}>
          <BiUser className={css.icon} size="20" />
          <p className={css.contactDescription}>{name}</p>
        </div>
        <div className={css.contactItem}>
          <AiOutlinePhone className={css.icon} size="20" />
          <p className={css.contactDescription}>{number}</p>
        </div>
      </div>
      <button
        className={css.deleteButton}
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
