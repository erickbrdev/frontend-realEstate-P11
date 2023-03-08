import React, { useState } from "react";
import "../css/Form.css";
import "../css/FormBtn.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChangeName = ({ target }) => {
    const value = target.value;
    setName(value);
  };

  const handleChangeEmail = ({ target }) => {
    const value = target.value;
    setEmail(value);
  };

  // const handleChangeTel = (event) => {
  //   setPhone(event.target.value.replace(/\D/g, ""));
  // }

  const handleChangeMessage = ({ target }) => {
    setMessage(target.value);
  };

  return (
    <div className="flex">
      <div className="mt-20 flex flex-col justify-center items-center w-full">
        <form className="flex flex-col items-center justify-center w-full gap-10">
          <div className="flex flex-col">
            <label htmlFor="name">Nome</label>
            <input
              required
              type="text"
              id="name"
              placeholder="Nome"
              name="name"
              onChange={handleChangeName}
              value={name}
              className="formInput"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">E-mail</label>
            <input
              required
              type="Email"
              placeholder="E-mail"
              id="email"
              name="email"
              onChange={handleChangeEmail}
              value={email}
              className="formInput"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="text" className="text-center"></label>
            <textarea
              rows="4"
              cols="50"
              placeholder="Digite sua mensagem!"
              id="text"
              onChange={handleChangeMessage}
              className=" border-2 p-2 rounded-xl border-yellow-500 textarea-mobile"
              value={message}
            ></textarea>
          </div>
          <button className="buttonForm">Enviar</button>
        </form>
      </div>
    </div>
  );
}
