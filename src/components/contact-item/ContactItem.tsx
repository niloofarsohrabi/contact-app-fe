import styles from "./contactItem.module.css";

interface ContactItemProps {
  item: { id: number; name: string; email: string; job: string; phone: string };
}

const ContactItem = ({ item }: ContactItemProps) => {
  const { email, job, name, phone } = item;

  /** Renderer */
  return (
    <div className={styles.contactItemContainer}>
      <li>
        <input name="select" type="checkbox" />
        <span>{name}</span>
        <span>{job}</span>
        <span>{email}</span>
        <span>{phone}</span>
        <button>Delete</button>
        <button>Edit</button>
      </li>
    </div>
  );
};

export default ContactItem;
