import { useState, useCallback } from "react";

// eslint-disable-next-line react/prop-types
const EmailButtonPodcast = ({ children }) => {
  const [email] = useState("eloy.gomes@icloud.com");
  const [subject] = useState(
    "Dúvidas sobre captação ou edição de podcasts  - Orçamento"
  );
  const [body] = useState(
    "Olá,\n\nGostaria de mais informações sobre captação ou edição de podcasts.\n\n[Escreva aqui a sua mensagem]\n\nAtt,\n[Insira aqui o seu nome]"
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

export default EmailButtonPodcast;
