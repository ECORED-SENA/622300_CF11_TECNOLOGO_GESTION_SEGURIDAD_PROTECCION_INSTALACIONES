<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Gestión operativa, administrativa y procedimental del servicio de seguridad',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la apropiación de conocimientos relacionados con los procesos administrativos, la gestión de recursos, la atención al cliente, la seguridad laboral, el monitoreo, la protección de la información y los protocolos operativos aplicables al servicio de seguridad privada.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la finalidad de la organización administrativa en un servicio de seguridad?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reducir registros y controles durante cada turno del servicio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Estructurar funciones y protocolos para coordinar el servicio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Delegar decisiones operativas solo al personal administrativo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir procedimientos por órdenes dadas durante cada turno.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué permite la clasificación de recursos, riesgos, incidentes e información?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ejecutar todas las tareas bajo igual supervisión institucional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reducir los documentos generados en cada procedimiento interno.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Distribuir los recursos sin considerar la criticidad existente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Priorizar las tareas según su importancia y riesgo operacional.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué beneficio proporciona el registro cronológico de novedades en la minuta?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reconstruir eventos y garantizar toda su trazabilidad operativa.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Sustituir informes por comunicaciones verbales entre los turnos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Modificar después los datos registrados durante toda la jornada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Disminuir la revisión de tareas realizadas por todo el personal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué debe hacer un supervisor cuando identifica fallas en un puesto crítico?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Suspender el servicio sin investigar las causas de cada incumplimiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Trasladar la responsabilidad al trabajador asignado al siguiente turno.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Retroalimentar, capacitar y luego reubicar temporalmente al trabajador.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Omitir la novedad mientras todavía no ocurra un incidente considerable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué función cumple la retroalimentación dentro del enfoque sistémico?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Impedir la revisión de las actividades desarrolladas en la operación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sustituir los recursos tecnológicos que presenten fallas preventivas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Separar los resultados de las acciones administrativas implementadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Ajustar el sistema mediante la evaluación continua de sus resultados.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Cuál es la función de la etapa “Verificar” del ciclo PHVA?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Definir objetivos y recursos requeridos para desarrollar las actividades en el servicio actual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Comparar resultados obtenidos con los criterios establecidos previamente en el servicio actual.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Ejecutar las acciones definidas durante la etapa de planeación en cada entorno correspondiente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Formalizar medidas correctivas sin analizar las evidencias operativas disponibles en el ámbito.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuáles instrumentos proporcionan evidencia verificable para evaluar el servicio?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Conversaciones informales, opiniones personales y mensajes carentes de identificación en el servicio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Publicaciones externas, anuncios comerciales y solicitudes pendientes de clasificación en el entorno.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Bitácoras, reportes, informes operativos y formatos institucionales de control en el servicio actual.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Comentarios ocasionales, instrucciones verbales y apreciaciones generales de visitantes en el ámbito.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Cuál es la primera fase en la gestión de un caso de PQRSF?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Recibir y registrar la interacción dentro del sistema institucional centralizado en la organización.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Comunicar la respuesta definitiva sin clasificar previamente el requerimiento recibido en el ámbito.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Trasladar inmediatamente el caso ante una autoridad externa competente en el servicio institucional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Cerrar la solicitud antes de verificar la satisfacción del usuario en cada servicio correspondiente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué acción finaliza el protocolo para la atención de conflictos?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Clasificar el comportamiento del cliente según su inconformidad manifestada en el ámbito.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Hacer seguimiento y confirmar la aplicación satisfactoria de la solución en cada entorno.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Transferir la responsabilidad del caso hacia otra dependencia encargada en cada servicio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Archivar la reclamación después de proporcionar una respuesta inicial en la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cómo debe gestionarse una solicitud de información de videovigilancia realizada por terceros?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Entregar la información cuando el solicitante manifieste alguna necesidad particular en el procedimiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Compartir la información mediante canales informales para agilizar el trámite en el servicio establecido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Permitir su consulta cuando no aparezcan trabajadores plenamente identificables en el servicio operativo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Documentar y tramitar la solicitud mediante los procedimientos institucionales establecidos en el ámbito.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Cuál es la función principal de una tabla de frecuencia?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Representar la gravedad estimada de cada incidente de seguridad registrado en el procedimiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Determinar automáticamente las causas y responsables de los eventos documentados en el entorno.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Agrupar la ocurrencia de eventos para reconocer tendencias operativas recurrentes en el ámbito.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Reemplazar bitácoras y reportes elaborados durante cada jornada operativa en el entorno actual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Para qué se utilizan los histogramas en la gestión de seguridad?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Representar la distribución temporal o espacial de los eventos registrados en cada servicio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Sustituir la verificación técnica de las señales recibidas electrónicamente en cada entorno.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Establecer las funciones administrativas asignadas a cada integrante operativo en el ámbito.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Determinar las sanciones aplicables por incumplimientos del personal operativo en el ámbito.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué debe comprobarse durante el seguimiento de un plan de acción?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que las actividades sean ejecutadas únicamente por una dependencia responsable en el ámbito.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Que los objetivos sean sustituidos durante el desarrollo del plan en el servicio de trabajo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Que los recursos utilizados superen las cantidades inicialmente establecidas en el servicio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Que las actividades, plazos y objetivos previstos sean cumplidos en el servicio establecido.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Cuál es una función esencial del COPASST dentro de las empresas?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Autorizar las sanciones relacionadas con el desempeño del personal operativo en cada entorno.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Promover la prevención y vigilar las condiciones de seguridad laboral en el servicio vigente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Administrar los sistemas tecnológicos empleados para proteger las instalaciones en el ámbito.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Resolver las reclamaciones presentadas por clientes externos del servicio en la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué figura debe designarse en una empresa con menos de diez trabajadores?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un Vigía de Seguridad y Salud en el Trabajo en el servicio establecido.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Un coordinador de sistemas y comunicaciones internas en cada protocolo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un comité evaluador de los servicios de seguridad en el entorno actual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Un supervisor externo para investigaciones disciplinarias en el ámbito.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué propiedades busca preservar la seguridad digital de la información?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Rapidez, rentabilidad y comercialización de los servicios tecnológicos institucionales en el ámbito.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Claridad, accesibilidad y difusión pública de todos los registros operativos en el servicio vigente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Confidencialidad, integridad y disponibilidad de los datos y sistemas tecnológicos en cada servicio.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Publicidad, actualización y circulación abierta de las comunicaciones organizacionales en el ámbito.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué elementos integran la arquitectura de un sistema central de alarmas?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cámaras, vigilantes, radios y puestos físicos destinados al control preventivo en cada entorno.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Paneles, sensores, bases de datos, software y operadores capacitados en el servicio de trabajo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Servidores, redes externas, archivos y documentos para labores administrativas en cada entorno.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Barreras, cerraduras, ventanas y dispositivos destinados a iluminación perimetral en el ámbito.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué medida contribuye directamente a la protección del hardware?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ubicar los dispositivos en espacios abiertos para facilitar su inspección en el entorno actual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Permitir el acceso general para agilizar las labores de mantenimiento en el servicio operativo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Suspender las revisiones mientras los equipos continúen funcionando adecuadamente en el ámbito.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Restringir el acceso y efectuar inspecciones periódicas de los equipos en cada servicio actual.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Cuál es la finalidad principal de un protocolo operativo?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Estandarizar las actuaciones y reducir improvisaciones durante el servicio en cada entorno correspondiente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Permitir interpretaciones individuales de los procedimientos establecidos por la organización en el ámbito.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reemplazar la supervisión mediante decisiones personales tomadas durante los incidentes en la organización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Limitar el registro documental para simplificar las actividades del servicio en cada turno de seguridad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Cuándo debe activarse el protocolo de notificación externa?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cuando exista una novedad menor controlada completamente por el personal en el servicio actual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Cuando se requiera confirmar una instrucción administrativa de carácter rutinario en el ámbito.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Cuando el incidente comprometa personas, bienes o supere la capacidad operativa en el servicio.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Cuando finalice el turno y permanezcan documentos pendientes de organización en cada protocolo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
