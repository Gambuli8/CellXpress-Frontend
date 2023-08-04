import style from './Landing.module.css'

export default function Landing() {

  return (
    <div className={style.container}>
      <div className={style.contentInfo}>
      <h1 className={style.titulo}>Bienvenido a CellXpress</h1>
      <a className={style.btn} href="/home">Iniciar</a>
      </div>
    </div>
  )
}
