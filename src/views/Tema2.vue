<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Gestión estratégica de PQRSF y resolución de conflictos
      p.mb-5 La gestión estratégica de PQRSF transforma las interacciones con los clientes en información útil para fortalecer la calidad, la confianza y el desempeño institucional. Su aporte estratégico comprende aspectos generales relacionados con la creación de valor y el fortalecimiento organizacional:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img1.png', alt="" ).m-auto
                  h4.text-center Información estratégica
                  .caja-2_p
                    p.mb-0.text-center Las peticiones, quejas, reclamos, sugerencias y felicitaciones proporcionan información sobre necesidades, expectativas, experiencias y oportunidades relacionadas con el servicio.
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img2.png', alt="" ).m-auto
                  h4.text-center Creación de valor
                  .caja-2_p
                    p.mb-0.text-center La gestión adecuada de las interacciones permite anticipar necesidades, fortalecer la lealtad y convertir las inconformidades en oportunidades de mejoramiento.
            .col-xl-4.col-md-9(data-aos="fade-left")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img3.png', alt="" ).m-auto
                  h4.text-center Cultura organizacional
                  .caja-2_p
                    p.mb-0.text-center Un sistema formal de PQRSF integra recursos y competencias para promover la proactividad, el aprendizaje continuo y la innovación.
          p.mb-5 Se invita al aprendiz a consultar el video sobre atención de PQRS para fortalecer la comprensión del proceso y aplicar sus orientaciones en el servicio.
          figure(data-aos="zoom-in").mb-0
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video. Atención de PQRS (Peticiones, Quejas, Reclamos y Sugerencias)
      Separador
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Fundamentos del sistema de atención
      p.mb-5 El sistema de PQRSF centraliza las interacciones con los clientes y convierte sus aportes en información útil para la toma de decisiones. Cada componente cumple una función estratégica dentro del sistema de atención, como se relaciona en la siguiente tabla:
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 1.
        span Componentes del sistema de atención
      .tabla-a(data-aos="zoom-in").mb-5
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Componente del sistema
              th.texto-left Función estratégica
          tbody
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Peticiones
              td.texto-left Permiten identificar necesidades, expectativas y demandas no satisfechas. Su análisis contribuye a ajustar o ampliar la oferta de productos y servicios.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Quejas
              td.texto-left Informan sobre fallas en los procesos o en la prestación del servicio. Constituyen una fuente de diagnóstico para implementar mejoras internas.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Reclamos
              td.texto-left Expresan inconformidades que requieren corrección, compensación o respuesta institucional. Su adecuada gestión reduce riesgos y puede fortalecer la confianza del cliente.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Sugerencias
              td.texto-left Aportan ideas para mejorar productos, servicios y experiencias. También permiten identificar oportunidades de innovación y nuevas necesidades del mercado.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Felicitaciones
              td.texto-left Validan las fortalezas del servicio e identifican las competencias más valoradas por los clientes. Además, fortalecen la motivación y la cultura organizacional.
      p.mb-0 La percepción del cliente permite identificar brechas entre el servicio esperado y el recibido, conforme al seguimiento de la satisfacción establecido en la ISO 10004.
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Marco estratégico para la gestión de PQRSF
      p.mb-5 El sistema de PQRSF apoya el diagnóstico organizacional y relaciona las experiencias de los clientes con la planeación y la toma de decisiones. La información recopilada permite identificar factores internos y externos, un pilar del diagnóstico estratégico, que influyen en el cumplimiento de los propósitos institucionales:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Fortalezas")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img4.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Fortalezas
              p Las felicitaciones recurrentes permiten reconocer capacidades internas que generan valor y ventajas competitivas.
              p.mb-0 #[b Ejemplo:] las felicitaciones por la rapidez de atención confirman una fortaleza asociada con la capacidad de respuesta.
        .py-3.py-md-4(titulo="Debilidades")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img5.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Debilidades
              p Las quejas y los reclamos sistemáticos permiten identificar fallas internas que requieren corrección o rediseño.
              p.mb-0 #[b Ejemplo:] los reclamos por facturas incorrectas evidencian una debilidad en el proceso de facturación.
        .py-3.py-md-4(titulo="Oportunidades")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img6.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Oportunidades
              p Las sugerencias permiten reconocer necesidades del mercado, alternativas de innovación y segmentos que podrían ser atendidos.
              p.mb-0 #[b Ejemplo:] las solicitudes de empaques ecológicos pueden sustentar el desarrollo de una nueva línea sostenible.
        .py-3.py-md-4(titulo="Amenazas")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img7.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Amenazas
              p El aumento de inconformidades relacionadas con competidores, tecnologías o cambios del mercado puede advertir riesgos para la organización.
              p.mb-0 #[b Ejemplo:] las comparaciones negativas sobre los tiempos de entrega pueden indicar una amenaza competitiva.
      p.mb-0 La información derivada de las PQRSF contribuye al análisis DOFA y permite verificar si las actuaciones institucionales corresponden con la misión y favorecen el avance hacia la visión.
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Diseño y gestión de canales de atención
      p.mb-5 La gestión multicanal facilita una atención integrada, accesible y coherente, de acuerdo con las características y necesidades de los diferentes grupos de clientes. Los canales de atención cumplen funciones complementarias y deben gestionarse mediante criterios comunes de calidad, accesibilidad, seguridad y oportunidad:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img8.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Canal presencial").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Facilita la atención de situaciones complejas y de personas con necesidades especiales o limitaciones de acceso digital. Debe contar con condiciones de accesibilidad y atención equitativa, conforme al Decreto 1538 de 2005.
            .row(titulo="Canal telefónico").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite atender trámites, consultas e inconformidades sin importar la ubicación del cliente. Su eficacia depende de la capacidad para brindar respuestas completas, oportunas y claras.
            .row(titulo="Canal virtual").ajuste-cajaAcordion.ajuste-vineta
              p Facilita la gestión ágil de solicitudes y reduce costos operativos. Su administración debe garantizar seguridad, confianza y protección de los datos personales.
              p El canal virtual debe incorporar:
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Identificación clara de la organización. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Políticas de privacidad y seguridad comprensibles. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Consentimiento para el tratamiento de datos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Formularios con campos obligatorios y opcionales claramente diferenciados. 
              p.mb-3 Estos criterios se relacionan con los principios de transparencia y usabilidad establecidos en la ISO 10008.
      p.mb-0 La estandarización de los protocolos permite que los diferentes canales mantengan criterios comunes de calidad y eviten una experiencia fragmentada.
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.4 Protocolos de actuación
      p.mb-5 Los protocolos de actuación orientan una interacción respetuosa, clara y profesional, y favorecen la gestión adecuada de las necesidades e inconformidades del cliente. La actuación del personal se fundamenta en principios que fortalecen la comunicación, la confianza y la calidad de la atención:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t2/img9.png', alt='' style="max-width: 300px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")(data-aos="zoom-in").mb-5
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img10.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Atención o escucha activa
                    p.mb-0.text-center Implica comprender el contexto, la emoción y la necesidad expresada por el cliente, sin limitarse únicamente a las palabras comunicadas.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img11.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Empatía
                    p.mb-0.text-center Permite comprender las expectativas del cliente y validar sus sentimientos, generando confianza y favoreciendo una interacción respetuosa.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img12.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Lenguaje claro y sencillo
                    p.mb-0.text-center La información debe comunicarse sin tecnicismos innecesarios, de manera que el cliente comprenda los procedimientos, las opciones disponibles y los pasos requeridos (ISO 10008).
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img13.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Profesionalismo y respeto
                    p.mb-0.text-center El personal debe mantener una conducta íntegra, respetuosa y serena, incluso durante situaciones de tensión, reflejando los valores institucionales.
      p.mb-0 Estos principios deben aplicarse consistentemente dentro de un proceso estructurado que garantice la eficacia y la calidad del servicio.
      Separador
      #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.5 Fases de gestión de un caso
      p.mb-5 La gestión de un caso PQRSF sigue una secuencia estructurada que garantiza trazabilidad, cumplimiento de plazos y coherencia en la respuesta institucional. El tratamiento integral del caso se desarrolla mediante cinco fases consecutivas, desde su ingreso al sistema hasta la verificación de la solución:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Recepción y registro
                    p.mb-0 La interacción debe registrarse en el sistema institucional, independientemente del canal utilizado. El registro debe incluir los datos necesarios, diferenciando los obligatorios de los opcionales (ISO 10008).
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img14.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img15.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Análisis y clasificación
                    p.mb-0 El caso se clasifica como petición, queja, reclamo, sugerencia o felicitación. También se determina su categoría, prioridad y nivel de detalle.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Gestión y trámite
                    p.mb-0 El caso se asigna al área responsable. Durante esta fase se controlan las actuaciones y los plazos establecidos por la normativa aplicable.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img16.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img17.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Respuesta al cliente
                    p.mb-0 La respuesta debe ser clara, completa, respetuosa y oportuna. También debe comunicar las decisiones adoptadas y sus fundamentos.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Seguimiento y cierre
                    p.mb-0 La organización verifica la eficacia de la solución y la satisfacción del cliente. La información obtenida aporta datos para la mejora continua, conforme a la ISO 10004.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img18.png', alt='' style="width: 300px").m-auto
      p.mb-0 El ciclo se relaciona con el enfoque por procesos promovido por la NTCGP 1000:2004 y la familia de normas ISO 9000.
      Separador
      #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.6 Gestión y resolución de conflictos
      p.mb-5 La gestión de conflictos transforma las situaciones de tensión en oportunidades para recuperar la confianza, fortalecer la relación y generar aprendizajes institucionales. La atención de un conflicto requiere un protocolo desarrollado mediante una secuencia organizada que permita comprender el caso, asumir responsabilidades y establecer soluciones verificables:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3  Escuchar sin interrumpir
                    p.mb-0 El cliente debe contar con el espacio necesario para comunicar su inconformidad. El personal debe concentrarse en comprender la situación y la emoción asociada.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img19.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img20.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Demostrar empatía y validar la emoción
                    p.mb-0 Antes de plantear una solución, se reconoce la afectación expresada por el cliente. Esta actuación reduce la tensión y fortalece la confianza.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Asumir responsabilidad
                    p.mb-0 La organización ofrece una disculpa sincera por la experiencia negativa y reconoce el impacto generado, sin atribuir responsabilidades que no hayan sido confirmadas.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img21.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img22.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Buscar una solución y comprometerse
                    p.mb-0 El cliente participa en la definición de una alternativa viable. La respuesta debe incluir acciones concretas, responsables y condiciones de cumplimiento.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Realizar seguimiento y confirmar la solución
                    p.mb-0 La organización verifica la ejecución del acuerdo y contacta al cliente para confirmar la resolución del caso. Esta fase permite recuperar la confianza y fortalecer la lealtad.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img23.png', alt='' style="width: 300px").m-auto
      p.mb-0 La resolución efectiva atiende el caso particular y genera información estratégica para prevenir situaciones similares y fortalecer la mejora continua (ISO 10008).
      Separador
      #t_2_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.7 Planes de mejoramiento continuo
      p.mb-5 Los planes de mejoramiento convierten los hallazgos de PQRSF en acciones verificables para fortalecer el desempeño institucional, como se detalla en la siguiente tabla:
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 2.
        span Modelo básico de plan de mejoramiento
      .tabla-a(data-aos="zoom-in").mb-5
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Hallazgo/Problema Raíz
              th.ajuste-border-tabla.texto-left Acción Correctiva Propuesta
              th.ajuste-border-tabla.texto-left Responsable
              th.ajuste-border-tabla.texto-left Plazo de Ejecución
              th.ajuste-border-tabla.texto-left Indicador de Éxito (KPI)
              th.texto-left Estado
          tbody
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Aumento del 20% en quejas por demoras en la entrega (logística externa).
              td.ajuste-border-tabla.texto-left Implementar un nuevo software de optimización de rutas.
              td.ajuste-border-tabla.texto-left Gerente de Logística
              td.ajuste-border-tabla.texto-left 3 meses
              td.ajuste-border-tabla.texto-left Reducción del tiempo promedio de entrega en un 15%.
              td.texto-left En progreso
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Sugerencias recurrentes para incluir una opción de pago A.
              td.ajuste-border-tabla.texto-left Desarrollar e integrar la nueva pasarela de pago en el canal virtual.
              td.ajuste-border-tabla.texto-left Director de TI
              td.ajuste-border-tabla.texto-left 6 semanas
              td.ajuste-border-tabla.texto-left El 10% de las transacciones se realizan a través del nuevo método.
              td.texto-left Completado
      p.mb-0 El seguimiento del plan permite evaluar resultados y realizar ajustes, convirtiendo la información de las PQRSF en oportunidades de mejora, innovación y fortalecimiento institucional.

</template>

<script>
export default {
  name: 'Tema2',
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
