import { FC, useState } from "react";
import styles from "./Form.module.scss";

const Form: FC = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, message, number }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log("Message sent successfully");
      setMessage("");
      setName("");
      setNumber("");
    } catch (error) {
      console.error("There was a problem sending the message:", error);
    }
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(event.target.value);
  };
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  return (
    <form className={styles.myForm} action='submit' onSubmit={handleSubmit}>
      <label htmlFor='name'>Ваше ім'я:</label>
      <input
        type='text'
        id={styles.name}
        name='name'
        value={name}
        onChange={handleNameChange}
        required
      />
      <label htmlFor='number'>Номер телефону:</label>
      <input
        type='text'
        id={styles.number}
        name='number'
        value={number}
        onChange={handleNumberChange}
        required
      />
      <label htmlFor='message'>Ваше повідомлення:</label>
      <textarea
        id={styles.message}
        name='message'
        value={message}
        onChange={handleChange}
        required></textarea>
      <button className={styles.submit} type='submit'>
        Отправить
      </button>
    </form>
  );
};

export default Form;
