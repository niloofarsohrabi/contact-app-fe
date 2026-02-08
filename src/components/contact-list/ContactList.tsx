import { useEffect, useState } from "react";
import { fakeData } from "../../constants/fakeData";
import ContactItem from "../contact-item/ContactItem";

import styles from "./contactList.module.css";

const ContactList = () => {
  /** States */
  const [originalContacts, setOriginalContacts] = useState<
    {
      id: number;
      name: string;
      email: string;
      job: string;
      phone: string;
      isSelected: boolean;
    }[]
  >([]);
  const [contacts, setContacts] = useState<
    {
      id: number;
      name: string;
      email: string;
      job: string;
      phone: string;
      isSelected: boolean;
    }[]
  >([]);
  const [searchText, setSearchText] = useState<string>("");

  /** Functions */
  const onSearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchText(value);

    if (!value) {
      setContacts(originalContacts);
      return;
    }

    const searchResult = originalContacts.filter(
      (item) =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.email.toLowerCase().includes(value.toLowerCase())
    );

    setContacts(searchResult);
  };
  //
  const onDeleteItemClick = (id: number) => {
    setContacts((prevState) => prevState.filter((item) => item.id !== id));
  };
  //
  const onDeletedGroupedClicked = (id: number, isChecked: boolean) => {
    setContacts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isSelected: isChecked } : item
      )
    );
  };
  //
  const onGroupedDelete = () => {
    setContacts((prev) => prev.filter((item) => item.isSelected !== true));
  };

  /** Effects */
  useEffect(() => {
    setOriginalContacts(fakeData);
    setContacts(fakeData);
  }, []);

  /** Renderer */
  return (
    <div className={styles.container}>
      <input
        className={styles.searchbox}
        name="search"
        type="text"
        autoComplete="off"
        value={searchText}
        onChange={(event) => onSearchHandler(event)}
      />
      <button>Add</button>
      <button onClick={() => onGroupedDelete()}>Delete</button>
      <div className={styles.contactsContainer}>
        {contacts.map((item) => {
          return (
            <ContactItem
              key={item.id}
              item={item}
              onDeleteItemClick={onDeleteItemClick}
              onCheckboxSelected={onDeletedGroupedClicked}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ContactList;
