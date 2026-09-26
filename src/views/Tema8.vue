<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 8
        h1 Notificación a autoridades y redes de apoyo
      p.mb-5 La notificación articula la respuesta institucional cuando un incidente supera la capacidad operativa del personal de seguridad privada. Su aplicación integra criterios que fortalecen la coordinación, el escalamiento y la continuidad de la respuesta:
      .bg-2
        .px-5
          .row.justify-content-center.mb-0
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t8/img1.png', alt="" ).m-auto
                  h4.text-center Respuesta institucional
                  .caja-2_p
                    p.mb-0.text-center La notificación activa el apoyo de las autoridades o entidades competentes frente a situaciones críticas, tales como la Policía Nacional, la Red de Apoyo y Solidaridad Ciudadana y la línea 123.
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t8/img2.png', alt="" ).m-auto
                  h4.text-center Coordinación
                  .caja-2_p
                    p.mb-0.text-center La actuación debe respetar la cadena de mando y utilizar canales de comunicación previamente establecidos.
            .col-xl-4.col-md-9(data-aos="fade-left")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t8/img3.png', alt="" ).m-auto
                  h4.text-center Escalamiento
                  .caja-2_p
                    p.mb-0.text-center El nivel de riesgo determina la autoridad que debe intervenir y la urgencia de la notificación (ASIS International, 2011; Bermúdez, 2012).
          Separador
          #t_8_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 8.1 Finalidad del protocolo de notificación
      p.mb-5 El protocolo de notificación activa la respuesta externa para proteger la vida, preservar los bienes y respaldar las actuaciones realizadas. Su finalidad comprende propósitos que orientan la actuación profesional durante situaciones que requieren apoyo institucional:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Activar la respuesta
                  p.mb-0 Permite solicitar la intervención de las autoridades cuando el evento supera la capacidad operativa del servicio.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t8/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Proteger a las personas
                  p.mb-0 La notificación oportuna favorece la atención de emergencias que puedan comprometer la vida o integridad de las personas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t8/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Evitar improvisaciones
                  p.mb-0 El procedimiento establece cómo comunicar el incidente y qué información debe proporcionarse mediante los canales autorizados.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t8/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Garantizar trazabilidad
                  p.mb-0 Las actuaciones deben documentarse para respaldar la gestión del riesgo y el cumplimiento del protocolo (ASIS International, 2011).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t8/img7.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Para aplicar los conocimientos abordados, se presenta el siguiente ejemplo:
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t8/img8.jpg', alt='' style="width: 500px").m-auto
        .col-xl
          .caja-3.color-2.ajuste-1(data-aos="fade-left")
            h5 Ejemplo aplicado
            p.mb-0 Ante la activación de un botón de pánico, el oficial debe notificar inmediatamente y facilitar la intervención de la autoridad, sin exponerse mediante actuaciones físicas innecesarias.
      Separador
      #t_8_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 8.2 Principio doctrinal y cadena de mando
      p.mb-5 La cadena de mando garantiza que la información sea precisa, verificada y comunicada bajo instrucciones que favorezcan una respuesta coordinada. Antes de activar los canales externos, el personal debe cumplir una secuencia que preserve el control institucional. Esta se describe a continuación:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Informar al supervisor
                    p.mb-0 El oficial comunica la situación mediante los canales internos establecidos.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t8/img9.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t8/img10.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Documentar el evento
                    p.mb-0 Se registran la naturaleza del incidente, la ubicación, las personas involucradas y las acciones ejecutadas.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Recibir instrucciones
                    p.mb-0 El supervisor analiza la información y determina el procedimiento correspondiente.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t8/img11.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t8/img12.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Activar el canal externo
                    p.mb-0 La autoridad o red de apoyo se contacta según el nivel de riesgo y las instrucciones recibidas.
      p.mb-0 Cuando existe una amenaza inmediata y evidente, la notificación externa puede efectuarse sin demora, dejando registro de la actuación (ASIS International, 2011).
      Separador
      #t_8_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 8.3 Lineamientos doctrinales
      p.mb-5 Los lineamientos doctrinales preparan la interacción con autoridades y redes de apoyo para reducir demoras y fortalecer la coordinación interinstitucional. Esta preparación comprende los siguientes mecanismos que favorecen una actuación organizada frente a incidentes que requieren apoyo externo:
      .row.align-items-center.mb-0
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t8/img13.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Tiempos de respuesta").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El conocimiento previo de los tiempos estimados permite implementar medidas preventivas mientras llega la autoridad, el cuerpo de bomberos o el servicio médico.
            .row(titulo="Canales establecidos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los números directos, enlaces institucionales y mecanismos de comunicación permiten contactar oportunamente a las entidades competentes.
            .row(titulo="Acuerdos operativos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La coordinación previa facilita la distribución de responsabilidades y la actuación conjunta durante situaciones críticas.
            .row(titulo="Redes preventivas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los sistemas de alerta y ayuda mutua permiten compartir información y coordinar acciones ante incidentes de alto impacto (ASIS International, 2011).
      Separador
      #t_8_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 8.4 Notificaciones obligatorias
      p.mb-5 Las notificaciones obligatorias corresponden a situaciones que requieren la intervención inmediata de autoridades, organismos de emergencia o redes de apoyo. La gestión de estas comunicaciones se organiza según la entidad requerida y la información necesaria para activar la respuesta así:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Entidades competentes")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t8/img14.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Entidades competentes
              p La comunicación puede dirigirse a:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Policía Nacional. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Línea de emergencias 123. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Red de Apoyo y Solidaridad Ciudadana. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Cuerpos de bomberos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Servicios médicos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Otras autoridades competentes.
        .py-3.py-md-4(titulo="Información requerida")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t8/img15.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Información requerida
              p La notificación debe comunicar:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Naturaleza del evento. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Ubicación precisa. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Características del incidente. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Personas afectadas o involucradas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Riesgos presentes. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Acciones ejecutadas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Estado actual de la situación.
        .py-3.py-md-4(titulo="Responsabilidad del supervisor")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t8/img16.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Responsabilidad del supervisor
              p.mb-0 El supervisor debe desplazarse al lugar, coordinar la llegada de las autoridades, orientar al personal y mantener actualizada la información.
      p.mb-5 A continuación, se presenta el siguiente ejemplo:
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t8/img17.jpg')})` }")
        .bloque-texto-g__texto.p-4
          h5 Ejemplo aplicado
          br
          br
          p Ante un dolor torácico reportado en una instalación, el oficial debe contactar la línea 123 y proporcionar información precisa para facilitar la atención médica (Bermúdez, 2012).
      Separador
      #t_8_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 8.5 Estructura funcional del protocolo
      p.mb-5 La estructura funcional organiza la actuación desde la detección del incidente hasta su notificación externa y registro documental. El protocolo se desarrolla mediante la siguiente secuencia que articula la información, la cadena de mando y la respuesta institucional:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Detección
                    p.mb-0 El oficial identifica el evento y recopila la información inicial disponible.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t8/img18.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t8/img19.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Reporte interno
                    p.mb-0 La situación se comunica al supervisor para activar la cadena de mando.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Verificación y clasificación
                    p.mb-0 La información se verifica y el evento se clasifica como irregularidad, falsa alarma potencial, incidente confirmado o emergencia.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t8/img20.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t8/img21.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Notificación externa
                    p.mb-0 El supervisor determina la autoridad competente y se comunica la ubicación, el tipo de evento y el estado actual.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Registro documental
                    p.mb-0 Las actuaciones, comunicaciones, decisiones y tiempos de respuesta se consignan en los registros establecidos (ASIS International, 2011; Bermúdez, 2012).
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t8/img22.png', alt='' style="width: 300px").m-auto
      p.mb-5 Se invita a consultar el pódcast para fortalecer la comprensión de las actuaciones que articulan la verificación, el reporte interno, el escalamiento y el registro documental.
      .row.align-items-center.m-0.mb-0
        .col-xl
          .row.align-items-center.justify-content-center.caja-6(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t8/img23.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="De la detección al reporte: secuencia para notificar un incidente"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t8/img24.png" style="max-width: 510px").m-auto
      Separador
      #t_8_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 8.6 Redes de apoyo
      .caja-4.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-4_p
            p.mb-0 Las redes de apoyo facilitan el intercambio de información y la coordinación de recursos ante incidentes que superan la capacidad individual del servicio.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t8/img25.png', alt='' style="width: 500px").m-auto
      p.mb-5 Su funcionamiento integra mecanismos que fortalecen la capacidad colectiva de reacción ante situaciones críticas. Estos son:
      .bg-slider.mb-0
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Intercambio de información
                  p.mb-0 Las entidades comparten alertas y datos relevantes para anticipar riesgos y coordinar decisiones.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t8/img26.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Apoyo logístico
                  p.mb-0 La cooperación facilita la movilización de recursos humanos, técnicos y operativos durante situaciones complejas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t8/img27.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Alerta temprana
                  p.mb-0 Los sistemas preventivos permiten comunicar amenazas antes de que afecten otras instalaciones o sectores.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t8/img28.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Mensajes estandarizados
                  p.mb-0 El uso de información clara y uniforme reduce errores y agiliza la coordinación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t8/img29.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Respuesta colectiva
                  p.mb-0 Las redes amplían la capacidad de intervención ante intrusiones múltiples, incendios, emergencias o amenazas a infraestructura crítica (ASIS International, 2011).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t8/img30.png', alt='' style="max-width: 500px").m-auto
      Separador
      #t_8_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 8.7 Nivel de riesgo y obligación de notificar
      p.mb-5 El nivel de riesgo determina la urgencia de la notificación y la necesidad de activar inmediatamente el apoyo institucional correspondiente. La obligación de notificar se establece según la gravedad del evento, sus posibles consecuencias y la necesidad de intervención externa:
      .row.align-items-center.mb-0
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t8/img31.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Riesgo inmediato").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La notificación no debe demorarse cuando el evento compromete la vida, la integridad, la seguridad o la continuidad operativa.
            .row(titulo="Eventos que requieren notificación").ajuste-cajaAcordion.ajuste-vineta
              p Comprenden:
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Activación de botones de pánico. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Intrusiones confirmadas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Agresiones. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Fallas críticas en alarmas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Incendios. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Emergencias médicas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Amenazas contra personas o instalaciones.
            .row(titulo="Consecuencias de la demora").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La notificación tardía limita la capacidad institucional de respuesta y puede aumentar las consecuencias del incidente.
            .row(titulo="Criterio operativo").ajuste-cajaAcordion.ajuste-vineta
              p Cuando el riesgo es evidente, la autoridad debe recibir la información sin esperar una comprobación física que retrase su desplazamiento (ASIS International, 2011).
              p #[b Ejemplo aplicado]
              p.mb-3 Ante una intrusión confirmada mediante CCTV, el oficial debe notificar inmediatamente para facilitar el desplazamiento de la autoridad competente.

</template>

<script>
import audio1 from '@/assets/curso/temas/t8/audios/audio-ej.mp3'
export default {
  name: 'Tema8',
  data: () => ({
    audio1,
    mostrarIndicadorTarjetaAudio: true,
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
