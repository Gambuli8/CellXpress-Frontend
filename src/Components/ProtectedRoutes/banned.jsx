import style from './banned.module.css'

export default function banned() {
  return (
    <div className={style.logo}>
        <img className={style.logoimg} src="https://res.cloudinary.com/djqwbu0my/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1691088616/OIP_mzc6jr.jpg" alt="" />
        <div className={style.container}>
        <h1 className={style.title}>
        estas baneado!
        </h1>
        <p className={style.parrafo}>Esta cuenta a sido <span className={style.pa}>suspendida</span>.Por favor contacta al soporte <span className={style.info}>infocxps@gmail.com</span> para mas informacion al respecto <a className={style.email} href='https://accounts.google.com/v3/signin/identifier?authuser=3&continue=https%3A%2F%2Fmail.google.com&ec=GAlAFw&hl=es-419&service=mail&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-401948523%3A1692804373143985' target="_blank" rel='noreferrer'>Email</a>. Puede que hayas incumplido alguna politica de seguridad de CellXpres.</p>
        <picture>
        <img className={style.img} src="https://cdn.discordapp.com/attachments/1122884656505819151/1143924785747861574/image.png" alt="image ban" />
        </picture>
        </div>
     </div>
  )
}
