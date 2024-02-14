const preguntas = [
  {
    pregunta: "¿Es el koala un mamífero?",
    tipo_de_respuesta: "boolean",
    opciones: [
      { texto: "Sí", esCorrecta: true },
      { texto: "No", esCorrecta: false },
    ],
  },
  {
    pregunta: "¿El sol es una estrella?",
    tipo_de_respuesta: "boolean",
    opciones: [
      { texto: "Sí", esCorrecta: true },
      { texto: "No", esCorrecta: false },
    ],
  },
  {
    pregunta: "¿Cuál es la capital de Francia?",
    tipo_de_respuesta: "unique",
    opciones: [
      { texto: "Berlín", esCorrecta: false },
      { texto: "Madrid", esCorrecta: false },
      { texto: "París", esCorrecta: true },
      { texto: "Londres", esCorrecta: false },
    ],
  },
  {
    pregunta: "¿Cuál es la capital de Perú?",
    tipo_de_respuesta: "unique",
    opciones: [
      { texto: "Lima", esCorrecta: true },
      { texto: "Bogotá", esCorrecta: false },
      { texto: "Santiago", esCorrecta: false },
      { texto: "Quito", esCorrecta: false },
    ],
  },
  {
    pregunta: "¿Cuáles de los siguientes animales son mamíferos?",
    tipo_de_respuesta: "multiple",
    opciones: [
      { texto: "Tiburón", esCorrecta: false },
      { texto: "Koala", esCorrecta: true },
      { texto: "Cocodrilo", esCorrecta: false },
      { texto: "Murciélago", esCorrecta: true },
      { texto: "Pez dorado", esCorrecta: false },
    ],
  },
  {
    pregunta: "¿Cuáles de los siguientes son planetas del sistema solar?",
    tipo_de_respuesta: "multiple",
    opciones: [
      { texto: "Mercurio", esCorrecta: true },
      { texto: "Venus", esCorrecta: true },
      { texto: "Plutón", esCorrecta: false },
      { texto: "Sol", esCorrecta: false },
      { texto: "Luna", esCorrecta: false },
    ],
  },
];

export default preguntas;
