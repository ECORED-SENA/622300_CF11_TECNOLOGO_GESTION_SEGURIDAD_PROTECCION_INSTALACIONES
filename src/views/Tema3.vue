<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Protección de datos personales en videovigilancia
      p.mb-5 La protección de datos en videovigilancia exige gestionar la información personal conforme a criterios legales, éticos y organizacionales. Se invita al aprendiz a consultar el video para fortalecer su tratamiento responsable:
      figure(data-aos="zoom-in").mb-0
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Protección de Datos Personales: Ley 1581 de 2012
      Separador
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Naturaleza de los datos personales
      p.mb-5 Las imágenes, los videos y los registros de videovigilancia constituyen datos personales cuando permiten identificar directa o indirectamente a una persona. La naturaleza de estos datos puede comprenderse mediante los siguientes aspectos relacionados con su contenido, sensibilidad y condiciones de tratamiento:
      .bg-2
        .px-5
          .row.justify-content-center.mb-0
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t3/img1.png', alt="" ).m-auto
                  h4.text-center Información identificable
                  .caja-2_p
                    p.mb-0.text-center Los registros pueden contener rasgos físicos, comportamientos, desplazamientos y demás elementos que permiten identificar directa o indirectamente a una persona.
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t3/img2.png', alt="" ).m-auto
                  h4.text-center Información sensible
                  .caja-2_p
                    p.mb-0.text-center Los datos pueden revelar rutinas, horarios, relaciones y actividades vinculadas con la vida cotidiana o con la operación de una instalación.
            .col-xl-4.col-md-9(data-aos="fade-left")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t3/img3.png', alt="" ).m-auto
                  h4.text-center Tratamiento protegido
                  .caja-2_p
                    p.mb-0.text-center La información debe utilizarse exclusivamente para los fines autorizados y protegerse contra el acceso, la divulgación o el uso indebidos (ASIS International, 2012).
          Separador
          #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 3.2 Confidencialidad de la información operacional
          p.mb-5 La confidencialidad restringe el acceso a la información operacional y evita su divulgación, manipulación o utilización por personas que carecen de autorización. La aplicación de este principio comprende condiciones específicas relacionadas con la clasificación, el acceso y la responsabilidad del personal:
      .row.align-items-center.mb-0
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img4.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Información confidencial").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los datos de usuarios, contraseñas, configuraciones, planos, reportes de alarmas, registros electrónicos y ubicación de dispositivos deben clasificarse como información confidencial (ASIS International, 2012).
            .row(titulo="Acceso restringido").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La información solo debe estar disponible para el personal autorizado. Esta restricción previene accesos indebidos y protege la integridad del sistema.
            .row(titulo="Responsabilidad del personal").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El acceso exige autorización, capacitación específica y cumplimiento de las normas de confidencialidad. Estas condiciones previenen la manipulación y divulgación inadecuadas (ASIS International, 2012).
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.3 Protección de información sensible
      p La protección de información sensible requiere procedimientos que garanticen su control, custodia, integridad y utilización exclusivamente para las funciones autorizadas.
      p.mb-5 El tratamiento seguro de la información se fundamenta en cuatro medidas complementarias que reducen los riesgos de pérdida, alteración o acceso indebido:
      .bg-slider.mb-0
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Control de acceso
                  p.mb-0 Los datos y registros solo deben ser consultados o gestionados por personal autorizado mediante credenciales, contraseñas y permisos que garanticen trazabilidad (ASIS International, 2012).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Custodia del material
                  p.mb-0 Los registros deben conservarse en dispositivos protegidos. La custodia comprende copias de seguridad, control de consultas y almacenamiento durante el periodo establecido (ASIS International, 2012).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Protección física y tecnológica
                  p.mb-0 Los equipos que almacenan información deben permanecer en áreas restringidas y contar con claves seguras, registros de actividad y sistemas de respaldo (ASIS International, 2012).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Manejo responsable
                  p.mb-0 La información debe utilizarse únicamente para las funciones de seguridad. Su entrega a terceros requiere procedimientos formales que garanticen autorización y trazabilidad (ASIS International, 2012).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img8.png', alt='' style="max-width: 500px").m-auto
      Separador
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.4 Principios para el manejo de datos
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-3(data-aos="fade-right").mb-3
            p.mb-0 El manejo de datos personales en videovigilancia se fundamenta en principios que regulan su utilización, protección, conservación y disponibilidad dentro del servicio.
          p.mb-0 Estos principios establecen las condiciones esenciales para gestionar la información de manera segura, limitada y coherente con las funciones autorizadas y se detallan en la siguiente tabla:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img9.jpg', alt='' style="width: 500px").m-auto
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 3.
        span Principios de protección de datos personales en videovigilancia
      .tabla-a(data-aos="zoom-in").mb-0
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Principio
              th.texto-left Descripción
          tbody
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Principio de necesidad
              td.texto-left La información debe utilizarse exclusivamente para fines propios del servicio, como verificar incidentes, analizar irregularidades o apoyar procesos de supervisión (ASIS International, 2012).
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Principio de reserva
              td.texto-left El acceso al material debe permanecer limitado. Su divulgación requiere autorización formal debido al carácter sensible de la información registrada (ASIS International, 2012).
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Principio de integridad
              td.texto-left Los registros no deben alterarse ni modificarse. Su conservación garantiza valor probatorio y correspondencia con los acontecimientos registrados (ASIS International, 2012).
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Principio de disponibilidad restringida
              td.texto-left La información solo debe estar disponible para quienes la requieran dentro de sus funciones. Cada acceso o entrega debe quedar documentado (ASIS International, 2012).

</template>

<script>
export default {
  name: 'Tema3',
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
