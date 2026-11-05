window.MUFASE_PLUGINS = [
  {
    "id": "MuEQ",
    "title": "Ecualizador",
    "category": "Tono",
    "description": "Ajusta el nivel de distintas bandas de frecuencia para corregir resonancias o realzar el carácter de una pista.",
    "image": "assets/plugins/MuEQ.webp",
    "thumb": "assets/plugins/MuEQ-thumb.webp",
    "tagline": "Control preciso del balance tonal.",
    "technical": "Procesamiento de ecualización por bandas, con selección de frecuencia, ganancia y anchura de cada ajuste.",
    "controls": [
      {
        "name": "Frecuencia",
        "detail": "Selecciona la zona del espectro."
      },
      {
        "name": "Ganancia",
        "detail": "Atenúa o realza la banda."
      },
      {
        "name": "Q / ancho",
        "detail": "Define lo estrecho o amplio del ajuste."
      },
      {
        "name": "Filtros HP/LP",
        "detail": "Recortan extremos graves o agudos."
      }
    ],
    "usage": "Limpiar graves de una voz, controlar medios de una guitarra o dar presencia a un instrumento.",
    "page": "plugins/MuEQ.html"
  },
  {
    "id": "MuComp",
    "title": "Compresor",
    "category": "Dinámica",
    "description": "Reduce diferencias de nivel entre los pasajes fuertes y suaves para aportar consistencia, pegada o control.",
    "image": "assets/plugins/MuComp.webp",
    "thumb": "assets/plugins/MuComp-thumb.webp",
    "tagline": "Control del rango dinámico.",
    "technical": "Compresión de amplitud determinada por un umbral, una relación y tiempos de respuesta.",
    "controls": [
      {
        "name": "Threshold",
        "detail": "Nivel a partir del cual comprime."
      },
      {
        "name": "Ratio",
        "detail": "Intensidad de la compresión."
      },
      {
        "name": "Attack / Release",
        "detail": "Velocidad de entrada y recuperación."
      },
      {
        "name": "Makeup / Mix",
        "detail": "Recupera nivel y mezcla señal original."
      }
    ],
    "usage": "Estabilizar voces, dar consistencia a bajos o controlar los golpes de batería.",
    "page": "plugins/MuComp.html"
  },
  {
    "id": "MuDyn",
    "title": "Dinámica avanzada",
    "category": "Dinámica",
    "description": "Gestiona variaciones de nivel en diferentes regiones del espectro para controlar un problema sin afectar toda la señal.",
    "image": "assets/plugins/MuDyn.webp",
    "thumb": "assets/plugins/MuDyn-thumb.webp",
    "tagline": "Procesamiento dinámico por zonas.",
    "technical": "Control dinámico selectivo de bandas con umbral y respuesta ajustables.",
    "controls": [
      {
        "name": "Bandas",
        "detail": "Define las regiones que se procesan."
      },
      {
        "name": "Threshold",
        "detail": "Activa el control según el nivel."
      },
      {
        "name": "Attack / Release",
        "detail": "Regula la respuesta temporal."
      },
      {
        "name": "Range",
        "detail": "Limita el máximo cambio de ganancia."
      }
    ],
    "usage": "Controlar graves variables, contener medios agresivos o suavizar agudos inestables.",
    "page": "plugins/MuDyn.html"
  },
  {
    "id": "MuFilter",
    "title": "Filtros",
    "category": "Tono",
    "description": "Permite atenuar frecuencias por encima, por debajo o alrededor de un punto para limpiar una señal o crear movimientos tonales.",
    "image": "assets/plugins/MuFilter.webp",
    "thumb": "assets/plugins/MuFilter-thumb.webp",
    "tagline": "Moldea el espectro mediante cortes.",
    "technical": "Filtrado de frecuencia con punto de corte, pendiente y resonancia configurables.",
    "controls": [
      {
        "name": "Cutoff",
        "detail": "Posición del corte."
      },
      {
        "name": "Tipo",
        "detail": "Paso alto, paso bajo u otro modo."
      },
      {
        "name": "Resonance",
        "detail": "Realza la zona próxima al corte."
      },
      {
        "name": "Slope",
        "detail": "Determina qué tan pronunciado es el filtrado."
      }
    ],
    "usage": "Eliminar contenido subgrave, suavizar un sintetizador o automatizar barridos.",
    "page": "plugins/MuFilter.html"
  },
  {
    "id": "MuTune",
    "title": "Afinación",
    "category": "Tono",
    "description": "Detecta y corrige desviaciones de afinación en material monofónico para acercarlo a las notas de una escala.",
    "image": "assets/plugins/MuTune.webp",
    "thumb": "assets/plugins/MuTune-thumb.webp",
    "tagline": "Corrección de altura tonal.",
    "technical": "Seguimiento de frecuencia fundamental y ajuste de pitch hacia notas objetivo.",
    "controls": [
      {
        "name": "Key / Scale",
        "detail": "Establece tonalidad y escala."
      },
      {
        "name": "Retune speed",
        "detail": "Velocidad de corrección."
      },
      {
        "name": "Humanize",
        "detail": "Reduce corrección en notas sostenidas."
      },
      {
        "name": "Amount",
        "detail": "Intensidad de la corrección."
      }
    ],
    "usage": "Afinación de voces principales o melodías monofónicas, con un efecto sutil o marcado.",
    "page": "plugins/MuTune.html"
  },
  {
    "id": "MuVerb",
    "title": "Reverb",
    "category": "Espacio",
    "description": "Añade reflexiones y cola reverberante para situar una señal dentro de un espacio acústico simulado.",
    "image": "assets/plugins/MuVerb.webp",
    "thumb": "assets/plugins/MuVerb-thumb.webp",
    "tagline": "Profundidad y ambiente.",
    "technical": "Reverberación con ajuste de tiempo de caída, predelay y mezcla entre señal directa y procesada.",
    "controls": [
      {
        "name": "Decay",
        "detail": "Duración de la cola."
      },
      {
        "name": "Pre-delay",
        "detail": "Separación entre señal y reverberación."
      },
      {
        "name": "Damping",
        "detail": "Atenúa agudos en las reflexiones."
      },
      {
        "name": "Mix",
        "detail": "Proporción de efecto."
      }
    ],
    "usage": "Dar profundidad a voces, baterías, teclados y efectos ambientales.",
    "page": "plugins/MuVerb.html"
  },
  {
    "id": "MuGate",
    "title": "Gate",
    "category": "Dinámica",
    "description": "Disminuye el nivel cuando la señal cae por debajo de un umbral, reduciendo ruido o filtraciones entre golpes.",
    "image": "assets/plugins/MuGate.webp",
    "thumb": "assets/plugins/MuGate-thumb.webp",
    "tagline": "Atenuación entre eventos sonoros.",
    "technical": "Puerta/expansor controlado por nivel, con tiempos de apertura y cierre.",
    "controls": [
      {
        "name": "Threshold",
        "detail": "Punto de activación."
      },
      {
        "name": "Range",
        "detail": "Atenuación máxima."
      },
      {
        "name": "Attack",
        "detail": "Tiempo de apertura."
      },
      {
        "name": "Hold / Release",
        "detail": "Mantiene y cierra la puerta."
      }
    ],
    "usage": "Limpiar silencios en toms, voces grabadas o pistas con ruido de fondo.",
    "page": "plugins/MuGate.html"
  },
  {
    "id": "MuChorus",
    "title": "Chorus",
    "category": "Espacio",
    "description": "Mezcla una señal con copias ligeramente retrasadas y moduladas para producir movimiento y amplitud.",
    "image": "assets/plugins/MuChorus.webp",
    "thumb": "assets/plugins/MuChorus-thumb.webp",
    "tagline": "Modulación para mayor cuerpo.",
    "technical": "Modulación periódica de tiempo de retardo y mezcla estéreo.",
    "controls": [
      {
        "name": "Rate",
        "detail": "Velocidad de modulación."
      },
      {
        "name": "Depth",
        "detail": "Profundidad del movimiento."
      },
      {
        "name": "Delay",
        "detail": "Separación temporal de las copias."
      },
      {
        "name": "Mix / Width",
        "detail": "Cantidad de efecto y apertura."
      }
    ],
    "usage": "Engrosar guitarras limpias, teclados, sintetizadores y voces de apoyo.",
    "page": "plugins/MuChorus.html"
  },
  {
    "id": "MuDelay",
    "title": "Tape delay",
    "category": "Espacio",
    "description": "Crea copias retardadas de una señal que se repiten y se desvanecen; permite ecos sincronizados con la canción.",
    "image": "assets/plugins/MuDelay.webp",
    "thumb": "assets/plugins/MuDelay-thumb.webp",
    "tagline": "Repeticiones rítmicas y ecos.",
    "technical": "Línea de retardo con realimentación, filtrado tonal y mezcla de efecto.",
    "controls": [
      {
        "name": "Time / Sync",
        "detail": "Intervalo de repetición."
      },
      {
        "name": "Feedback",
        "detail": "Número y persistencia de ecos."
      },
      {
        "name": "Tone",
        "detail": "Color de las repeticiones."
      },
      {
        "name": "Mix",
        "detail": "Nivel del eco frente a la señal seca."
      }
    ],
    "usage": "Generar ecos de voz, delays de guitarra y repeticiones a tempo.",
    "page": "plugins/MuDelay.html"
  },
  {
    "id": "MuDenoise",
    "title": "Noise reduction",
    "category": "Utilidad",
    "description": "Reduce componentes de ruido persistente intentando preservar la información útil de la grabación.",
    "image": "assets/plugins/MuDenoise.webp",
    "thumb": "assets/plugins/MuDenoise-thumb.webp",
    "tagline": "Limpieza de señal.",
    "technical": "Atenuación de contenido de bajo nivel y tratamiento de ruido con intensidad regulable.",
    "controls": [
      {
        "name": "Reduction",
        "detail": "Cantidad de atenuación."
      },
      {
        "name": "Sensitivity",
        "detail": "Sensibilidad al ruido."
      },
      {
        "name": "Smoothing",
        "detail": "Suaviza los cambios de ganancia."
      },
      {
        "name": "Output",
        "detail": "Ajusta nivel de salida."
      }
    ],
    "usage": "Disminuir ruido ambiental o de fondo en diálogos y pistas grabadas.",
    "page": "plugins/MuDenoise.html"
  },
  {
    "id": "MuLimit",
    "title": "Limitador",
    "category": "Dinámica",
    "description": "Restringe las excursiones de nivel por encima de un techo definido para prevenir picos excesivos.",
    "image": "assets/plugins/MuLimit.webp",
    "thumb": "assets/plugins/MuLimit-thumb.webp",
    "tagline": "Control de picos de salida.",
    "technical": "Limitación dinámica de alta relación, con umbral, techo de salida y recuperación.",
    "controls": [
      {
        "name": "Threshold",
        "detail": "Determina la reducción aplicada."
      },
      {
        "name": "Ceiling",
        "detail": "Fija el máximo nivel de salida."
      },
      {
        "name": "Release",
        "detail": "Tiempo de recuperación."
      },
      {
        "name": "Input",
        "detail": "Nivel que llega al limitador."
      }
    ],
    "usage": "Contener picos en buses, transientes intensos o la salida final.",
    "page": "plugins/MuLimit.html"
  },
  {
    "id": "MuEss",
    "title": "De-esser",
    "category": "Dinámica",
    "description": "Atenúa las consonantes sibilantes cuando sobresalen en una zona concreta de frecuencias.",
    "image": "assets/plugins/MuEss.webp",
    "thumb": "assets/plugins/MuEss-thumb.webp",
    "tagline": "Control de sibilancias.",
    "technical": "Reducción dinámica selectiva sobre energía de altas frecuencias.",
    "controls": [
      {
        "name": "Frequency",
        "detail": "Ubica la región de sibilancia."
      },
      {
        "name": "Threshold",
        "detail": "Nivel que activa la reducción."
      },
      {
        "name": "Amount",
        "detail": "Intensidad de la atenuación."
      },
      {
        "name": "Listen",
        "detail": "Ayuda a identificar la banda objetivo."
      }
    ],
    "usage": "Suavizar las “s” y “sh” en voces sin apagar todo el brillo.",
    "page": "plugins/MuEss.html"
  },
  {
    "id": "MuSat",
    "title": "Saturación",
    "category": "Utilidad",
    "description": "Introduce distorsión armónica controlada para modificar la textura y la densidad de un sonido.",
    "image": "assets/plugins/MuSat.webp",
    "thumb": "assets/plugins/MuSat-thumb.webp",
    "tagline": "Armónicos y carácter.",
    "technical": "Procesamiento no lineal con control de excitación, tono y señal procesada.",
    "controls": [
      {
        "name": "Drive",
        "detail": "Intensidad de la saturación."
      },
      {
        "name": "Tone",
        "detail": "Balance tonal del efecto."
      },
      {
        "name": "Mix",
        "detail": "Saturación paralela."
      },
      {
        "name": "Output",
        "detail": "Compensa el nivel resultante."
      }
    ],
    "usage": "Dar presencia a bajos, densidad a baterías o textura a sintetizadores.",
    "page": "plugins/MuSat.html"
  },
  {
    "id": "MuStereo",
    "title": "Imagen estéreo",
    "category": "Utilidad",
    "description": "Ajusta la distribución izquierda-derecha y la sensación de amplitud de una señal estéreo.",
    "image": "assets/plugins/MuStereo.webp",
    "thumb": "assets/plugins/MuStereo-thumb.webp",
    "tagline": "Anchura, balance y espacio.",
    "technical": "Procesamiento del balance y de los componentes central/lateral de la señal.",
    "controls": [
      {
        "name": "Width",
        "detail": "Abre o estrecha la imagen."
      },
      {
        "name": "Balance",
        "detail": "Reparte el nivel L/R."
      },
      {
        "name": "Mid / Side",
        "detail": "Ajusta centro y laterales."
      },
      {
        "name": "Output",
        "detail": "Compensa el nivel de salida."
      }
    ],
    "usage": "Controlar la apertura de pads, coros o buses estéreo.",
    "page": "plugins/MuStereo.html"
  },
  {
    "id": "MuTransient",
    "title": "Transientes",
    "category": "Dinámica",
    "description": "Modifica la pegada inicial y la persistencia de cada evento sin depender solamente de un compresor.",
    "image": "assets/plugins/MuTransient.webp",
    "thumb": "assets/plugins/MuTransient-thumb.webp",
    "tagline": "Forma del ataque y la cola.",
    "technical": "Detección de envolvente y ajuste independiente de ataque y sustain.",
    "controls": [
      {
        "name": "Attack",
        "detail": "Refuerza o suaviza el inicio."
      },
      {
        "name": "Sustain",
        "detail": "Alarga o reduce la cola."
      },
      {
        "name": "Sensitivity",
        "detail": "Regula la detección."
      },
      {
        "name": "Mix",
        "detail": "Ajusta la cantidad procesada."
      }
    ],
    "usage": "Acentuar golpes de batería, recortar colas de percusión o suavizar ataques.",
    "page": "plugins/MuTransient.html"
  }
];
