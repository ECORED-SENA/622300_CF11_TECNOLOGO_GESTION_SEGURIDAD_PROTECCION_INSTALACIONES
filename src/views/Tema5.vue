<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Seguridad y salud en el trabajo
      p.mb-5 La protección del personal constituye un eje central de la seguridad privada. Requiere identificar riesgos, responder a emergencias, cumplir procedimientos y reportar desviaciones, integrando la seguridad y salud en el trabajo con la gestión operativa, administrativa y de mejora continua.
      #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.1 Sistema de Gestión de la Seguridad y Salud en el Trabajo
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img1.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p El sistema de gestión organiza procedimientos preventivos para identificar riesgos, proteger al personal y mejorar continuamente las condiciones de trabajo.
      p.mb-5 Este sistema articula su fundamento, su ciclo de gestión y las disposiciones internas que orientan la prevención:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Concepto de sistema de gestión")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img2.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Concepto de sistema de gestión
              p.mb-0 El sistema integra procedimientos escritos, supervisión, evaluación de riesgos, acciones preventivas, disciplina y mejora continua para proteger al personal y fortalecer la eficacia operativa (DEAS, s. f.).
        .py-3.py-md-4(titulo="Ciclo PHVA")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img3.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Ciclo PHVA
              p El ciclo PHVA es:
              ul.fa-ul.estilo___ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[i Planear:] identificar riesgos, establecer objetivos y definir procedimientos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[i Hacer:] ejecutar actividades, aplicar protocolos y documentar los eventos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[i Verificar:] evaluar resultados e identificar desviaciones. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[i Actuar:] implementar correctivos y actualizar los procedimientos. 
              p.mb-0 Este ciclo permite transformar la experiencia operativa en acciones de mejoramiento para la seguridad del personal y la calidad del servicio (DEAS, s. f.).
        .py-3.py-md-4(titulo="Normas internas")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img4.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Normas internas
              p Las normas internas cumplen una función preventiva equivalente a las disposiciones formales de un sistema de gestión. Comprenden:
              ul.fa-ul.estilo___ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Cumplimiento disciplinado de los procedimientos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Acatamiento de consignas y órdenes de servicio. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Aplicación de protocolos escritos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Reglas de conducta profesional. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Estándares mínimos de comportamiento seguro. 
              p.mb-0 Estas disposiciones uniforman la actuación del personal, reducen la improvisación y promueven prácticas seguras.
      p.mb-5 Para mayor comprensión del tema, se presenta el siguiente ejemplo de ciclo PHVA:
      .caja-4.mb-0(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-4_p
            h5 Ejemplo aplicado
            p Una deficiencia de iluminación ocasiona un incidente en el perímetro. Para atenderlo, el ciclo PHVA se aplica de la siguiente manera:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Planear:] identificar el riesgo asociado con la iluminación insuficiente. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Hacer:] reforzar temporalmente la iluminación y documentar la situación. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Verificar:] comprobar si la medida reduce los incidentes. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Actuar:] instalar iluminación definitiva, actualizar el protocolo y capacitar al personal. 
            p.mb-0 Este proceso convierte el incidente en una oportunidad de mejoramiento continuo (DEAS, s. f.).
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t5/img5.png', alt='' style="width: 500px").m-auto
      Separador
      #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.2 Sistemas de protección del personal
      p.mb-5 Los sistemas de protección articulan medidas operativas, documentales y disciplinarias para reducir riesgos y asegurar condiciones adecuadas durante la prestación del servicio. La protección del personal se desarrolla mediante mecanismos complementarios que fortalecen la prevención y la actuación segura:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img6.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Supervisión operativa").ajuste-cajaAcordion.ajuste-vineta
              p La supervisión comprueba el cumplimiento de instrucciones, la comunicación de riesgos y la aplicación de prácticas seguras. También facilita el apoyo durante incidentes y la corrección oportuna de desviaciones (ASIS International, 2011).
              p El supervisor actúa como un enlace entre la dirección y el oficial, verificando que:
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | El personal cuente con instrucciones claras.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Los riesgos detectados sean comunicados oportunamente.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Las prácticas seguras se mantengan.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Se brinde apoyo durante incidentes o emergencias.
            .row(titulo="Protocolos escritos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los protocolos establecen orientaciones claras, reducen la improvisación y estandarizan las respuestas ante situaciones críticas. Su aplicación evita decisiones sustentadas únicamente en la costumbre.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Registros y reportes").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los registros permiten identificar riesgos recurrentes, fallas operativas y condiciones peligrosas. Su trazabilidad facilita la implementación de medidas preventivas sustentadas en evidencia (DEAS, s. f.).
            .row(titulo="Control disciplinario").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El control disciplinario corrige conductas inseguras, previene prácticas que afecten al personal o a terceros y fortalece el cumplimiento uniforme de los procedimientos.
            .row(titulo="Protección personal").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La protección comprende consignas claras, comunicación entre turnos, cumplimiento de órdenes, respeto por la cadena de mando, documentación y capacitación permanente. Su aplicación constituye una responsabilidad compartida (DEAS, s. f.).
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img7.png", alt="" style="width: 300px").m-auto
      p.mb-5 A continuación, se presenta un ejemplo:
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img8.jpg')})` }")
        .bloque-texto-g__texto.p-4
          h5 Ejemplo aplicado
          br 
          br
          p En una central de monitoreo, la protección se concreta mediante turnos equilibrados, protocolos de verificación, supervisión permanente y registros que permitan identificar condiciones que afecten al personal.
      Separador
      #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.3 COPASST en las empresas
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t5/img9.jpg', alt='' style="width: 500px").m-auto
        .col-xl
          .caja-3.color-1(data-aos="fade-left").mb-3
            p.mb-0 El Comité Paritario de Seguridad y Salud en el Trabajo (COPASST) promueve la prevención, la participación y el seguimiento de las condiciones de seguridad y salud en las organizaciones colombianas.
          p.mb-0 Su funcionamiento se comprende a partir de su finalidad, conformación y principales responsabilidades dentro de la organización:
      .bg-slider.mb-0
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Finalidad
                  p.mb-0 El Comité Paritario de Seguridad y Salud en el Trabajo promueve la prevención y vigilancia de las condiciones laborales. Su regulación se fundamenta en la Resolución 2013 de 1986 y el Decreto 1072 de 2015 (Ministerio de Salud, 1986; Ministerio del Trabajo, 2015).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img10.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Conformación
                  p.mb-0 Las empresas con diez o más trabajadores deben conformarlo con igual número de representantes del empleador y de los trabajadores. Estos últimos son elegidos mediante votación libre.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img11.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Funciones
                  p.mb-0 El comité participa en inspecciones, investigaciones de accidentes, identificación de peligros, valoración de riesgos y formulación de medidas preventivas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img12.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Participación
                  p.mb-0 El COPASST facilita la comunicación de inquietudes, sugerencias y recomendaciones relacionadas con la seguridad y la salud en el trabajo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img13.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Empresas con menos de diez trabajadores
                  p.mb-0 Estas organizaciones deben designar un vigía de Seguridad y Salud en el Trabajo, encargado de desarrollar funciones preventivas equivalentes (Ministerio del Trabajo, 2015).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img14.png', alt='' style="max-width: 500px").m-auto
      Separador
      #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.4 Seguridad industrial
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img15.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p La seguridad industrial integra medidas preventivas para controlar condiciones peligrosas, proteger al personal y favorecer la continuidad de las operaciones.
      p.mb-5 Su aplicación comprende prácticas y controles que permiten reducir la exposición a riesgos y fortalecer la actuación segura:
      TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Prácticas operativas seguras")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img16.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Prácticas operativas seguras
              p Comprenden la inspección periódica de instalaciones, equipos y rutas de evacuación, así como la detección de fallas y la aplicación de procedimientos de emergencia para anticipar y corregir irregularidades (ASIS International, 2011). 
              p.mb-0 #[b Ejemplo:] una luminaria deteriorada en una ruta de evacuación debe reportarse, delimitarse temporalmente y gestionarse para evitar accidentes.
        .py-3.py-md-4(titulo="Prevención mediante disciplina")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img17.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Prevención mediante disciplina
              p La disciplina operativa garantiza el cumplimiento de rutas, horarios, protocolos, registros y normas de conducta. Su finalidad es reducir improvisaciones y prevenir decisiones que comprometan la integridad del personal (ASIS International, 2011).
              p.mb-0 #[b Ejemplo:] ante el abandono injustificado de un puesto, la intervención disciplinaria permite prevenir fallas de vigilancia y reforzar el cumplimiento de las responsabilidades asignadas.
        .py-3.py-md-4(titulo="Control de acceso")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img18.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Control de acceso
              p El control de acceso restringe el ingreso a zonas con riesgos térmicos, eléctricos, químicos o mecánicos. También reduce la exposición a sabotajes, accidentes y manipulaciones indebidas (ASIS International, 2011).
              p.mb-0 #[b Ejemplo:] la restricción de ingreso a una zona de calderas protege al personal frente a quemaduras, explosiones y sobrecalentamientos.
        .py-3.py-md-4(titulo="Lenguaje técnico")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img19.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Lenguaje técnico
              p El lenguaje estandarizado facilita la comunicación y reduce errores durante la operación. Términos como incidente, reporte, protocolo, desviación y operación segura deben conservar un significado uniforme (ASIS International, 2011).
              p.mb-0 #[b Ejemplo:] la instrucción «activar protocolo de verificación nivel 2» permite coordinar la respuesta cuando su significado ha sido previamente establecido.

</template>

<script>
export default {
  name: 'Tema5',
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
