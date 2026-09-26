<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 6
        h1 Procedimientos de seguridad y protección personal
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t6/img1.jpg', alt='' style="width: 500px").m-auto
        .col-xl
          .caja-3.color-3(data-aos="fade-left").mb-3
            p.mb-0 Los procedimientos de seguridad establecen directrices estandarizadas para proteger al personal, los bienes y la infraestructura durante la prestación del servicio.
          p.mb-0 Su función operativa se estructura mediante criterios que favorecen la uniformidad, el control y la continuidad del servicio:
      .bg-slider.mb-0
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Estandarización
                  p.mb-0 Los procedimientos definen actividades, responsables, secuencias, criterios técnicos y consecuencias frente a desviaciones. Esta estructura reduce improvisaciones y garantiza actuaciones uniformes (ASIS International, 2011).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img2.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Trazabilidad
                  p.mb-0 La documentación de las actuaciones facilita la supervisión, respalda el cumplimiento de las normas y constituye evidencia de la gestión profesional.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Continuidad operativa
                  p.mb-0 Las instrucciones precisas reducen la incertidumbre, previenen errores y facilitan la transferencia de información entre turnos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Control organizacional
                  p.mb-0 Los procedimientos integran prevención, protección y eficiencia, permitiendo respuestas coherentes y decisiones ajustadas a los límites operativos (ASIS International, 2011).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img5.png', alt='' style="max-width: 500px").m-auto
      Separador
      #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.1 Protección personal
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t6/img6.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p La protección personal integra disciplina, procedimientos, equipos, comunicación y conducta profesional para reducir la exposición del personal a diferentes riesgos.
          br
          p Esta protección se desarrolla mediante componentes y formas de actuación que responden a las condiciones propias del servicio:
      TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Protección integral")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t6/img7.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Protección integral
              p.mb-0 La protección personal integra procedimientos, condiciones del entorno, comunicación y actuación profesional para reducir riesgos y fortalecer la capacidad de respuesta (ASIS International, 2011).
        .py-3.py-md-4(titulo="Equipos y comunicación")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t6/img8.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Equipos y comunicación
              p.mb-0 Los equipos de comunicación, protección y señalización favorecen la seguridad durante el servicio, siempre que se utilicen correctamente, se reporten sus fallas y se mantenga comunicación continua (ASIS International, 2011; Bermúdez, 2012).
        .py-3.py-md-4(titulo="Actuación profesional")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t6/img9.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Actuación profesional
              p.mb-0 La presentación personal, la conducta profesional, la preparación técnica, el control emocional y el cumplimiento de protocolos fortalecen la autoridad y contribuyen a prevenir incidentes y confrontaciones (Bermúdez, 2012).
        .py-3.py-md-4(titulo="Formas de protección")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t6/img10.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Formas de protección
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Protección preventiva:] comprende rondas, control de accesos, seguimiento del entorno y detección temprana de anomalías. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Protección acompañada:] se aplica en escoltas de personas, activos o información sensible, mediante coordinación permanente. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Protección reactiva:] se activa ante incidentes materializados y requiere procedimientos, control emocional y coordinación con la supervisión (ASIS International, 2011).
      Separador
      #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.2 Manejo de medidas de protección personal
      .caja-4.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-4_p
            p.mb-0 El manejo de medidas de protección articula acciones disciplinadas para prevenir riesgos, responder ante condiciones cambiantes y mantener la continuidad operativa.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t6/img11.png', alt='' style="width: 500px").m-auto
      p.mb-5 Su aplicación comprende medidas complementarias que fortalecen la autoprotección y el cumplimiento seguro de las funciones asignadas:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t6/img12.png", alt="" style="width: 280px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Conducta profesional como primera medida de protección").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La postura responsable, la vigilancia preventiva y las decisiones sustentadas en criterios técnicos reducen distracciones, improvisaciones y posibles situaciones de riesgo (ASIS International, 2011).
            .row(titulo="Documentación como mecanismo de autoprotección").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El registro de novedades, incidentes y anomalías garantiza trazabilidad, respalda la actuación profesional y permite reconstruir los hechos en situaciones críticas (ASIS International, 2011).
            .row(titulo="La supervisión como control preventivo del riesgo humano").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La supervisión orienta, corrige y acompaña al personal. También permite identificar desviaciones, comprobar procedimientos y prevenir riesgos asociados con cansancio, presión o falta de experiencia.
      .row.align-items-center.mb-0
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Cumplimiento disciplinado de los procedimientos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El seguimiento disciplinado de rutas, puntos de verificación, horarios y protocolos reduce errores y mantiene la coherencia del servicio ante situaciones normales o críticas (ASIS International, 2011).
            .row(titulo="Continuidad operativa entre turnos como medida preventiva").ajuste-cajaAcordion.ajuste-vineta
              p La transferencia documentada de información permite que cada oficial conozca el estado del puesto, las novedades, los riesgos y las actividades pendientes.
              p.mb-3 Una entrega precisa evita interrupciones y reduce situaciones inesperadas derivadas de información incompleta (ASIS International, 2011).
            .row(titulo="Medidas de protección personal derivadas de prácticas operativas").ajuste-cajaAcordion.ajuste-vineta
              p La revisión de la dotación, el uso adecuado de los elementos asignados, el cumplimiento de rutas y la atención permanente al entorno fortalecen la autoprotección.
              p.mb-3 La verificación de radios, uniformes, linternas, dispositivos de ronda y elementos de señalización permite corregir fallas antes de iniciar el turno (Bermúdez, 2012).
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t6/img13.png", alt="" style="width: 280px").m-auto

</template>

<script>
export default {
  name: 'Tema6',
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
