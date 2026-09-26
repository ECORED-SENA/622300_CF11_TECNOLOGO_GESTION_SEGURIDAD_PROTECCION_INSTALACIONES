export default {
  global: {
    Name: 'Gestión operativa, administrativa y procedimental',
    Description:
      'El componente desarrolla criterios para organizar recursos, evaluar servicios, gestionar PQRSF, proteger información y aplicar medidas de seguridad laboral y personal. Además, integra el monitoreo electrónico, los protocolos operativos y la coordinación con autoridades y redes de apoyo para fortalecer la prevención, la trazabilidad y la continuidad del servicio.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Procesos administrativos del supervisor',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Función administrativa de organización',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Manejo de recursos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Administración de sistemas',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Herramientas para evaluar el servicio',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión estratégica de PQRSF y resolución de conflictos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Fundamentos del sistema de atención',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Marco estratégico para la gestión de PQRSF',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Diseño y gestión de canales de atención',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Protocolos de actuación',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Fases de gestión de un caso',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Gestión y resolución de conflictos',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Planes de mejoramiento continuo',
            hash: 't_2_7',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Protección de datos personales en videovigilancia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Naturaleza de los datos personales',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Confidencialidad de la información operacional',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Protección de información sensible',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Principios para el manejo de datos',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Estadística e información operativa',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Fundamentos de estadística descriptiva',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tablas de frecuencia',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Histogramas e intervalos de clase',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Valor histórico de los datos',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Bases de datos y sistematización',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Consolidación y comunicación de resultados',
            hash: 't_4_6',
          },
          {
            numero: '4.7',
            titulo: 'Variables de influencia',
            hash: 't_4_7',
          },
          {
            numero: '4.8',
            titulo: 'Plan de acción',
            hash: 't_4_8',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Seguridad y salud en el trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Sistema de Gestión de la Seguridad y Salud en el Trabajo',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Sistemas de protección del personal',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'COPASST en las empresas',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Seguridad industrial',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Procedimientos de seguridad y protección personal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Protección personal',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Manejo de medidas de protección personal',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Seguridad digital, monitoreo y prestación del servicio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Seguridad digital, confidencialidad y custodia',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Operación del <i>software</i> de monitoreo',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Sistema central de alarmas',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Condiciones de prestación del servicio',
            hash: 't_7_4',
          },
          {
            numero: '7.5',
            titulo: 'Protocolo operativo',
            hash: 't_7_5',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Notificación a autoridades y redes de apoyo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Finalidad del protocolo de notificación',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Principio doctrinal y cadena de mando',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Lineamientos doctrinales',
            hash: 't_8_3',
          },
          {
            numero: '8.4',
            titulo: 'Notificaciones obligatorias',
            hash: 't_8_4',
          },
          {
            numero: '8.5',
            titulo: 'Estructura funcional del protocolo',
            hash: 't_8_5',
          },
          {
            numero: '8.6',
            titulo: 'Redes de apoyo',
            hash: 't_8_6',
          },
          {
            numero: '8.7',
            titulo: 'Nivel de riesgo y obligación de notificar',
            hash: 't_8_7',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Administración de sistemas',
      significado:
        'integración coordinada de personas, tecnología, procedimientos, comunicaciones y documentos para cumplir los objetivos de seguridad.',
    },
    {
      termino: 'Cadena de mando',
      significado:
        'estructura jerárquica que define responsabilidades, canales de comunicación y niveles de decisión durante la operación.',
    },
    {
      termino: 'Confidencialidad',
      significado:
        'principio que restringe el acceso y la divulgación de información a las personas debidamente autorizadas.',
    },
    {
      termino: 'COPASST',
      significado:
        'organismo paritario encargado de promover la prevención y vigilar las condiciones de seguridad y salud en el trabajo.',
    },
    {
      termino: 'Custodia',
      significado:
        'conjunto de controles aplicados para conservar documentos, datos, registros y evidencias sin alteraciones, pérdidas o accesos indebidos.',
    },
    {
      termino: 'Estadística descriptiva',
      significado:
        'método utilizado para organizar, resumir e interpretar datos procedentes de la operación.',
    },
    {
      termino: 'Histograma',
      significado:
        'representación de la distribución de datos o eventos agrupados mediante intervalos.',
    },
    {
      termino: 'Minuta',
      significado:
        'registro cronológico de novedades, actividades, responsables y actuaciones desarrolladas durante un turno.',
    },
    {
      termino: 'Monitoreo',
      significado:
        'proceso continuo de recepción, clasificación y gestión de señales procedentes de sistemas electrónicos.',
    },
    {
      termino: 'Plan de acción',
      significado:
        'instrumento que organiza objetivos, actividades, responsables, recursos, plazos, seguimiento y evaluación.',
    },
    {
      termino: 'PQRSF',
      significado:
        'sistema para gestionar peticiones, quejas, reclamos, sugerencias y felicitaciones de clientes o ciudadanos.',
    },
    {
      termino: 'Protocolo operativo',
      significado:
        'conjunto organizado de instrucciones que establece responsabilidades y actuaciones aplicables al servicio.',
    },
    {
      termino: 'Red de apoyo',
      significado:
        'mecanismo de cooperación que facilita alertas, intercambio de información y coordinación entre entidades.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'capacidad para reconstruir un evento mediante registros de las decisiones, comunicaciones y acciones ejecutadas.',
    },
    {
      termino: 'Variable de influencia',
      significado:
        'factor medible que puede modificar el comportamiento, la vulnerabilidad o el nivel de riesgo analizado.',
    },
  ],
  referencias: [
    {
      referencia:
        'ASIS International. (2009). Guía de seguridad física [Documento interno].',
      link: '',
    },
    {
      referencia:
        'ASIS International. (2011). Manual de gestión de crisis: Lineamientos para la preparación, respuesta y continuidad operativa ante emergencias y crisis [Documento interno].',
      link: '',
    },
    {
      referencia:
        'ASIS International. (2011). Manual de operadores de seguridad: Directrices operativas para centrales de monitoreo, verificación y respuesta [Documento interno].',
      link: '',
    },
    {
      referencia:
        'ASIS International. (2011). Protección de activos: Lineamientos para informes e investigación operativa [Documento interno].',
      link: '',
    },
    {
      referencia:
        'ASIS International. (2012). Manual de gestión en seguridad [Documento interno].',
      link: '',
    },
    {
      referencia:
        'Bermúdez. (2012). Manual de procedimiento para el personal de vigilantes de seguridad privada [Archivo PDF].',
      link: '',
    },
    {
      referencia:
        'Bhandari, P. (2022, 6 de mayo). Operationalization: A guide with examples, pros & cons. Scribbr.',
      link: 'https://www.scribbr.com/dissertation/operationalization/',
    },
    {
      referencia:
        'Chernoff, H., Lo, S.-H., & Zheng, T. (2009). Discovering influential variables: A method of partitions. The Annals of Applied Statistics, 3(4), 1335–1369.',
      link: 'https://doi.org/10.1214/09-AOAS265',
    },
    {
      referencia:
        'Delgado J. & Asociados. (s. f.). Manual de la central de monitoreo [Documento interno].',
      link: '',
    },
    {
      referencia:
        'Departamento Administrativo de la Función Pública. (1994, 11 de febrero). Decreto Ley 356 de 1994: Por el cual se expide el Estatuto de Vigilancia y Seguridad Privada.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=1341',
    },
    {
      referencia:
        'Departamento Nacional de Planeación. (2016). Documento metodológico: Índice de Integración Comunitaria (IC).',
      link: 'https://colaboracion.dnp.gov.co/CDT/Poltica%20de%20Vctimas/Integracion%20comunitaria/Documento%20metodol%C3%B3gico%20%C3%8Dndice%20IC%2009122016.pdf',
    },
    {
      referencia:
        'Fuentes H., R. (2015). Análisis de variables múltiples. Revista Chilena de Anestesia, 44(1), 106–111.',
      link: 'https://doi.org/10.25237/revchilanestv44n01.10',
    },
    {
      referencia:
        'Gallego, L., & Araque, O. (2019). Variables de influencia en la capacidad de aprendizaje: Un análisis por conglomerados y componentes principales. Información Tecnológica, 30(2), 257–264.',
      link: 'https://doi.org/10.4067/S0718-07642019000200257',
    },
    {
      referencia:
        'Ministerio de Trabajo y Seguridad Social, & Ministerio de Salud. (1986, 6 de junio). Resolución 2013 de 1986: Por la cual se reglamenta la organización y funcionamiento de los comités de medicina, higiene y seguridad industrial en los lugares de trabajo.',
      link: 'https://www.cancilleria.gov.co/normograma/compilacion/docs/resolucion_minsalud_r2013_86.htm',
    },
    {
      referencia:
        'Ministerio del Trabajo. (2015, 26 de mayo). Decreto 1072 de 2015: Decreto Único Reglamentario del Sector Trabajo.',
      link: 'https://www.ins.gov.co/Transparencia/Docs/Decreto-1072-de-2015.pdf',
    },
    {
      referencia:
        'Nardo, M., Saisana, M., Saltelli, A., Tarantola, S., Hoffmann, A., & Giovannini, E. (2005). Handbook on constructing composite indicators: Methodology and user guide (OECD Statistics Working Papers, No. 2005/03). OECD Publishing.',
      link: 'https://doi.org/10.1787/533411815016',
    },
    {
      referencia:
        'Organización de las Naciones Unidas. (2015, 28 de mayo). Process of selecting indicators (ESA/ST/AC.300/4). División de Estadística de las Naciones Unidas.',
      link: 'https://unstats.un.org/sdgs/files/meetings/iaeg-sdgs-meeting-01/ESA-ST-AC.300-4%20-%20Process%20of%20selecting%20indicators.pdf',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura. (s. f.). Indicators, data types and variables.',
      link: 'https://www.fao.org/4/x2465e/x2465e07.htm',
    },
    {
      referencia:
        'Pérez-Pravia, M. C., Vega-de la Cruz, L. O., & Tapia-Claro, I. I. (2017). Inferencia estadística de las variables del control interno en una entidad hospitalaria de acuerdo con la percepción de sus actores. Cuadernos de Contabilidad, 18(46), 1–21.',
      link: 'https://revistas.javeriana.edu.co/files-articulos/CC/18-46%20(2017)/151556547003/',
    },
    {
      referencia:
        'Posada Hernández, G. J. (2016). Elementos básicos de estadística descriptiva para el análisis de datos. Fondo Editorial Luis Amigó.',
      link: 'https://www.funlam.edu.co/modules/fondoeditorial/item.php?itemid=120',
    },
    {
      referencia:
        'Terapia Cognitiva. (s. f.). Variables en investigación: Definiciones y ejemplos [Archivo PDF].',
      link: 'https://www.terapia-cognitiva.mx/wp-content/uploads/2016/07/Variables.pdf',
    },
    {
      referencia:
        'Universidad CES. (s. f.). Comité Paritario de Seguridad y Salud en el Trabajo (COPASST).',
      link: 'https://www.ces.edu.co/informacion-para/informacion-para-colaboradores/copasst/',
    },
    {
      referencia:
        'Universidad Nacional de Colombia. (2020). Capítulo 12: Anexos. En Guía metodológica para la construcción de indicadores de procesos.',
      link: 'https://estadisticaun.github.io/G_Procesos/12-anexos.html',
    },
    {
      referencia:
        'Wikipedia contributors. (s. f.-a). Estadística paramétrica. En Wikipedia, la enciclopedia libre. Recuperado el 26 de agosto de 2026, de',
      link: 'https://es.wikipedia.org/wiki/Estad%C3%ADstica_param%C3%A9trica',
    },
    {
      referencia:
        'Wikipedia contributors. (s. f.-b). Selección de variable. En Wikipedia, la enciclopedia libre. Recuperado el 26 de agosto de 2026, de',
      link: 'https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_variable',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06 - Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ana Roció Rosero Cortes',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Leonardo Camacho Acevedo',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alba Mireya Orjuela Toro',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Cristancho Cubillos',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Angelica Gómez Morales',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paula Marcela Vidal Quintero',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jorge David Barbosa Losada',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cielo Damaris Angulo Rodríguez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
