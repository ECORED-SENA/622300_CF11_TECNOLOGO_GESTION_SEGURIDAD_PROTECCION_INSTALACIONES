<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Estadística e información operativa
      p.mb-5 La estadística operativa convierte los registros del servicio en información útil para fundamentar decisiones, fortalecer la prevención y mejorar la gestión de seguridad. Su aplicación aporta criterios generales para organizar la información, sustentar decisiones y fortalecer la gestión basada en evidencia:
      .bg-2
        .px-5
          .row.justify-content-center.mb-0
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t4/img1.png', alt="" ).m-auto
                  h4.text-center Información organizada
                  .caja-2_p
                    p.mb-0.text-center La estadística permite transformar los registros operativos en información estructurada, confiable y útil para la gestión de seguridad.
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t4/img2.png', alt="" ).m-auto
                  h4.text-center Decisiones fundamentadas
                  .caja-2_p
                    p.mb-0.text-center El análisis de datos respalda la asignación de recursos, la evaluación de controles y la priorización de las medidas preventivas.
            .col-xl-4.col-md-9(data-aos="fade-left")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t4/img3.png', alt="" ).m-auto
                  h4.text-center Gestión preventiva
                  .caja-2_p
                    p.mb-0.text-center La información histórica contribuye a anticipar riesgos, fortalecer la protección de activos y mejorar continuamente la operación.
          Separador
          #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 4.1 Fundamentos de estadística descriptiva
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              .caja-3.color-1(data-aos="fade-right").mb-3
                p.mb-0 La estadística descriptiva organiza, analiza e interpreta datos de la operación para identificar comportamientos recurrentes y apoyar decisiones relacionadas con la seguridad.
              p.mb-0 Sus fundamentos se relacionan con la recopilación, clasificación e interpretación de datos operativos, como se explica en los siguientes apartados:
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t4/img4.jpg', alt='' style="width: 500px").m-auto
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-0
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t4/img5.png', alt='' style="max-width: 300px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")(data-aos="zoom-in").mb-5
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t4/img6.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Estadística descriptiva
                    p.mb-0.text-center Organiza y resume los datos derivados de la operación para facilitar su interpretación y apoyar la toma de decisiones estratégicas (ASIS International, 2009).
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t4/img7.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Acumulación de datos
                    p.mb-0.text-center El registro continuo permite determinar la frecuencia, la ubicación y los periodos en que ocurren los incidentes.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t4/img8.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Variables operativas
                    p.mb-0.text-center Los datos pueden incluir fecha, hora, ubicación, tipo de incidente, comportamiento del responsable, acciones ejecutadas y consecuencias generadas.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t4/img9.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Utilidad preventiva
                    p.mb-0.text-center La interpretación de los datos permite identificar patrones, puntos vulnerables y periodos críticos para fortalecer la prevención y asignar recursos (ASIS International, 2009).
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.2 Tablas de frecuencia
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img10.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Las tablas de frecuencia agrupan los incidentes registrados y permiten establecer cuántas veces ocurre cada evento durante un periodo determinado.
      p.mb-5 La construcción de estas tablas comprende una secuencia que garantiza la organización y el análisis adecuado de la información:
      .bg-1
        .px-5
          .row.justify-content-center.mb-0
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Registrar los incidentes
                    p.mb-0 Cada evento debe documentarse en bitácoras, reportes o sistemas institucionales con información completa y verificable.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img11.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img12.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Definir las categorías
                    p.mb-0 Los incidentes pueden clasificarse por fecha, horario, ubicación, tipo de riesgo, nivel de gravedad u otra variable pertinente.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Contabilizar las frecuencias
                    p.mb-0 Se determina la cantidad de veces que aparece cada categoría dentro del periodo analizado.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img13.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img14.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Interpretar los resultados
                    p.mb-0 Las frecuencias permiten establecer relaciones entre variables e identificar eventos persistentes o periodos de mayor vulnerabilidad (ASIS International, 2009).
          Separador
          #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 4.3 Histogramas e intervalos de clase
      p.mb-5 Los histogramas representan la distribución de los eventos agrupados en intervalos y facilitan la identificación de concentraciones, variaciones y comportamientos recurrentes. La organización gráfica de los datos comprende elementos que facilitan su distribución e interpretación dentro del análisis operativo:
      .bg-2
        .px-5
          .row.justify-content-center.mb-0
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t4/img15.png', alt="" ).m-auto
                  h4.text-center Intervalos de clase
                  .caja-2_p
                    p.mb-0.text-center Los datos se agrupan en rangos definidos, como periodos horarios, cantidades de incidentes o tiempos de respuesta.
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t4/img16.png', alt="" ).m-auto
                  h4.text-center Distribución de eventos
                  .caja-2_p
                    p.mb-0.text-center El histograma representa la frecuencia correspondiente a cada intervalo y permite reconocer concentraciones y variaciones.
            .col-xl-4.col-md-9(data-aos="fade-left")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t4/img17.png', alt="" ).m-auto
                  h4.text-center Aplicación operativa
                  .caja-2_p
                    p.mb-0.text-center La distribución facilita la toma de decisiones, la predicción del riesgo y la asignación de controles en periodos o zonas críticas (ASIS International, 2009).
          Separador
          #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 4.4 Valor histórico de los datos
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img18.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p La estadística descriptiva es el reconocimiento del valor histórico de los registros como fuente principal para identificar tendencias y prever incidentes futuros. La experiencia histórica constituye uno de los recursos más valiosos para la protección de activos, siempre que los registros sean completos, confiables y organizados adecuadamente (ASIS International, 2009).
      p.mb-5 El aprovechamiento de estos registros aporta diferentes posibilidades para fortalecer el análisis y la gestión preventiva:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-0
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t4/img19.png', alt='' style="max-width: 300px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")(data-aos="zoom-in").mb-5
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t4/img20.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Comportamientos delictivos
                    p.mb-0.text-center Los registros históricos permiten identificar patrones relacionados con incidentes, horarios, lugares y modalidades recurrentes.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t4/img21.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Fallas repetitivas
                    p.mb-0.text-center La información acumulada facilita reconocer deficiencias frecuentes en los sistemas, procedimientos o controles.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t4/img22.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Medidas preventivas
                    p.mb-0.text-center La comparación de periodos permite evaluar si las medidas implementadas redujeron los incidentes o requieren ajustes.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t4/img23.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Probabilidad de recurrencia
                    p.mb-0.text-center Los antecedentes aportan información para estimar la posibilidad de repetición de determinados eventos.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t4/img24.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Priorización de recursos
                    p.mb-0.text-center Los resultados permiten asignar personal, equipos y medidas de mitigación según los niveles de riesgo identificados (ASIS International, 2009).
      p.mb-0 La confiabilidad del análisis depende de que los registros sean completos, consistentes, precisos y organizados.
      Separador
      #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.5 Bases de datos y sistematización
      .caja-4.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-4_p
            p.mb-0 Las bases de datos permiten almacenar, clasificar y procesar información operativa para fortalecer el análisis de riesgos y la gestión de los controles.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t4/img25.png', alt='' style="width: 500px").m-auto
      p.mb-5 La sistematización se desarrolla mediante actividades relacionadas que garantizan la calidad, organización y utilidad de la información registrada:
      TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Estructuración de la información")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img26.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Estructuración de la información
              p.mb-0 Las bases de datos organizan la información operativa para facilitar su consulta y análisis sistemático (ASIS International, 2009).
        .py-3.py-md-4(titulo="Datos operativos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img27.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Datos operativos
              p.mb-0 Incluyen fecha, hora, ubicación, características del incidente, forma de actuación, tiempos de respuesta y acciones adoptadas.
        .py-3.py-md-4(titulo="Utilidad para la seguridad")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img28.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Utilidad para la seguridad
              p.mb-0 La sistematización permite anticipar riesgos, mejorar controles e identificar patrones emergentes. Su eficacia depende de registros precisos y confiables (ASIS International, 2009).
      Separador
      #t_4_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.6 Consolidación y comunicación de resultados
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t4/img29.jpg', alt='' style="width: 500px").m-auto
        .col-xl
          .caja-3.color-1(data-aos="fade-left").mb-3
            p.mb-0 La consolidación transforma los registros operativos en información estructurada para evaluar procedimientos, comunicar resultados y apoyar decisiones de supervisión y mejoramiento.
          p.mb-0 Este proceso comprende dos componentes relacionados que permiten organizar la información y comunicarla conforme a criterios técnicos:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Consolidación de resultados")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img30.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Consolidación de resultados
              p La consolidación integra información procedente de minutas, bitácoras, reportes, formularios y sistemas electrónicos. Su análisis permite:
              ul.fa-ul.estilo___ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Reconstruir acontecimientos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Identificar tendencias y desviaciones. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Comparar registros documentales y electrónicos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Mantener continuidad entre turnos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Seleccionar información pertinente para la supervisión. 
              p.mb-0 La información debe filtrarse y sintetizarse para evitar que los datos relevantes se pierdan entre registros rutinarios o fragmentados (DEAS, s. f.).
        .py-3.py-md-4(titulo="Comunicación de resultados")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img31.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Comunicación de resultados
              p Los informes convierten la información consolidada en un insumo técnico para la supervisión y la toma de decisiones. Su elaboración debe cumplir criterios de claridad, precisión, objetividad, orden cronológico y utilidad operativa (DEAS, s. f.).
              p.mb-0 También deben incorporar la identificación del evento, los datos verificables, las acciones ejecutadas, las comunicaciones realizadas y los resultados obtenidos.
      p.mb-5 El siguiente documento amplía los criterios técnicos para consolidar registros y elaborar informes operativos verificables, coherentes y útiles para la toma de decisiones:
      .caja-5.mb-0(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t4/img32.svg', alt='' style="max-width: 85px").m-auto
          .col-xl.mb-4.mb-lg-0
            h4 Anexo 1. Orientaciones técnicas para consolidar y comunicar resultados operativos
            p.mb-0 Se invita a consultar el documento complementario #[b Anexo 1. Orientaciones técnicas para consolidar y comunicar resultados operativos] para profundizar en la consolidación, organización y comunicación de los resultados operativos.
          .col-xl-2
            a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexos/Anexo_01_Orientaciones_Tecnicas_Consolidar_Resultados_Operativos.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download
      Separador
      #t_4_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.7 Variables de influencia
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img33.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Las variables de influencia representan características que pueden explicar cambios en los resultados y contribuir al análisis de riesgos, vulnerabilidades e indicadores operativos. 
      p.mb-5 Su análisis requiere comprender aspectos relacionados con su definición, clasificación, selección y capacidad para producir información pertinente:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img34.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Concepto").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Una variable corresponde a una propiedad o característica que puede asumir diferentes valores. Puede expresarse mediante datos numéricos o categorías (Fundación Universitaria Luis Amigó, s. f.).
            .row(titulo="Clasificación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Las variables pueden clasificarse según su función como independientes, dependientes, moderadoras, mediadoras o de control. También pueden ser cuantitativas o cualitativas (Terapia Cognitiva, s. f.).
            .row(titulo="Selección").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La elección debe sustentarse en su relación con el fenómeno, los objetivos del análisis, la disponibilidad de datos y la posibilidad de medición (Scribbr, s. f.).
            .row(titulo="Calidad de los indicadores").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los indicadores deben cumplir criterios de pertinencia, confiabilidad, sensibilidad al cambio y factibilidad para garantizar su utilidad práctica (United Nations Statistics Division, 2015; FAO, s. f.).
      p.mb-5 El siguiente documento profundiza en los fundamentos y métodos utilizados para seleccionar, analizar y convertir variables de influencia en indicadores confiables:
      .caja-5.mb-0(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t4/img35.svg', alt='' style="max-width: 85px").m-auto
          .col-xl.mb-4.mb-lg-0
            h4 Anexo 2. Criterios metodológicos para seleccionar y analizar variables de influencia
            p.mb-0 Se invita a consultar la lectura complementaria “#[b Anexo 2. Criterios metodológicos para seleccionar y analizar variables de influencia]”, con el fin de profundizar en su clasificación, medición y aplicación en el análisis operativo.
          .col-xl-2
            a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexos/Anexo_02_Criterios_Metodologicos_Seleccionar_Variables.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download
      Separador
      #t_4_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.8 Plan de acción
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-3.color-1(data-aos="fade-right").mb-3
            p.mb-0 El plan de acción transforma el análisis de riesgos en medidas organizadas y verificables destinadas a prevenir incidentes, corregir fallas y fortalecer la protección. 
          p.mb-0 Su elaboración comprende componentes que permiten definir las acciones, asignar recursos, establecer plazos y evaluar la eficacia de las medidas implementadas:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img36.jpg', alt='' style="width: 500px").m-auto
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Identificar el riesgo
                    p.mb-0 Se determinan las amenazas, vulnerabilidades y necesidades operativas que requieren intervención prioritaria.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img37.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img38.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Formular el objetivo
                    p.mb-0 El objetivo debe ser claro, medible y alcanzable, y debe indicar qué se pretende corregir, prevenir o mejorar.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Definir el lugar
                    p.mb-0 Se establece el área específica donde se ejecutarán las acciones, como un puesto, perímetro, acceso o centro de control.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img39.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img40.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Asignar los recursos
                    p.mb-0 Se determinan los recursos financieros, físicos, técnicos, tecnológicos y económicos necesarios para implementar las medidas.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Establecer el tiempo
                    p.mb-0 El cronograma define los plazos de ejecución según la urgencia, la disponibilidad de recursos y la complejidad de las acciones.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img41.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img42.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Realizar seguimiento
                    p.mb-0 Las supervisiones, revisiones documentales e indicadores permiten verificar el cumplimiento de las actividades y detectar dificultades (DEAS, s. f.).
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Evaluar los resultados
                    p.mb-0 La evaluación compara los resultados con los objetivos, determina la reducción del riesgo y establece ajustes o nuevas medidas.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img43.png', alt='' style="width: 300px").m-auto
      p.mb-5 La aplicación de estos elementos se concreta en el siguiente caso que integra objetivos, recursos, acciones, plazos y mecanismos de seguimiento y evaluación:
      .caja-4.mb-0.color-2(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-4_p
            h5 Ejemplo aplicado
            p Una instalación registra alarmas no verificadas debido a fallas recurrentes en los sensores perimetrales. Para atender esta situación, el plan de acción se estructura mediante los siguientes elementos:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Objetivo:] reducir en un 60 % las señales falsas. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Lugar:] puntos del perímetro con mayor incidencia. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Recursos:] sensores, herramientas de calibración y personal técnico. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Tiempo:] dos semanas. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Acciones:] revisar y reemplazar los equipos, además de capacitar al personal. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Seguimiento:] comparar semanalmente la cantidad de falsas alarmas. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Evaluación:] determinar la eficacia de las medidas implementadas. 
            p.mb-0 Los resultados obtenidos permiten establecer si las acciones redujeron las falsas alarmas o si se requieren nuevos ajustes. De esta manera, el plan se articula con la fase Actuar del ciclo PHVA y fortalece el mejoramiento continuo del servicio (DEAS, s. f.).
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t4/img44.jpg', alt='' style="width: 550px").m-auto

</template>

<script>
export default {
  name: 'Tema4',
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
