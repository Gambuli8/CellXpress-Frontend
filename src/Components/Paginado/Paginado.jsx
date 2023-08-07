import style from "./paginado.module.css";

const Paginado = ({ cantPerPage, allProducts, Paginado }) => {
  const pageDisp = [];

  for (let i = 1; i <= Math.ceil(allProducts / cantPerPage); i++) {
    pageDisp.push(i);
  }
  return (
    <div className={style.containerPaginado}>
      {pageDisp &&
        pageDisp.map((number) => (
          <div className={style.paginado} key={number}>
            <button
              onClick={() => Paginado(number)}
              className={style.buttonPag}
            >
              {number}
            </button>
          </div>
        ))}
    </div>
  );
};
export default Paginado;
