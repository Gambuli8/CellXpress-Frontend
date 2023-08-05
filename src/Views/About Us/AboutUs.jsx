import style from "./aboutUs.module.css";

export default function AboutUs() {
  return (
    <div>
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
            src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
            alt=""
            width="50px"
            height="50px"
          />
          <p>Gabriel Beltran</p>

          <a href="">
            <img
              src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
              alt=""
              width="20px"
              height="20px"
            />
          </a>
        </div>
        <div className={style.caracteristicas}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
            alt=""
            width="50px"
            height="50px"
          />
          <p>Federico Cativiela</p>

          <a href="">
            <img
              src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
              alt=""
              width="20px"
              height="20px"
            />
          </a>
        </div>
        <div className={style.caracteristicas}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
            alt=""
            width="50px"
            height="50px"
          />
          <p>Juan Ruarte</p>

          <a href="">
            <img
              src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
              alt=""
              width="20px"
              height="20px"
            />
          </a>
        </div>
        <div className={style.caracteristicas}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
            alt=""
            width="50px"
            height="50px"
          />
          <p>Geronimo Gambuli</p>

          <a href="">
            <img
              src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
              alt=""
              width="20px"
              height="20px"
            />
          </a>
        </div>
        <div className={style.caracteristicas}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
            alt=""
            width="50px"
            height="50px"
          />
          <p>Angel Silva</p>

          <a href="">
            <img
              src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
              alt=""
              width="20px"
              height="20px"
            />
          </a>
        </div>
        <div className={style.caracteristicas}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
            alt=""
            width="50px"
            height="50px"
          />
          <p>Matias Rueda</p>

          <a href="">
            <img
              src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
              alt=""
              width="20px"
              height="20px"
            />
          </a>
        </div>
      </section>
    </div>
  );
}
