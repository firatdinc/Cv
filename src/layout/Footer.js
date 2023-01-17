const Footer = () => {
  return (
    <footer className="footer">
      <div className="copy">
        <p>
          E: <a href="mailto:info@seniorjs.dev">info@seniorjs.dev</a>
        </p>
        <p>
          T:{" "}
          <a
            style={{ textDecoration: "auto !important;" }}
            href="tel: +905346376677"
          >
            +90 534 637 66 77
          </a>
        </p>
      </div>
      <div className="soc-box">
        <div className="follow-label">Sosyal Ağlar</div>
        <div className="soc">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/firat-dinc-72153888/"
          >
            <span className="icon fab fa-linkedin" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/firatdiinc/"
          >
            <span className="icon fab fa-instagram" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://wa.me/+905346376677?text=Sizlere+siteniz+araciligiyla+ulasiyorum"
          >
            <span className="icon fab fa-whatsapp" />
          </a>
        </div>
      </div>
      <div className="clear" />
    </footer>
  );
};
export default Footer;
