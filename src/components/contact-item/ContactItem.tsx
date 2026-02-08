import styles from "./contactItem.module.css";

interface ContactItemProps {
  item: { id: number; name: string; email: string; job: string; phone: string };
  onDeleteItemClick: (id: number) => void;
  onCheckboxSelected: (id: number, isChecked: boolean) => void;
}

const ContactItem = ({
  item,
  onDeleteItemClick,
  onCheckboxSelected,
}: ContactItemProps) => {
  const { email, job, name, phone, id } = item;

  /** Renderer */
  return (
    <div className={styles.contactItemContainer}>
      <li>
        <input
          name="select"
          type="checkbox"
          onChange={(event) => onCheckboxSelected(id, event.target.checked)}
        />
        <span>{name}</span>
        <span>{job}</span>
        <span>{email}</span>
        <span>{phone}</span>
        <button onClick={() => onDeleteItemClick(id)}>Delete</button>
        <button>Edit</button>
      </li>
    </div>
  );
};

export default ContactItem;
