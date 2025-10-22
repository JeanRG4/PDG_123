/* ===============================
   Navegación entre secciones
=============================== */
const navLinks = document.querySelectorAll("nav a");
const secciones = {
  inicio: document.getElementById("inicio"),
  manual: document.getElementById("manual"),
  evaluacion: document.getElementById("evaluacion")
};

// Mostrar solo "Inicio" al cargar
Object.values(secciones).forEach(s => s.classList.add("oculto"));
Object.values(secciones).forEach(s => s.classList.remove("visible"));
secciones.inicio.classList.remove("oculto");
secciones.inicio.classList.add("visible");

// Función de navegación al hacer click en el menú
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const section = link.dataset.section;

    // Ocultar todas las secciones
    Object.values(secciones).forEach(s => s.classList.add("oculto"));
    Object.values(secciones).forEach(s => s.classList.remove("visible"));

    // Mostrar la sección seleccionada
    if (secciones[section]) {
      secciones[section].classList.remove("oculto");
      secciones[section].classList.add("visible");
    }
  });
});

/* ===============================
   Navegación y capítulos del PDF
=============================== */
const pdfFrame = document.getElementById("pdf-frame");
const tituloCapitulo = document.getElementById("titulo-capitulo");
const botones = document.querySelectorAll(".chapter-btn");

const paginas = {
  1: 5, 2: 7, 3: 9, 4: 10,
  5: 12, 6: 13, 7: 14, 8: 16
};

/* ===============================
   Sistema de Quiz (Opción múltiple)
=============================== */
const quizzes = {
  1: {
    titulo: "Capítulo 1 – Introducción a la Informática",
    preguntas: [
      {
        texto: "¿Qué estudia la informática?",
        opciones: {
          a: "Los sistemas financieros",
          b: "El tratamiento automático de la información",
          c: "El arte digital"
        },
        correcta: "b",
        explicacion: "La informática estudia el tratamiento automático de la información mediante computadoras."
      },
      {
        texto: "¿Cuál es el propósito principal de la informática?",
        opciones: {
          a: "Simplificar el acceso y manejo de la información",
          b: "Crear arte visual",
          c: "Reemplazar a los humanos"
        },
        correcta: "a",
        explicacion: "El propósito principal es procesar, almacenar y acceder a la información de forma más eficiente."
      },
      {
        texto: "¿Qué diferencia hay entre hardware y software?",
        opciones: {
          a: "El hardware es físico y el software es lógico",
          b: "Ambos son lo mismo",
          c: "El software se puede tocar"
        },
        correcta: "a",
        explicacion: "El hardware son los componentes físicos del equipo; el software son los programas que lo controlan."
      },
      {
        texto: "¿Cuál de los siguientes es un dispositivo de entrada?",
        opciones: {
          a: "Monitor",
          b: "Teclado",
          c: "Impresora"
        },
        correcta: "b",
        explicacion: "El teclado se usa para ingresar información al sistema, por lo tanto, es de entrada."
      },
      {
        texto: "Menciona una forma correcta de apagar un computador.",
        opciones: {
          a: "Desconectarlo directamente",
          b: "Cerrar programas y apagar desde el menú del sistema",
          c: "Presionar el botón de encendido por 10 segundos"
        },
        correcta: "b",
        explicacion: "Apagar desde el sistema evita daños en los archivos y el hardware."
      }
    ]
  },

  2: {
    titulo: "Capítulo 2 – Sistemas Operativos y Entorno de Trabajo",
    preguntas: [
      {
        texto: "¿Qué es un sistema operativo y cuál es su función principal?",
        opciones: {
          a: "Un tipo de hardware que controla los programas",
          b: "El software que administra los recursos del sistema",
          c: "Una aplicación de entretenimiento"
        },
        correcta: "b",
        explicacion: "El sistema operativo gestiona el hardware y coordina el uso de los recursos del computador."
      },
      {
        texto: "Menciona dos ejemplos de sistemas operativos.",
        opciones: {
          a: "Windows y Linux",
          b: "Excel y PowerPoint",
          c: "Facebook y Instagram"
        },
        correcta: "a",
        explicacion: "Windows y Linux son sistemas operativos, mientras que los otros son programas o servicios."
      },
      {
        texto: "¿Qué es el escritorio en Windows?",
        opciones: {
          a: "Una carpeta de documentos",
          b: "La pantalla principal donde se muestran iconos y accesos",
          c: "Una ventana del navegador"
        },
        correcta: "b",
        explicacion: "El escritorio es el área principal donde se accede a programas, carpetas y archivos."
      },
      {
        texto: "¿Para qué sirve el Explorador de Archivos?",
        opciones: {
          a: "Para administrar carpetas y documentos del sistema",
          b: "Para buscar en Internet",
          c: "Para eliminar virus"
        },
        correcta: "a",
        explicacion: "El Explorador de Archivos permite visualizar, organizar y gestionar los archivos locales."
      },
      {
        texto: "Escribe un atajo de teclado y su función.",
        opciones: {
          a: "Ctrl + C: copiar texto o archivos",
          b: "Ctrl + Z: eliminar virus",
          c: "Alt + F4: abrir navegador"
        },
        correcta: "a",
        explicacion: "El atajo Ctrl + C se usa universalmente para copiar elementos seleccionados."
      }
    ]
  }
};
// ===============================
// Capítulos 3 a 8 – Sistema de Quiz
// ===============================
Object.assign(quizzes, {
  3: {
    titulo: "Capítulo 3 – Uso de Internet",
    preguntas: [
      {
        texto: "¿Qué es Internet y cómo envía la información?",
        opciones: {
          a: "Una red global que conecta computadoras mediante protocolos",
          b: "Un programa de oficina",
          c: "Una base de datos local"
        },
        correcta: "a",
        explicacion: "Internet es una red mundial que transmite información mediante protocolos de comunicación."
      },
      {
        texto: "Nombra un navegador web y un motor de búsqueda.",
        opciones: {
          a: "Chrome y Google",
          b: "Excel y Bing",
          c: "Outlook y Wikipedia"
        },
        correcta: "a",
        explicacion: "Chrome es un navegador y Google un motor de búsqueda; cumplen funciones distintas."
      },
      {
        texto: "¿Qué indica que un sitio es seguro?",
        opciones: {
          a: "Que tiene el prefijo https:// y un candado",
          b: "Que carga rápidamente",
          c: "Que tiene colores llamativos"
        },
        correcta: "a",
        explicacion: "El protocolo HTTPS y el candado garantizan una conexión cifrada y segura."
      },
      {
        texto: "¿Por qué es importante mantener actualizado el navegador?",
        opciones: {
          a: "Para acceder a nuevas funciones y mayor seguridad",
          b: "Para cambiar el color del fondo",
          c: "Para eliminar los marcadores"
        },
        correcta: "a",
        explicacion: "Las actualizaciones mejoran rendimiento y protegen contra vulnerabilidades."
      },
      {
        texto: "Menciona una buena práctica al navegar en Internet.",
        opciones: {
          a: "Evitar compartir datos personales en sitios desconocidos",
          b: "Descargar todo lo que se vea interesante",
          c: "Ignorar los avisos de seguridad"
        },
        correcta: "a",
        explicacion: "Proteger la información personal es esencial para la seguridad en línea."
      }
    ]
  },

  4: {
    titulo: "Capítulo 4 – Correo Electrónico y Comunicación Segura",
    preguntas: [
      {
        texto: "¿Qué pasos se deben seguir para crear una cuenta de correo segura?",
        opciones: {
          a: "Usar contraseña fuerte y verificación en dos pasos",
          b: "Usar contraseña corta y fácil",
          c: "Compartir la cuenta con amigos"
        },
        correcta: "a",
        explicacion: "Una cuenta segura requiere contraseñas fuertes y autenticación adicional."
      },
      {
        texto: "¿Cómo se adjunta un archivo en un correo electrónico?",
        opciones: {
          a: "Haciendo clic en el ícono de clip o 'Adjuntar'",
          b: "Pegando el archivo en el asunto",
          c: "Arrastrando el archivo al navegador"
        },
        correcta: "a",
        explicacion: "El ícono de clip permite subir documentos, imágenes u otros archivos al correo."
      },
      {
        texto: "¿Qué es phishing y cómo detectarlo?",
        opciones: {
          a: "Un intento de engaño para obtener datos personales",
          b: "Una técnica de limpieza digital",
          c: "Un tipo de correo publicitario"
        },
        correcta: "a",
        explicacion: "El phishing busca engañar al usuario haciéndose pasar por una fuente confiable."
      },
      {
        texto: "¿Qué es la etiqueta digital?",
        opciones: {
          a: "El comportamiento adecuado al comunicarse en línea",
          b: "Un filtro para correos basura",
          c: "Un tipo de firma electrónica"
        },
        correcta: "a",
        explicacion: "La etiqueta digital implica respeto y cortesía al comunicarse en entornos digitales."
      },
      {
        texto: "Menciona una forma de proteger tus datos personales en correo.",
        opciones: {
          a: "No abrir enlaces sospechosos ni compartir contraseñas",
          b: "Usar redes Wi-Fi públicas para revisar correos",
          c: "Responder todos los mensajes"
        },
        correcta: "a",
        explicacion: "Evitar enlaces sospechosos y proteger tus credenciales es clave para la seguridad."
      }
    ]
  },

  5: {
    titulo: "Capítulo 5 – Seguridad Informática Básica",
    preguntas: [
      {
        texto: "¿Qué es la seguridad informática?",
        opciones: {
          a: "Protección de sistemas y datos frente a amenazas digitales",
          b: "Uso libre de redes públicas",
          c: "Instalar juegos en la computadora"
        },
        correcta: "a",
        explicacion: "La seguridad informática protege la información contra accesos o daños no autorizados."
      },
      {
        texto: "Menciona dos tipos de amenazas informáticas.",
        opciones: {
          a: "Virus y phishing",
          b: "Correo y texto",
          c: "Teclado y monitor"
        },
        correcta: "a",
        explicacion: "Virus, phishing, spyware, entre otros, son amenazas que ponen en riesgo los datos."
      },
      {
        texto: "¿Cómo proteger tu información personal en línea?",
        opciones: {
          a: "Usando contraseñas seguras y evitando redes públicas",
          b: "Compartiendo tus claves con amigos",
          c: "Publicando tus datos personales"
        },
        correcta: "a",
        explicacion: "Las contraseñas fuertes y las conexiones seguras son fundamentales para protegerte."
      },
      {
        texto: "¿Qué medidas de seguridad debemos tener con contraseñas?",
        opciones: {
          a: "No compartirlas y cambiarlas regularmente",
          b: "Usar la misma contraseña en todo",
          c: "Anotarlas en papel visible"
        },
        correcta: "a",
        explicacion: "Las contraseñas seguras deben renovarse y mantenerse privadas."
      },
      {
        texto: "¿Qué hacer si tu equipo tiene un virus?",
        opciones: {
          a: "Usar un antivirus actualizado y escanear el sistema",
          b: "Ignorar el problema",
          c: "Apagar el monitor"
        },
        correcta: "a",
        explicacion: "El antivirus permite detectar y eliminar software malicioso del sistema."
      }
    ]
  },

  6: {
    titulo: "Capítulo 6 – Protección en Redes Sociales y Dispositivos Móviles",
    preguntas: [
      {
        texto: "¿Cómo proteger la privacidad en redes sociales?",
        opciones: {
          a: "Configurando quién puede ver tus publicaciones",
          b: "Aceptando todas las solicitudes de amistad",
          c: "Publicando información personal"
        },
        correcta: "a",
        explicacion: "Configurar la privacidad limita quién accede a tu información personal."
      },
      {
        texto: "Menciona una medida de seguridad en Facebook, Instagram o WhatsApp.",
        opciones: {
          a: "Usar autenticación en dos pasos",
          b: "Aceptar enlaces desconocidos",
          c: "Compartir tu ubicación siempre"
        },
        correcta: "a",
        explicacion: "La autenticación en dos pasos añade una capa de seguridad a las cuentas."
      },
      {
        texto: "¿Qué riesgos presentan algunas aplicaciones móviles?",
        opciones: {
          a: "Robar datos o instalar software malicioso",
          b: "Aumentar la batería",
          c: "Optimizar el sistema automáticamente"
        },
        correcta: "a",
        explicacion: "Algunas apps no seguras pueden recopilar o dañar información del dispositivo."
      },
      {
        texto: "¿Cómo bloquear tu dispositivo de manera segura?",
        opciones: {
          a: "Usando PIN, huella o reconocimiento facial",
          b: "Dejándolo sin bloqueo",
          c: "Usando claves genéricas"
        },
        correcta: "a",
        explicacion: "Los métodos biométricos y contraseñas seguras evitan accesos no autorizados."
      },
      {
        texto: "¿Por qué es importante hacer copias de seguridad automáticas en el teléfono?",
        opciones: {
          a: "Porque protegen tus datos en caso de pérdida o daño",
          b: "Porque ocupan menos espacio",
          c: "Porque mejoran la señal"
        },
        correcta: "a",
        explicacion: "Las copias de seguridad evitan la pérdida de información importante."
      }
    ]
  },

  7: {
    titulo: "Capítulo 7 – Copias de Seguridad y Almacenamiento en la Nube",
    preguntas: [
      {
        texto: "¿Por qué son importantes las copias de seguridad?",
        opciones: {
          a: "Porque permiten recuperar datos ante fallos o pérdidas",
          b: "Porque limpian el disco duro",
          c: "Porque eliminan virus"
        },
        correcta: "a",
        explicacion: "Las copias de seguridad previenen la pérdida definitiva de información."
      },
      {
        texto: "Menciona un método de respaldo local.",
        opciones: {
          a: "Discos duros externos o memorias USB",
          b: "Correo electrónico",
          c: "Redes sociales"
        },
        correcta: "a",
        explicacion: "Los dispositivos externos permiten guardar datos sin conexión a Internet."
      },
      {
        texto: "Nombra un servicio de almacenamiento en la nube.",
        opciones: {
          a: "Google Drive, Dropbox o OneDrive",
          b: "Word o Excel",
          c: "Instagram o TikTok"
        },
        correcta: "a",
        explicacion: "Servicios como Google Drive y OneDrive almacenan datos en servidores remotos."
      },
      {
        texto: "¿Qué es el cifrado de datos y para qué sirve?",
        opciones: {
          a: "Un método que convierte la información en un código ilegible",
          b: "Un proceso de compresión",
          c: "Un programa de diseño"
        },
        correcta: "a",
        explicacion: "El cifrado protege la información haciéndola inaccesible para terceros."
      },
      {
        texto: "¿Qué medida de seguridad adicional se recomienda en la nube?",
        opciones: {
          a: "Usar autenticación en dos pasos",
          b: "Compartir contraseñas con otros usuarios",
          c: "Guardar archivos sin cifrar"
        },
        correcta: "a",
        explicacion: "La autenticación en dos pasos refuerza la seguridad del acceso a la nube."
      }
    ]
  },

  8: {
    titulo: "Capítulo 8 – Buenas Prácticas Digitales y Mantenimiento del Equipo",
    preguntas: [
      {
        texto: "Menciona un cuidado físico importante para el computador.",
        opciones: {
          a: "Mantenerlo limpio y ventilado",
          b: "Colocarlo en lugares húmedos",
          c: "Cubrir las ranuras de ventilación"
        },
        correcta: "a",
        explicacion: "La limpieza y ventilación evitan el sobrecalentamiento y daños internos."
      },
      {
        texto: "¿Cómo mantener organizado el disco duro y archivos?",
        opciones: {
          a: "Creando carpetas y eliminando archivos innecesarios",
          b: "Guardando todo en una sola carpeta",
          c: "Descargando archivos sin orden"
        },
        correcta: "a",
        explicacion: "Organizar y limpiar el disco mejora el rendimiento del sistema."
      },
      {
        texto: "Menciona un hábito de ciberseguridad diaria.",
        opciones: {
          a: "Actualizar programas y usar antivirus",
          b: "Ignorar mensajes del sistema",
          c: "Desactivar el cortafuegos"
        },
        correcta: "a",
        explicacion: "Mantener el sistema actualizado y protegido previene ataques cibernéticos."
      },
      {
        texto: "¿Qué significa usar responsablemente la tecnología?",
        opciones: {
          a: "Utilizarla con respeto, ética y conciencia del impacto",
          b: "Usarla todo el día sin pausas",
          c: "Compartir todo lo que ves"
        },
        correcta: "a",
        explicacion: "El uso responsable implica conciencia social, ética y equilibrio digital."
      },
      {
        texto: "¿Por qué es importante cambiar las contraseñas regularmente?",
        opciones: {
          a: "Para reducir riesgos de accesos no autorizados",
          b: "Para recordar las claves fácilmente",
          c: "Para gastar menos batería"
        },
        correcta: "a",
        explicacion: "Renovar contraseñas fortalece la seguridad frente a posibles filtraciones."
      }
    ]
  }
});
/* =======================================
   Mostrar Quiz según el capítulo
======================================= */
function mostrarQuiz(capitulo) {
  const quizData = quizzes[capitulo];
  const quizContainer = document.getElementById("quiz-container");

  if (!quizData) {
    quizContainer.innerHTML = "<p>Próximamente preguntas para este capítulo.</p>";
    return;
  }

  quizContainer.innerHTML = `
    <h3>${quizData.titulo}</h3>
    <form id="quiz-form"></form>
    <button id="enviarQuiz" class="btn-enviar">Enviar respuestas</button>
    <div id="resultado"></div>
  `;

  const form = document.getElementById("quiz-form");

  quizData.preguntas.forEach((p, i) => {
    const bloque = document.createElement("div");
    bloque.classList.add("pregunta");
    bloque.innerHTML = `
      <p>${i + 1}. ${p.texto}</p>
      ${Object.entries(p.opciones)
        .map(
          ([letra, texto]) =>
            `<label><input type="radio" name="q${i}" value="${letra}"> ${texto}</label><br>`
        )
        .join("")}
    `;
    form.appendChild(bloque);
  });

  document.getElementById("enviarQuiz").addEventListener("click", (e) => {
    e.preventDefault();
    evaluarQuiz(capitulo);
  });
}

/* =======================================
   Evaluar respuestas del quiz
======================================= */
function evaluarQuiz(capitulo) {
  const quizData = quizzes[capitulo];
  const resultadoDiv = document.getElementById("resultado");
  let correctas = 0;
  let retroalimentacion = "";

  quizData.preguntas.forEach((p, i) => {
    const seleccion = document.querySelector(`input[name="q${i}"]:checked`);
    if (!seleccion) return;
    if (seleccion.value === p.correcta) {
      correctas++;
    } else {
      retroalimentacion += `<p>❌ Pregunta ${i + 1}: Respuesta incorrecta. ${p.explicacion}</p>`;
    }
  });

  const total = quizData.preguntas.length;
  const porcentaje = Math.round((correctas / total) * 100);
  const mensaje =
    porcentaje >= 60
      ? "¡Excelente trabajo! Sigue así 💪"
      : "Sigue practicando, ¡vas por buen camino!";

  resultadoDiv.innerHTML = `
    <h4>Resultados</h4>
    <p>Has acertado ${correctas} de ${total} (${porcentaje}%).</p>
    ${retroalimentacion}
    <p><strong>${mensaje}</strong></p>
  `;

  actualizarCalificacionGlobal(capitulo, porcentaje);
}


/* =======================================
   Sistema de calificación global
======================================= */
let puntajesGlobales = {};

function actualizarCalificacionGlobal(capitulo, porcentaje) {
  puntajesGlobales[capitulo] = porcentaje;

  const totalCapitulos = Object.keys(quizzes).length;
  const capitulosCompletados = Object.keys(puntajesGlobales).length;
  const sumaPorcentajes = Object.values(puntajesGlobales).reduce((a, b) => a + b, 0);
  const promedio = Math.round(sumaPorcentajes / totalCapitulos);

  // Actualizar barra de progreso global
  const progressFill = document.getElementById("global-progress");
  if (progressFill) {
    progressFill.style.width = `${promedio}%`;
    progressFill.textContent = `${promedio}%`;
  }

  // Mensaje final si completó todos los capítulos
  if (capitulosCompletados === totalCapitulos) {
    setTimeout(() => {
      mostrarFinalCard(promedio);
    }, 500);
  }
}

/* =======================================
   Navegación por capítulos y PDF
======================================= */
botones.forEach(btn => {
  btn.addEventListener("click", () => {
    const cap = btn.dataset.capitulo;

    // Marcar botón activo
    botones.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // Cambiar título
    tituloCapitulo.textContent = `Capítulo ${cap}`;

    // Redirigir PDF
    const pagina = paginas[cap];
    if (pagina) {
      pdfFrame.src = `recursos/pdf/ManualV1.pdf#page=${pagina}`;
    } else {
      pdfFrame.src = "";
      console.warn(`No hay página asignada para el capítulo ${cap}`);
    }

    // Mostrar quiz
    mostrarQuiz(cap);
  });
});

/* =======================================
   Progreso global animado
======================================= */
function actualizarProgresoGlobal(capitulo) {
  // Cada capítulo vale igual porcentaje (100 / totalCapitulos)
  const totalCapitulos = Object.keys(quizzes).length;
  const porcentajePorCapitulo = 100 / totalCapitulos;
  let progresoTotal = Object.values(puntajesGlobales).length * porcentajePorCapitulo;

  const progressFill = document.getElementById("global-progress");
  if (progressFill) {
    progressFill.style.width = `${progresoTotal}%`;
    progressFill.textContent = `${Math.round(progresoTotal)}%`;
  }
}

/* =======================================
   Inicialización
======================================= */
document.addEventListener("DOMContentLoaded", () => {
  // Mostrar solo "Inicio" al cargar
  Object.values(secciones).forEach(s => s.classList.add("oculto"));
  secciones.inicio.classList.remove("oculto");

  // Inicializar primer capítulo si hay botones
  if (botones.length > 0) {
    botones[0].click();
  }
});

/* ============================
   Tarjeta visual de resultado
   y funciones de reinicio
   ============================ */

   function mostrarFinalCard(promedio) {
    const finalCard = document.getElementById("final-card");
    const summary = document.getElementById("final-summary");
    const breakdown = document.getElementById("final-breakdown");
  
    // Texto principal
    summary.textContent = `Has completado todos los capítulos. Promedio final: ${promedio}%.`;
  
    // Construir desglose por capítulo (ordenado)
    const capitulos = Object.keys(quizzes).sort((a,b)=>a-b);
    let html = "<ul>";
    capitulos.forEach(c => {
      const pct = puntajesGlobales[c] ?? 0;
      html += `<li><strong>Capítulo ${c}:</strong> ${pct}%</li>`;
    });
    html += "</ul>";
    breakdown.innerHTML = html;
  
    // Mostrar tarjeta (quitar oculto)
    finalCard.classList.remove("oculto");
    // opcional: hacer scroll a la tarjeta para que el usuario la vea
    finalCard.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  
  // Cerrar y reiniciar
  document.addEventListener("click", (e) => {
    if (e.target && e.target.id === "btn-cerrar") {
      document.getElementById("final-card").classList.add("oculto");
    }
    if (e.target && e.target.id === "btn-reiniciar") {
      if (!confirm("¿Reiniciar todo el progreso? Esta acción borrará las calificaciones obtenidas.")) return;
      reiniciarProgreso();
    }
  });
  
  function reiniciarProgreso() {
    // limpiar puntajes
    puntajesGlobales = {};
    // reiniciar barra de progreso global
    const progressFill = document.getElementById("global-progress");
    if (progressFill) {
      progressFill.style.width = "0%";
      progressFill.textContent = "0%";
    }
    // ocultar tarjeta final
    const finalCard = document.getElementById("final-card");
    if (finalCard) finalCard.classList.add("oculto");
    // reset botones activos
    document.querySelectorAll(".chapter-btn").forEach(b => b.classList.remove("active"));
    // vaciar contenedor de quiz
    const quizContainer = document.getElementById("quiz-container");
    if (quizContainer) quizContainer.innerHTML = `<p>Selecciona un capítulo para comenzar la evaluación.</p>`;
    // opcional: volver a la sección "inicio"
    Object.values(secciones).forEach(s => s.classList.add("oculto"));
    secciones.inicio.classList.remove("oculto");
  }
  