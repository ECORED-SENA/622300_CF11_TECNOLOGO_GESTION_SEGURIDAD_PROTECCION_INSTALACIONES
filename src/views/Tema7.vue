<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 7
        h1 Seguridad digital, monitoreo y prestación del servicio
      p.mb-5 La seguridad digital integra medidas tecnológicas y operativas para proteger la información, mantener la continuidad del monitoreo y respaldar la prestación del servicio. Su gestión articula controles que fortalecen la protección de los sistemas, los registros y los procesos críticos de la operación. Estos controles son:
      TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Protección tecnológica")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t7/img1.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Protección tecnológica
              p.mb-0 Los sistemas deben mantenerse actualizados y contar con configuraciones seguras que reduzcan fallas, accesos indebidos y alteraciones.
        .py-3.py-md-4(titulo="Información protegida")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t7/img2.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Información protegida
              p.mb-0 Los datos operativos requieren clasificación, acceso controlado, almacenamiento seguro y procedimientos que garanticen su confidencialidad.
        .py-3.py-md-4(titulo="Continuidad operativa")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t7/img3.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Continuidad operativa
              p.mb-0 La integración de tecnología, procedimientos y personal capacitado permite sostener el monitoreo y responder oportunamente ante incidentes (ASIS International, 2011).
      Separador
      #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 7.1 Seguridad digital, confidencialidad y custodia
      p.mb-5 La seguridad de la información requiere medidas que preserven su confidencialidad, integridad, disponibilidad y trazabilidad durante todo su tratamiento. Su protección comprende prácticas específicas para regular los sistemas tecnológicos, controlar el acceso a la información y conservar los registros. Estas prácticas son:
      .bg-2
        .px-5
          .row.justify-content-center.mb-0
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t7/img4.png', alt="" ).m-auto
                  h4.text-center Seguridad digital
                  .caja-2_p
                    p.mb-0.text-center Comprende actualizaciones, configuraciones seguras, controles contra código malicioso, mecanismos de detección y copias de respaldo. Estas medidas previenen pérdidas, alteraciones e interrupciones (ASIS International, 2011).
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t7/img5.png', alt="" ).m-auto
                  h4.text-center Confidencialidad operativa
                  .caja-2_p
                    p.mb-0.text-center La información sensible debe clasificarse y compartirse únicamente con personal autorizado. Los canales formales y el criterio de necesidad de conocimiento reducen filtraciones y divulgaciones indebidas (ASIS International, 2011).
            .col-xl-4.col-md-9(data-aos="fade-left")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t7/img6.png', alt="" ).m-auto
                  h4.text-center Custodia
                  .caja-2_p
                    p.mb-0.text-center La custodia protege documentos, evidencias y registros mediante almacenamiento seguro, control de accesos, trazabilidad, copias de respaldo y eliminación controlada (ASIS International, 2011; Bermúdez, 2012).
          Separador
          #t_7_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 7.2 Operación del #[i software] de monitoreo
      p.mb-5 El #[i software] de monitoreo centraliza señales, registros y comunicaciones para facilitar la gestión coordinada de los eventos relacionados con la seguridad. A partir de las funciones descritas, la gestión de cada señal puede organizarse en la siguiente secuencia operativa:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Recibir la señal
                    p.mb-0 El sistema recibe información de alarmas, cámaras, sensores, controles de acceso y otros dispositivos conectados.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t7/img7.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t7/img8.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Clasificar el evento
                    p.mb-0 La señal se organiza según su tipo, origen y prioridad para establecer el nivel de atención requerido.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Verificar la situación
                    p.mb-0 El operador consulta registros, información asociada y contactos establecidos para determinar si corresponde a una activación real, falla técnica o falsa alarma.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t7/img9.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t7/img10.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Aplicar la respuesta
                    p.mb-0 La actuación puede incluir comunicación con el usuario, intervención del supervisor, notificación a las autoridades o activación de protocolos.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Registrar el resultado
                    p.mb-0 Las verificaciones, comunicaciones y decisiones deben documentarse para garantizar trazabilidad y continuidad informativa (DEAS, s. f.).
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t7/img11.png', alt='' style="width: 300px").m-auto
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t7/img12.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p La aplicación disciplinada de esta secuencia permite gestionar varias señales, reducir interpretaciones erróneas y mantener la continuidad de la operación.
      p.mb-5 Se invita a consultar el contenido audiovisual para ampliar la comprensión sobre el funcionamiento del software de monitoreo y su aplicación en la gestión operativa.
      figure(data-aos="zoom-in").mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Características: software monitoreo
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Factores humanos asociados a la operación del software de monitoreo
      p.mb-5 Los factores humanos influyen en la capacidad del operador para gestionar señales, mantener la concentración y tomar decisiones oportunas durante el monitoreo. Las condiciones que pueden afectar el desempeño y las medidas aplicables para prevenir errores se organizan en los siguientes aspectos:
      .bg-2
        .px-5
          .row.justify-content-center.mb-0
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t7/img13.png', alt="" ).m-auto
                  h4.text-center Desensibilización operativa
                  .caja-2_p
                    p La exposición continua a señales repetitivas o falsas alarmas puede reducir la capacidad para diferenciar eventos rutinarios de situaciones críticas.
                    p.mb-0 El registro sistemático, la supervisión y la aplicación disciplinada de los procedimientos ayudan a mantener la rigurosidad operativa (ASIS International, 2011).
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t7/img14.png', alt="" ).m-auto
                  h4.text-center Carga de vigilancia
                  .caja-2_p
                    p La atención prolongada y las tareas repetitivas pueden generar fatiga, pérdida de concentración y errores durante la interpretación y gestión de las señales.
                    p.mb-0 Esta condición puede retrasar decisiones importantes ante eventos críticos (ASIS International, 2011).
            .col-xl-4.col-md-9(data-aos="fade-left")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t7/img15.png', alt="" ).m-auto
                  h4.text-center Medidas preventivas
                  .caja-2_p
                    p La rotación de funciones, las pausas activas, el descanso programado y la adecuación ergonómica contribuyen a conservar la concentración y capacidad de respuesta.
                    p.mb-0 La supervisión permanente también permite identificar oportunamente condiciones que puedan afectar el desempeño del operador.
          Separador
          #t_7_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 7.3 Sistema central de alarmas
      .caja-4.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-4_p
            p.mb-0 El sistema central de alarmas integra tecnología, procedimientos y capacidades humanas para gestionar señales y coordinar respuestas ante diferentes eventos de seguridad.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t7/img16.png', alt='' style="width: 500px").m-auto
      p.mb-5 Su funcionamiento depende de componentes interrelacionados que permiten recibir, procesar y gestionar cada señal bajo criterios operativos definidos:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t7/img17.png", alt="" style="width: 280px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Panel de control").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Administra la programación interna, registra claves autorizadas, recibe las señales de los dispositivos y las transmite al centro de monitoreo (Bermúdez, 2012).
            .row(titulo="Sensores periféricos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los detectores de movimiento, contactos magnéticos y sensores de humo, pánico o temperatura identifican condiciones asociadas con intrusiones, emergencias o fallas técnicas (DEAS, s. f.).
            .row(titulo="Usuarios autorizados").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Las claves personales permiten identificar quién ejecutó una apertura, cierre u otra acción. Los contactos autorizados apoyan la verificación de los eventos.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="<i>Software</i> y operadores").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El #[i software] organiza las señales y suministra información para que el operador clasifique, verifique y gestione cada evento conforme a los procedimientos establecidos.
            .row(titulo="Redundancia tecnológica").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Servidores, fuentes de energía, enlaces y receptores alternativos mantienen la comunicación ante fallas eléctricas, técnicas o de conectividad (Bermúdez, 2012).
            .row(titulo="Videovigilancia integrada").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La integración con cámaras permite contrastar las señales con imágenes asociadas, mejorar su interpretación y reducir errores por falta de contexto (ASIS International, 2011).
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t7/img18.png", alt="" style="width: 280px").m-auto
      p.mb-5 La interacción de estos componentes permite desarrollar una secuencia operativa organizada en cuatro etapas:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Recepción de la señal
                    p.mb-0 El sensor detecta el evento y transmite la señal al panel, que la envía al software de monitoreo.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t7/img19.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t7/img20.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Clasificación
                    p.mb-0 El operador determina el tipo de señal, su procedencia y prioridad para establecer el procedimiento aplicable.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Verificación
                    p.mb-0 La situación se confirma mediante contactos autorizados, comunicación telefónica, mecanismos de autenticación, registros o cámaras asociadas.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t7/img21.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t7/img22.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Respuesta
                    p.mb-0 Según el resultado, se cierra el evento o se activa el escalamiento, que puede incluir al supervisor, las autoridades o los organismos de emergencia (DEAS, s. f.).
      p.mb-5 Cada señal y actuación debe registrarse para garantizar trazabilidad. La supervisión continua y el cumplimiento de los procedimientos reducen falsas alarmas, errores y desensibilización operativa (ASIS International, 2011).
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Seguridad física: hardware, entorno y protección de datos
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t7/img23.jpg', alt='' style="width: 500px").m-auto
        .col-xl
          .caja-3.color-3(data-aos="fade-left").mb-3
            p.mb-0 La seguridad física integra la protección de la infraestructura tecnológica, las condiciones del entorno y la información necesaria para mantener la operación.
          p.mb-0 Estas dimensiones se relacionan entre sí y requieren controles coordinados para prevenir fallas, manipulaciones e interrupciones:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t7/img24.png', alt="" ).m-auto
                  h4.text-center Hardware
                  .caja-2_p
                    p.mb-0 Comprende los equipos y componentes físicos que soportan la detección, transmisión, almacenamiento y gestión de las señales.
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t7/img25.png', alt="" ).m-auto
                  h4.text-center Entorno
                  .caja-2_p
                    p.mb-0 Incluye las condiciones físicas y ambientales que pueden afectar el funcionamiento de los equipos y la seguridad de las áreas protegidas.
            .col-xl-4.col-md-9(data-aos="fade-left")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t7/img26.png', alt="" ).m-auto
                  h4.text-center Protección de datos
                  .caja-2_p
                    p.mb-0 Comprende los controles destinados a conservar la confidencialidad, integridad, disponibilidad y trazabilidad de la información operativa (ASIS International, 2011, 2012).
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.png')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Protección del hardware
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t7/img27.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p La protección del hardware reúne controles físicos, ambientales y documentales para conservar los equipos y garantizar la continuidad del sistema de seguridad.
          br
          p Su aplicación integra controles relacionados con los componentes tecnológicos, las alteraciones del entorno y la protección de la información:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t7/img28.png", alt="" style="width: 280px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Protección de los componentes físicos").ajuste-cajaAcordion.ajuste-vineta
              p Puertas, cerraduras, ventanas, barreras, cámaras, sensores, paneles y servidores deben ubicarse en áreas controladas y someterse a inspecciones periódicas.
              p La infraestructura crítica requiere resistencia estructural, accesos diferenciados, mantenimiento constante y detección temprana de anomalías (ASIS International, 2009, 2011).
              p.mb-3 La infraestructura crítica requiere resistencia estructural, accesos diferenciados y detección temprana de anomalías (ASIS International, 2009, 2011).
            .row(titulo="Alteraciones del entorno").ajuste-cajaAcordion.ajuste-vineta
              p Los daños físicos, la presencia de personas no autorizadas, los ruidos inusuales, las variaciones en la iluminación y los objetos fuera de lugar deben documentarse y comunicarse.
              p.mb-3 Estas condiciones pueden indicar intentos de intrusión, fallas operativas o riesgos para el personal (ASIS International, 2011).
      .row.align-items-center.mb-0
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Condiciones del entorno físico").ajuste-cajaAcordion.ajuste-vineta
              p La iluminación, la distribución arquitectónica, el tránsito de personas y los obstáculos influyen en la eficacia de las medidas de seguridad.
              p.mb-3 La gestión preventiva debe reducir puntos sin cobertura y fortalecer la capacidad de respuesta ante posibles amenazas (ASIS International, 2011).
            .row(titulo="Protección de datos").ajuste-cajaAcordion.ajuste-vineta
              p La información debe clasificarse, almacenarse en áreas controladas y consultarse únicamente por personal autorizado.
              p.mb-3 La custodia integra barreras físicas, controles tecnológicos y procedimientos destinados a proteger servidores, sistemas de grabación y equipos asociados (ASIS International, 2011).
            .row(titulo="Preservación de la información").ajuste-cajaAcordion.ajuste-vineta
              p La manipulación inadecuada, la divulgación no autorizada o la pérdida de soportes puede comprometer la seguridad del cliente y de la instalación.
              p.mb-3 La gestión de la información debe garantizar confidencialidad, integridad, disponibilidad y trazabilidad frente a riesgos internos y externos (ASIS International, 2011).
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t7/img29.png", alt="" style="width: 300px").m-auto
      Separador
      #t_7_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 7.4 Condiciones de prestación del servicio
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t7/img30.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Las condiciones de prestación establecen los requisitos necesarios para ejecutar el servicio con disciplina, continuidad y capacidad de respuesta ante diferentes riesgos. 
      p.mb-5 Estas condiciones se diferencian según su alcance, las características del puesto y los factores que pueden afectar el desempeño operativo:
      TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Condiciones generales")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t7/img31.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Condiciones generales
              p Comprenden presencia permanente, comunicación con el supervisor, conocimiento del entorno, cumplimiento de procedimientos y continuidad entre turnos (ASIS International, 2011).
              p La ausencia injustificada del puesto genera vulnerabilidades y afecta la capacidad preventiva del sistema.
              h4.txt--purpura.mb-4 Ejemplo aplicado
              p.mb-0 En una portería, la ausencia temporal del oficial puede facilitar accesos no autorizados, ingreso de visitantes sin control o manipulación de las puertas.
        .py-3.py-md-4(titulo="Condiciones específicas")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t7/img32.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Condiciones específicas
              p Dependen del tipo de puesto, los riesgos, las zonas críticas, los accesos, las rutas de inspección y los patrones de actividad del lugar.
              p El personal debe conocer la distribución del sitio, los puntos vulnerables, las áreas restringidas y los mecanismos de cierre (ASIS International, 2009, 2011).
              h4.txt--purpura.mb-4 Ejemplo aplicado
              p.mb-0 En un centro comercial, las zonas con mayor flujo requieren refuerzo de la vigilancia durante los periodos de mayor vulnerabilidad.
        .py-3.py-md-4(titulo="Condiciones adicionales")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t7/img33.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Condiciones adicionales
              p Incluyen claridad en los reportes, registro de novedades, uso exclusivo de medios institucionales y cumplimiento estricto de las órdenes de servicio.
              p También comprenden pruebas periódicas de alarmas, botones de pánico, barreras físicas y otros sistemas de seguridad (ASIS International, 2011; Bermúdez, 2012).
              h4.txt--purpura.mb-4 Ejemplo aplicado
              p.mb-0 Un botón de pánico con fallas debe reportarse, verificarse y gestionarse antes de que ocurra una emergencia.
        .py-3.py-md-4(titulo="Condiciones humanas y ambientales")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t7/img34.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Condiciones humanas y ambientales
              p La fatiga, la presión cognitiva, la carga prolongada y las condiciones ergonómicas pueden afectar la concentración y la toma de decisiones.
              p La rotación de funciones, las pausas activas, el descanso programado y la supervisión reducen estos riesgos (ASIS International, 2011).
              h4.txt--purpura.mb-4 Ejemplo aplicado
              p.mb-0 Un operador fatigado puede retrasar la verificación de una señal crítica. La rotación y las pausas programadas contribuyen a reducir este riesgo.
      Separador
      #t_7_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 7.5 Protocolo operativo
      .caja-4.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-4_p
            p.mb-0 El protocolo operativo organiza la actuación del personal mediante instrucciones estandarizadas que garantizan coherencia, trazabilidad y continuidad durante el servicio.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t7/img35.png', alt='' style="width: 500px").m-auto
      p.mb-5 Su estructura integra criterios que definen las acciones, distribuyen responsabilidades y establecen las condiciones necesarias para su cumplimiento:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t7/img36.png", alt="" style="width: 280px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Concepto").ajuste-cajaAcordion.ajuste-vineta
              p El protocolo establece las acciones, su secuencia y los responsables, lo que reduce interpretaciones personales, actuaciones aisladas y errores operativos (ASIS International, 2011).
              p #[b Ejemplo aplicado]
              p.mb-3 Ante una alarma, el protocolo define la comprobación inicial, el reporte inmediato, la confirmación mediante los sistemas disponibles y la comunicación al supervisor.
            .row(titulo="Responsables").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Oficial:] conoce y ejecuta las instrucciones, además de reportar las condiciones que limiten su cumplimiento.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Supervisor:] comprueba la aplicación, corrige desviaciones y documenta las fallas.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Coordinación:] resuelve dudas, analiza recurrencias y asegura la uniformidad.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Administración:] diseña, actualiza y aprueba los protocolos según los riesgos y las necesidades del servicio.
      .row.align-items-center.mb-0
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Condiciones generales").ajuste-cajaAcordion.ajuste-vineta
              p Comprenden disciplina, puntualidad, permanencia, comunicación, registro de actividades y reporte de irregularidades, condiciones necesarias para aplicar el protocolo de manera controlada y estable (ASIS International, 2011).
              p #[b Ejemplo aplicado]
              p.mb-3 Una disminución repentina de la iluminación en un pasillo debe reportarse de inmediato porque puede indicar una falla o posible manipulación.
            .row(titulo="Condiciones específicas").ajuste-cajaAcordion.ajuste-vineta
              p Se determinan según el riesgo, la infraestructura y la configuración operativa del puesto. Incluyen:
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Rutas de inspección. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Horarios de vigilancia. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Control de accesos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Zonas críticas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Estado de puertas, ventanas y cerraduras. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Funcionamiento de equipos electrónicos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Registro de las actuaciones. 
              p Estas condiciones no deben modificarse sin autorización (ASIS International, 2009).
              p #[b Ejemplo aplicado]
              p.mb-3 En un depósito considerado zona crítica, una variación de temperatura puede indicar una falla del sistema o un intento de sabotaje.
            .row(titulo="Otras condiciones del servicio").ajuste-cajaAcordion.ajuste-vineta
              p Incluyen restricciones sobre actividades, equipos e información, así como la verificación de la dotación y medidas para prevenir la fatiga y el agotamiento (ASIS International, 2011).
              p #[b Ejemplo aplicado]
              p.mb-3 En una central de monitoreo, la fatiga puede retrasar la identificación de una intrusión y comprometer la oportunidad de la respuesta.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t7/img37.png", alt="" style="width: 350px").m-auto

</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
