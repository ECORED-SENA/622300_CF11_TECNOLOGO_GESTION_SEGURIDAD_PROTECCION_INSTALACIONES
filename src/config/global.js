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
      termino: 'Término',
      significado: 'Definición',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Líder del Ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: '',
          cargo: '',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: '',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: '',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
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
