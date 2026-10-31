<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      p A continuación, se presenta una síntesis de la temática estudiada por el componente formativo.
      .row.justify-content-center
        .col-lg-10.mb-5.bgs.p-4.brad
          figure
            img(src="@/assets/curso/sintesis.svg", alt="El mapa conceptual sintetiza la gestión operativa, administrativa y procedimental como un sistema integral orientado a garantizar el control, la trazabilidad, la protección y la mejora continua del servicio de seguridad. Para ello, articula los procesos administrativos de organización, clasificación y orden; la administración del personal, la tecnología y la documentación; y el enfoque sistémico apoyado en el ciclo PHVA. Asimismo, relaciona la evaluación del desempeño, los registros, las PQRSF, la estadística y los planes de acción con la seguridad y salud en el trabajo. Finalmente, incorpora la gestión de datos, los sistemas de monitoreo, los protocolos operativos, la cadena de mando, las autoridades y las redes de apoyo para coordinar respuestas oportunas según el nivel de riesgo.")
        .col-auto
          a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/bullets/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
