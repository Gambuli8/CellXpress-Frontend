import style from "./aboutUs.module.css";

export default function AboutUs() {
 
  return (
    <div className={style.aboutUsContainer}>
      <a href="/home">
        <button className={style.btn_back}>Atras</button>
      </a>
      <h1 className={style.tituloAbout}>Sobre nosotros</h1>
      <section className={style.quienesSomos}>
        <div className={style.bloqueUno}>
          <h3 className={style.subTitulo}>¿Quienes somos?</h3>
          <p className={style.parrafo}>
            ¡Bienvenido/a a CellXpress, tu destino confiable para explorar la
            más amplia selección de celulares de primera calidad! En CellXpress,
            nuestro objetivo es hacer que la búsqueda y compra de tu próximo
            celular sea emocionante, sin complicaciones y con la garantía de que
            encontrarás la tecnología móvil perfecta para tu estilo de vida.
          </p>
        </div>
        <img
          src="https://images.pexels.com/photos/17435903/pexels-photo-17435903/free-photo-of-ordenador-portatil-tecnologia-dispositivos-caso.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className={style.imagenAbout}
        />
      </section>
      <section className={style.quienesSomos}>
        <img
          src="https://images.pexels.com/photos/13619263/pexels-photo-13619263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className={style.imagenAbout}
        />
        <div className={style.bloqueUno}>
          <h3 className={style.subTitulo}>Nuestra misión</h3>
          <p className={style.parrafo}>
            Nuestra misión en CellXpress es ofrecer a nuestros clientes una
            experiencia de compra excepcional y satisfactoria al proporcionarles
            una amplia selección de celulares de alta calidad . Nos
            comprometemos a ser una plataforma confiable, donde los clientes
            puedan encontrar los dispositivos móviles que se ajusten
            perfectamente a sus necesidades y estilos de vida. Buscamos ser
            líderes en el mercado de e-commerce de celulares, brindando un
            servicio al cliente excepcional y asesoramiento experto para ayudar
            a nuestros clientes a tomar decisiones informadas.
          </p>
        </div>
      </section>
      <section className={style.bloqueDos}>
        <h3 className={style.subTitulo}>¿Por qué elegirnos?</h3>
        <p className={style.parrafoDos}>
          En CellXpress, te ofrecemos una amplia selección de celulares y
          accesorios de calidad premium. Nuestra dedicación al servicio al
          cliente garantiza una experiencia de compra excepcional y un
          asesoramiento personalizado. Compra en línea de manera segura y
          descubre cómo un celular puede transformar tu vida. ¡Únete a nuestra
          comunidad tecnológica y elige CellXpress para estar a la vanguardia en
          tecnología móvil!
        </p>
      </section>

      <h2 className={style.tituloAbout}>Creadores</h2>

      <section className={style.sectionCreadores}>
        <div className={style.caracteristicas}>
          <img
            src="https://media.licdn.com/dms/image/C4E03AQFlQK-E084KCw/profile-displayphoto-shrink_400_400/0/1663274211350?e=1698278400&v=beta&t=jGQNl3bOW0UcZ16Bpmvq01e6bS0i95FDVMPfDOvBj8c"
            alt=""
            width="70px"
            height="70px"
            className={style.imgLinkedln}
          />
          <p>Gabriel Beltran</p>

          <a  target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/gabriel-gerardo-beltran-medina-486529247/">
            <img
              src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
              alt=""
              width="40px"
              height="40px"
            />
          </a>
        </div>
        <div className={style.caracteristicas}>
          <img
            src="https://media.licdn.com/dms/image/D4D35AQF441uqurfJrQ/profile-framedphoto-shrink_400_400/0/1682182165223?e=1693436400&v=beta&t=IYEDD-e9t_8CM-x-XIbNZiKa_eC1t4-ahL1XcLZNbnc"
            alt=""
            width="70px"
            height="70px"
            className={style.imgLinkedln}
          />
          <p>Federico Cativiela</p>

          <a  target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/federico-cativiela/">
            <img
              src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
              alt=""
              width="40px"
              height="40px"
            />
          </a>
        </div>
        <div className={style.caracteristicas}>
          <img
            src="https://media.licdn.com/dms/image/D4D35AQHgBsoJfjWf-A/profile-framedphoto-shrink_400_400/0/1692504892956?e=1693436400&v=beta&t=rAL7yqr_mJyE-y_yVufCQta3cDrDIK6Tl7KMp6o0_8E"
            alt=""
            width="70px"
            height="70px"
            className={style.imgLinkedln}
          />
          <p>Juan Ruarte</p>

          <a  target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/juan-cruz-ruarte-aa302a255/">
            <img
              src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
              alt=""
              width="40px"
              height="40px"
            />
          </a>
        </div>
        <div className={style.caracteristicas}>
          <img
            src="https://media.licdn.com/dms/image/D4D35AQE1wnNwF3L3Sw/profile-framedphoto-shrink_200_200/0/1680188401553?e=1693436400&v=beta&t=5MvnwAEhHzfAwak2jNOW2HaxGk_WN4IdKh8-sfWHC4A"
            alt=""
            width="70px"
            height="70px"
            className={style.imgLinkedln}
          />
          <p>Geronimo Gambuli</p>

          <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/geronimo-gambuli-613a53204">
            <img
              src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
              alt=""
              width="40px"
              height="40px"
            />
          </a>
        </div>
        <div className={style.caracteristicas}>
          <img
            src="https://media.licdn.com/dms/image/D4D03AQEVoVxUrOGezQ/profile-displayphoto-shrink_400_400/0/1667331643429?e=1698278400&v=beta&t=kItTl6Ys0FZ5i-eGq367Hm96Qy4QsHhdkN873DP6T70"
            alt=""
            width="70px"
            height="70px"
            className={style.imgLinkedln}
          />
          <p>Angel Silva</p>

          <a  target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/angel-silva-dev/">
            <img
              src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
              alt=""
              width="40px"
              height="40px"
            />
          </a>
        </div>
        <div className={style.caracteristicas}>
          <img
            src="https://media.licdn.com/dms/image/D4D35AQEIkOcs6-hSxA/profile-framedphoto-shrink_200_200/0/1686658421865?e=1693436400&v=beta&t=Fq7u6QI8NjkEeqsjg2AXKMKGvztX-W-7vfEugBsEOCg"
            alt=""
            width="70px"
            height="70px"
            className={style.imgLinkedln}
          />
          <p>Matias Rueda</p>

          <a  target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/matias-sebastian-rueda/">
            <img
              src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
              alt=""
              width="40px"
              height="40px"
            />
          </a>
        </div>
      </section>
    </div>
  );
  //
}
