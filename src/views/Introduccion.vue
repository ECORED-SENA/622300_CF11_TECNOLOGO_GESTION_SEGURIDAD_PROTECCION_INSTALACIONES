<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      p.mb-5 La gestión operativa, administrativa y procedimental articula los recursos, las funciones y los controles necesarios para prestar servicios de seguridad privada con continuidad, calidad y trazabilidad. Su aplicación permite organizar responsabilidades, coordinar equipos y documentar las actuaciones conforme a los protocolos institucionales y la normativa vigente.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .caja-1(data-aos="fade-right")
            p.mb-0 El componente aborda la administración de sistemas, la evaluación del servicio, las PQRSF, la protección de datos y el análisis estadístico de la información. También integra la seguridad y salud en el trabajo, la protección personal, la confidencialidad y la custodia de registros como fundamentos para prevenir riesgos y fortalecer la mejora continua.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/intro/img1.jpg', alt='' style="width: 300px").m-auto
        .col-xl
          p.mb-0 Finalmente, se desarrollan criterios para operar sistemas de monitoreo, proteger la infraestructura tecnológica, aplicar protocolos y comunicar incidentes a autoridades y redes de apoyo. Estos contenidos fortalecen la capacidad del aprendiz para actuar de manera organizada, interpretar información operativa y adoptar decisiones fundamentadas ante situaciones rutinarias o críticas, preservando a las personas, los activos y la continuidad del servicio de seguridad.
      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
