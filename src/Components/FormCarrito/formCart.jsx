import style from './formCart.module.css'
export default function FormCart() {
  return (
    <div className={style.container}>
        <div className={style.form}>
            <div className={style.formHeader}>
                <h1>Formulario de compra</h1>
                <input type="text" placeholder='' />
            </div>
        </div>     
    </div>
  )
}
