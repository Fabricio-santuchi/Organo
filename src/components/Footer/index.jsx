import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="redes">
        <a
          href="https://www.facebook.com/AluraCursosOnline/?locale=pt_BR"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/imagens/fb.png" alt="facebook" />
        </a>
        <a
          href="https://x.com/AluraOnline?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/imagens/tw.png" alt="twiter" />
        </a>
        <a
          href="https://www.instagram.com/aluraonline/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/imagens/ig.png" alt="instagran" />
        </a>
      </div>
      <div className="logo">
        <a href="./app.jsx" target="_self" rel="prev next">
          <img src="/imagens/logo.png" alt="organo" />
        </a>
      </div>
      <div className="author">
        <a
          href="https://www.alura.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Desenvolvido por Alura.</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
