/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import style from "./Card.module.css";
import { Link } from "react-router-dom";
const Card_Phone = (props) => {
 
  return (
    <>
      <div className={style.card}>
        <div className={style.card_img}>
          <img className={style.image} src={props.image} />
        </div>
        <div className={style.card_info}>
          {/* <p className={style.text_title}>{props.rating[0].rate}</p> */}
          <p className={style.text_title}>{props.brand.toUpperCase()}</p>

          <p className={style.text_body}>{props.title}</p>

          <div className={style.btn}>
            <Link className={style.link} to={`/detailCard/${props.id}`}>
              <button className={style.btn}>Ver más</button>
            </Link>
          </div>
        </div>
        <div className={style.card_footer}>
          <span className={style.text_title}>${props.price}</span>
          <div className={style.card_button}>
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 3H4.37144C5.31982 3 6.13781 3.66607 6.32996 4.59479L8.67004 15.9052C8.86219 16.8339 9.68018 17.5 10.6286 17.5H17.5"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.82422 7H19.6743C20.3386 7 20.8183 7.6359 20.6358 8.27472L19.6217 11.8242C19.2537 13.1121 18.0765 14 16.7371 14H8.27734"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle
                cx="16.5"
                cy="20.5"
                r="0.5"
                fill="#000000"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle
                cx="0.5"
                cy="0.5"
                r="0.5"
                transform="matrix(1 0 0 -1 10 21)"
                fill="#000000"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
    // <div className={style.card}>
    //     <h4>{props.brand}</h4>
    //     <div className={style.card_img}>
    //     <img className={style.image} src={props.image} />
    //     </div>
    //     <div className={style.card_info}>
    //     <p className={style.text_title}>{props.title}</p>
    //     <Link className={style.link} to={`/detailCard/${props.id}`}>
    //     <button className={style.btn}>Ver más</button>
    //     </Link>
    //     </div>
    //     <div className={style.card_footer}>
    //     <span className={style.text_title}>${props.price}</span>
    //     </div>
    //     <div className={style.card_button}>
    //     <button className={style.btn}>
    //     <svg className={style.svg_icon} viewBox="0 0 20 20">
    //     <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
    //   <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
    //   <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
    // </svg>
    // </button>
    //   </div>
    //     </div>
  );
};
export default Card_Phone;
