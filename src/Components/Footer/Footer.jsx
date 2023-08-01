import style from "./footer.module.css";

export default function Footer() {
  return (
    <div className={style.footerContainer}>
      <h4 className={style.logo}>CellXpress</h4>
      <div>
        <p>© 2023 CellXpress, Inc.</p>
      </div>
      <div className={style.icons}>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={style.icon}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/733/733547.png"
            alt="Facebook"
            width="30px"
            height="30px"
          />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={style.icon}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/174/174855.png"
            alt="Instagram"
            width="30px"
            height="30px"
          />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={style.icon}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/2504/2504947.png"
            alt="Twitter"
            width="30px"
            height="30px"
          />
        </a>
      </div>
    </div>
  );
}
