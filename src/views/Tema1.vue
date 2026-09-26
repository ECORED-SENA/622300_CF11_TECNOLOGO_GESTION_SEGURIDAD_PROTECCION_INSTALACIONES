<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Procesos administrativos del supervisor
      p.mb-5 Los procesos administrativos del supervisor constituyen el marco que orienta la gestión integral del servicio y favorece el cumplimiento de los objetivos institucionales.
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Función administrativa de organización
      p.mb-5 La función administrativa orienta la operación del servicio mediante tres categorías que facilitan la coordinación y el cumplimiento de las responsabilidades institucionales:
      TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Organización")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img1.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Organización
              p La organización administrativa define funciones, jerarquías, protocolos, responsabilidades y recursos para coordinar la operación, fortalecer la cadena de mando y garantizar continuidad entre turnos (ASIS International, 2011; Decreto 356 de 1994).
              p.mb-0 #[b Ejemplo:] al iniciar el turno, el operador consulta la minuta, verifica los sistemas y valida la información disponible para asegurar la continuidad operativa (ASIS International, 2011).
        .py-3.py-md-4(titulo="Clasificación")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img2.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Clasificación
              p La clasificación organiza recursos, riesgos, incidentes e información según su criticidad, permitiendo diferenciar tareas rutinarias, falsas alarmas y eventos críticos para priorizar la respuesta (ASIS International, 2005, 2011).
              p.mb-0 #[b Ejemplo:] clasificar un servidor principal de una entidad financiera como activo crítico implica asignar medidas de protección avanzadas como redundancia energética, sensores perimetrales y monitoreo permanente, ajustando los recursos a su importancia estratégica (ASIS International, 2005).
        .py-3.py-md-4(titulo="Orden")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img3.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Orden
              p El orden fortalece la disciplina, el control documental y la trazabilidad mediante la organización del puesto, la actualización de documentos y el registro preciso de novedades en la minuta (ASIS International, 2011).
              p.mb-0 #[b Ejemplo:] el registro cronológico en la minuta permite reconstruir la secuencia de un incidente y determinar fallas o aciertos en la operación, demostrando cómo el orden documental fortalece la trazabilidad y la calidad del servicio (ASIS International, 2011).
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Manejo de recursos
      p.mb-5 El manejo de recursos integra las capacidades disponibles para asegurar su asignación, utilización y control conforme a las necesidades operativas y administrativas del servicio. Su gestión comprende los siguientes componentes:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img4.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Tipos de recursos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los recursos humanos, tecnológicos, materiales y documentales deben planificarse, asignarse y controlarse para garantizar su funcionamiento coordinado. El talento humano constituye el eje del sistema porque administra los demás recursos (ASIS International, 2011).
            .row(titulo="Recurso humano como eje del servicio").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El recurso humano interpreta información, ejecuta procedimientos y atiende incidentes. Su gestión comprende asignación, asistencia, puntualidad, capacitación, evaluación del desempeño y medidas disciplinarias. Cada puesto debe contar con personal competente y suficiente (ASIS International, 2011).
            .row(titulo="Supervisión operativa y administrativa del recurso humano").ajuste-cajaAcordion.ajuste-vineta
              p La supervisión verifica tareas, controla la disciplina, orienta al personal y corrige fallas. El equipo sénior debe distribuir personal capacitado según las necesidades del cliente y los niveles de riesgo (ASIS International, 2011).
              p.mb-3 #[b Ejemplo:] ante dificultades en el control de acceso, el supervisor debe proporcionar retroalimentación, reforzar la capacitación o disponer una reubicación temporal.
      .row.align-items-center.mb-0
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Manejo de equipos y medios tecnológicos").ajuste-cajaAcordion.ajuste-vineta
              p Los sistemas de alarma, cámaras, sensores, radios y aplicaciones permiten detectar eventos, transmitir alertas y coordinar respuestas. Su administración comprende verificación, acceso autorizado, registro de fallas y asistencia técnica (ASIS International, 2012).
              p.mb-3 #[b Ejemplo:] ante una señal de intrusión, el operador valida la información, contacta al personal asignado y documenta las actuaciones.
            .row(titulo="Control de la documentación como recurso administrativo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Las minutas, reportes y registros respaldan la trazabilidad, permiten reconstruir acontecimientos y facilitan la evaluación del servicio. La información debe registrarse con exactitud y conservarse bajo criterios de seguridad y confidencialidad (ASIS International, 2012).
            .row(titulo="Integración de recursos humanos, tecnológicos y administrativos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El sistema articula personal, equipos y documentos para identificar eventos, coordinar actuaciones y registrar resultados. La integración de estos recursos garantiza la continuidad y eficacia del servicio (ASIS International, 2011).
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img5.png", alt="" style="width: 350px").m-auto
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.3 Administración de sistemas
      p.mb-5 La administración de sistemas integra componentes interrelacionados para garantizar la coordinación, continuidad y estabilidad del servicio. Estos componentes se organizan de la siguiente manera:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Recurso humano
                  p.mb-0 Ejecuta procedimientos, utiliza equipos, documenta novedades y toma decisiones en situaciones rutinarias o críticas. Su desempeño depende de la capacitación, la disciplina y la competencia técnica (ASIS International, 2011).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Procedimientos
                  p.mb-0 Establecen instrucciones secuenciales, estandarizan la actuación del personal y reducen las improvisaciones. Su actualización permite responder a nuevas necesidades, riesgos emergentes y cambios operativos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Registros operativos
                  p.mb-0 Las minutas y los reportes conservan evidencia de los acontecimientos, las decisiones y las acciones realizadas. También facilitan la trazabilidad y el análisis de tendencias (ASIS International, 2012).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img8.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Comunicaciones
                  p.mb-0 Conectan los niveles del sistema y facilitan la coordinación entre vigilantes, operadores, supervisores y demás responsables. Una comunicación clara favorece respuestas oportunas y reduce errores.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img9.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Equipos tecnológicos
                  p.mb-0 Los paneles de alarma, las cámaras, los sensores y los radios amplían la capacidad operativa. Su funcionamiento depende del mantenimiento y del uso disciplinado (ASIS International, 2009).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img10.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Documentos administrativos
                  p.mb-0 Los protocolos, planes e instructivos establecen los lineamientos formales y orientan la ejecución conforme a las necesidades de seguridad de la instalación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img11.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Verificación y supervisión
                  p.mb-0 Las inspecciones, auditorías y análisis de información permiten evaluar el funcionamiento del sistema, identificar desviaciones y determinar oportunidades de mejora (ASIS International, 2011).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img12.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Acciones correctivas
                  p.mb-0 Atienden las fallas identificadas mediante ajustes en los procedimientos, capacitación, mantenimiento de equipos o redistribución de recursos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img13.png', alt='' style="max-width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img14.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ciclo Planear, Hacer, Verificar y Actuar (PHVA) como motor de mejora continua
      p.mb-5 La mejora continua se desarrolla mediante un modelo de gestión que tiene cuatro fases consecutivas que permiten planificar las actividades, ejecutarlas, evaluar sus resultados e implementar los ajustes requeridos. Estas son:
      .bg-1
        .px-5
          .row.justify-content-center.mb-0
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Planear
                    p.mb-0 Define los objetivos, los riesgos priorizados, los responsables y los recursos necesarios. Incluye el análisis de vulnerabilidades, la elaboración de procedimientos y la asignación técnica del personal (ASIS International, 2011).
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img15.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img16.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Hacer
                    p.mb-0 Comprende la ejecución de los procedimientos planificados, la capacitación del personal, la operación de los equipos y el registro de las actividades, garantizando el cumplimiento de los estándares establecidos.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Verificar
                    p.mb-0 Evalúa si las actividades ejecutadas corresponden con lo planificado y cumplen los estándares establecidos mediante auditorías, inspecciones, registros e indicadores. También permite identificar desviaciones, fallas técnicas u omisiones documentales que afectan la calidad del servicio.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img17.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img18.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Actuar
                    p.mb-0 Implementa acciones correctivas mediante ajustes en los procedimientos, capacitación, mantenimiento o redistribución de recursos, permitiendo actualizar el sistema y adaptarlo a nuevas condiciones operativas (ASIS International, 2011).
          Separador
          #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 1.4 Herramientas para evaluar el servicio
      p.mb-5 La evaluación del servicio emplea registros documentales para valorar el desempeño, verificar el cumplimiento e identificar oportunidades de mejora operativa. Estos registros cumplen funciones específicas dentro del seguimiento y control del servicio, las cuales se desarrollan en los siguientes apartados:
      .ajuste-final
        .bg-slider.mb-0
          .px-5
            .ajuste-slider(data-aos="zoom-in")
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Función documental en la operación diaria
                    p.mb-0 Los registros de turno garantizan la continuidad informativa, documentan novedades y permiten reconstruir acontecimientos, verificar protocolos y evaluar la respuesta operativa (ASIS International, 2011; DEAS, s. f.).
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/t1/img19.png', alt='' style="max-width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Instrumentos documentales
                    p.mb-0 Las bitácoras, minutas, listas de chequeo, reportes e informes registran acontecimientos, verifican tareas y facilitan el análisis del servicio (ASIS International, 2011; DEAS, s. f.).
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/t1/img20.png', alt='' style="max-width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Importancia evaluativa de los registros
                    p.mb-0 Los registros permiten valorar el desempeño, identificar fallas y determinar el cumplimiento de procedimientos, tiempos de reacción y responsabilidades (ASIS International, 2011).
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/t1/img21.png', alt='' style="max-width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Registros como herramienta de supervisión y control
                    p La información documental permite detectar errores, omisiones e incumplimientos, y sustenta la retroalimentación y las acciones correctivas (ASIS International, 2011).
                    p.mb-0 #[b Ejemplo:] una alarma no registrada en la minuta afecta la trazabilidad del servicio.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/t1/img22.png', alt='' style="max-width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Registros como base de la mejora continua
                    p.mb-0 Los registros sustentan la evaluación de los procedimientos y permiten implementar acciones de mejora basadas en evidencia (ASIS International, 2011).
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/t1/img23.png', alt='' style="max-width: 500px").m-auto

</template>

<script>
export default {
  name: 'Tema1',
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
