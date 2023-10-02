import React, { useState, useCallback } from "react";

const EmailButtonCustom = ({ children }) => {
  const [email, setEmail] = useState("eloy.gomes@icloud.com");
  const [subject, setSubject] = useState("Dúvidas sobre UI/UX  - Orçamento");
  const [body, setBody] = useState(
    "Olá,\n\nGostaria de mais informações sobre Desenvolvimento UI/UX.\n\n[Escreva aqui a sua mensagem]\n\nAtt,\n[Insira aqui o seu nome]"
  );

  const handleEmailClick = useCallback(() => {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink);
  }, [email, subject, body]);

  return (
    <div onClick={handleEmailClick} style={{ cursor: "pointer" }}>
      {/* <button>buttão</button> */}
      {children}
    </div>
  );
};

export default EmailButtonCustom;
