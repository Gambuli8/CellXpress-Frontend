import style from "./searchBar.module.css";

export default function Searchbar({ handleSubmit, handlerChanges }) {
  return (
    <div className={style.containerSearch}>
      <input
        type="search"
        onChange={handlerChanges}
        placeholder="Busca un telefono"
        className={style.Searchbar}
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className={style.searchBtn}
      ></button>
    </div>
  );
}
