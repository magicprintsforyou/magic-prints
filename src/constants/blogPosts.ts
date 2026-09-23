export type BlogLanguage = 'en' | 'es';

export interface BlogSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface BlogPostContent {
  title: string;
  description: string;
  tag: string;
  readTime: string;
  intro: string[];
  sections: BlogSection[];
  conclusion: string;
}

export interface BlogPost {
  slug: string;
  image: string;
  inspirationUrl: string;
  imageAlt: Record<BlogLanguage, string>;
  author: string;
  content: Record<BlogLanguage, BlogPostContent>;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'pinterest-wedding-inspiration-to-production',
    image: '/images/blog/pinterest-wedding.jpg',
    inspirationUrl: 'https://www.instagram.com/magicprintsforyou/p/DdRrYj2GtdE/',
    imageAlt: {
      en: 'Wooden wedding venue with a white floral floor wrap, gold border and monogram, and a coordinated floral backdrop',
      es: 'Salón de boda de madera con floor wrap blanco, borde y monograma dorados, flores y backdrop floral coordinado',
    },
    author: 'Magic Prints For You',
    content: {
      en: {
        title: 'From Pinterest Wedding Inspiration to Coordinated Printed Décor',
        description: 'A practical process for translating wedding inspiration into original, coordinated and production-ready printed elements.',
        tag: 'Wedding planning',
        readTime: '4 min read',
        intro: [
          'Inspired by our “The Pinterest Wedding” post, this guide looks beyond the moodboard and into production. Pinterest is useful for defining a visual direction: romantic scripts, warm neutrals, floral borders, elegant monograms or a coordinated backdrop. The saved image is a starting point for a conversation, not automatically artwork that can be printed.',
          'The venue shown here brings several printed elements into one visual system: a white floor wrap with a gold border and monogram, large floral details, and a coordinated floral backdrop. The useful lesson is how repeated colors, flowers and typography connect separate surfaces without making every element identical.',
        ],
        sections: [
          {
            heading: 'Build a direction before building a file',
            paragraphs: ['Collect a small group of references that share one idea. Identify what repeats: color, type style, image treatment, shape and amount of empty space. Too many unrelated examples create conflicting instructions. Include a photo of the venue or planned display area so the design can respond to wood, draping, florals, lighting and surrounding signs.'],
          },
          {
            heading: 'Choose the photograph for print, not only for the phone screen',
            paragraphs: ['The best image has enough resolution, clear focus and room for the planned crop. Original camera files are preferable to screenshots or images downloaded from social media. A vertical portrait can fill a tall panel efficiently; a horizontal image may need a different board shape or intentional background extension. Keep faces, hands and important clothing details away from trim edges.'],
          },
          {
            heading: 'Create a readable information hierarchy',
            bullets: [
              'Let the names be the first text guests recognize from normal walking distance.',
              'Use the date and welcome line as supporting information, with enough contrast against the background.',
              'Limit decorative typefaces to short phrases; use a cleaner face for longer wording.',
              'Leave calm space around every line so flowers, easels or nearby décor do not visually crowd it.',
            ],
          },
          {
            heading: 'Prepare for production details',
            paragraphs: ['Confirm the final dimensions, board material, finish, cut shape and display method before approving the layout. Screen color and printed color can differ, and very thin lettering may lose clarity at large scale. Supply owned or properly licensed photos and graphic elements in the highest quality available. A production review should also check spelling, event date, crop, safe margins and whether the board needs an easel or another support.'],
          },
          {
            heading: 'How the quote process works',
            paragraphs: ['Choose the closest product and size, open its details, upload the available artwork or inspiration, and add the configuration to the quote cart. Submit the cart with the event information. Magic Prints For You reviews the request by email, confirms the exact scope and then sends the Square payment link for the approved amount.'],
          },
        ],
        conclusion: 'A useful inspiration board communicates atmosphere. A successful printed board adds original design, correct files, readable type and production decisions that fit the real venue.',
      },
      es: {
        title: 'De inspiración de boda en Pinterest a decoración impresa coordinada',
        description: 'Un proceso práctico para traducir inspiración de boda en elementos impresos originales, coordinados y listos para producción.',
        tag: 'Planificación de bodas',
        readTime: '4 min de lectura',
        intro: [
          'Inspirada en nuestra publicación “The Pinterest Wedding”, esta guía va más allá del moodboard y entra en la producción. Pinterest sirve para definir una dirección visual: letras románticas, tonos neutros, bordes florales, monogramas elegantes o un backdrop coordinado. La imagen guardada inicia la conversación, pero no siempre es un arte que se pueda imprimir.',
          'El salón que aparece aquí reúne varios elementos impresos en un mismo sistema visual: un floor wrap blanco con borde y monograma dorados, flores grandes y un backdrop floral coordinado. La lección útil es repetir colores, flores y tipografía para conectar superficies distintas sin hacerlas idénticas.',
        ],
        sections: [
          {
            heading: 'Define la dirección antes de diseñar el archivo',
            paragraphs: ['Reúne pocas referencias que compartan una misma idea. Observa qué se repite: color, tipografía, tratamiento de la foto, forma y espacio libre. Muchas imágenes sin relación producen instrucciones contradictorias. Incluye una foto del salón o del área donde irá el board para considerar madera, cortinas, flores, iluminación y otros letreros.'],
          },
          {
            heading: 'Elige la fotografía pensando en impresión',
            paragraphs: ['La mejor imagen tiene buena resolución, enfoque claro y espacio para el recorte. Es preferible enviar el archivo original de la cámara en lugar de una captura de pantalla o una foto descargada de redes sociales. Un retrato vertical llena bien un panel alto; una imagen horizontal puede necesitar otra forma de board o una extensión de fondo diseñada con cuidado. Rostros, manos y detalles importantes deben quedar lejos de los bordes de corte.'],
          },
          {
            heading: 'Crea una jerarquía que se lea fácilmente',
            bullets: [
              'Haz que los nombres sean el primer texto que se reconozca desde una distancia normal.',
              'Usa la fecha y la bienvenida como información secundaria con suficiente contraste.',
              'Reserva las letras decorativas para frases cortas y usa una tipografía limpia en textos largos.',
              'Deja espacio alrededor del texto para que flores, caballetes y decoración no lo ahoguen.',
            ],
          },
          {
            heading: 'Confirma los detalles de producción',
            paragraphs: ['Antes de aprobar el diseño, confirma medidas finales, material, acabado, forma de corte y método de exhibición. El color de pantalla puede variar al imprimirse y las líneas demasiado finas pueden perder claridad en gran formato. Envía fotos y elementos gráficos propios o con licencia adecuada en la mejor calidad disponible. La revisión también debe comprobar ortografía, fecha, recorte, márgenes seguros y si hace falta caballete u otro soporte.'],
          },
          {
            heading: 'Cómo funciona la cotización',
            paragraphs: ['Elige el producto y tamaño más cercanos, abre los detalles, carga el arte o la inspiración disponible y agrega la configuración al carrito de cotización. Envía el carrito con los datos del evento. Magic Prints For You revisa la solicitud por email, confirma el alcance exacto y luego envía el enlace de Square por el importe aprobado.'],
          },
        ],
        conclusion: 'Una referencia útil comunica ambiente. Un board impreso exitoso añade diseño original, archivos correctos, tipografía legible y decisiones de producción adecuadas para el espacio real.',
      },
    },
  },
  {
    slug: 'choose-photo-board-size',
    image: '/images/blog/photo-board-guide.jpg',
    inspirationUrl: 'https://www.instagram.com/magicprintsforyou/reel/C7nBEASMOdq/',
    imageAlt: {
      en: 'Tall vertical photo board with a rounded top and a full-length portrait of a woman',
      es: 'Photo board vertical alto con parte superior redondeada y retrato de cuerpo entero de una mujer',
    },
    author: 'Magic Prints For You',
    content: {
      en: {
        title: 'How to Choose a 5×3, 6×4, 7×4 or 8×4 Photo Board',
        description: 'Compare photo board sizes by purpose, placement, artwork and venue conditions instead of guest count.',
        tag: 'Size guide',
        readTime: '4 min read',
        intro: [
          'A photo board should be chosen for what it needs to do in the room. Guest count alone does not reveal ceiling height, viewing distance, furniture, doorways, lighting or how much information must fit on the design. Start with the display location and the visual job: welcome sign, portrait feature, directional piece, stage element or photo backdrop.',
          'The example shown here uses a full-length portrait on one tall panel with a rounded top. It demonstrates how shape and crop influence the visual result, but it does not establish the panel’s dimensions. Always choose size from the actual venue, artwork and viewing conditions.',
        ],
        sections: [
          { heading: '5×3 ft: focused and easier to place', paragraphs: ['A 5×3 board can work as a welcome feature, portrait panel or supporting sign where wall and floor space are limited. Its narrower footprint is useful near an entrance, beside a dessert table or as one part of a layered arrangement. Keep the wording concise and test whether the main line remains readable from the expected approach path.'] },
          { heading: '6×4 ft: more visual presence', paragraphs: ['A 6×4 board gives a photograph and headline more room without becoming the entire environment. It can serve as a strong focal panel, especially when the venue has moderate ceiling height and a clear wall or floor area. Check the actual route from loading point to setup location; width, elevators, corners and doors matter.'] },
          { heading: '7×4 ft: tall statement panel', paragraphs: ['A 7×4 board creates a portrait-oriented statement and can support full-body photography, bold typography or a branded design. Consider sightlines and ceiling fixtures. The board should not block exits, venue signs or service paths. Its support and installation plan should be confirmed with the final material and location.'] },
          { heading: '8×4 ft: maximum height in this group', paragraphs: ['An 8×4 board can anchor a stage edge, photo area or large open wall. Height increases impact, but it also makes image quality, balance and setup conditions more important. Confirm ceiling clearance, floor level, access and the distance needed for guests or a photographer to see the complete design.'] },
          {
            heading: 'Use these questions before selecting',
            bullets: [
              'Where will the board stand, and what are the available height and width?',
              'Will people view it from across the room, while walking past, or while posing beside it?',
              'Does the artwork rely on one portrait, several photos, a seating list or short wording?',
              'Will florals, furniture, balloons or lighting cover any edge?',
              'Can the finished piece travel safely through the venue and stand securely in the planned position?',
            ],
          },
          { heading: 'From selection to exact quote', paragraphs: ['Use the size reference as an illustration, then choose the relevant product and variant. Upload the artwork or reference available, add it to the quote cart and submit the event details. Magic Prints For You follows up by email to confirm the specifications. The Square payment link is sent afterward for the exact approved quote.'] },
        ],
        conclusion: 'Choose the size that solves the visual and physical needs of the location. Measurements, artwork and viewing distance provide better guidance than the number of guests.',
      },
      es: {
        title: 'Cómo escoger un photo board de 5×3, 6×4, 7×4 u 8×4',
        description: 'Compara tamaños según función, ubicación, arte y condiciones del lugar, sin basarte en el número de invitados.',
        tag: 'Guía de tamaños',
        readTime: '4 min de lectura',
        intro: [
          'El tamaño del photo board debe responder a lo que necesita hacer dentro del espacio. La cantidad de invitados no revela la altura del techo, la distancia de lectura, los muebles, las puertas, la iluminación ni cuánto contenido llevará el diseño. Empieza por la ubicación y la función visual: bienvenida, retrato principal, señal de dirección, elemento de escenario o fondo para fotos.',
          'El ejemplo que aparece aquí utiliza un retrato de cuerpo entero sobre un panel alto con parte superior redondeada. Muestra cómo la forma y el recorte cambian el resultado visual, pero no establece las dimensiones de la pieza. El tamaño debe elegirse según el lugar, el arte y la distancia de observación.',
        ],
        sections: [
          { heading: '5×3 pies: enfocado y fácil de ubicar', paragraphs: ['Un board de 5×3 puede funcionar como bienvenida, retrato o letrero secundario cuando el área disponible es limitada. Su base más estrecha resulta útil en una entrada, junto a la mesa de postres o como parte de una composición. Mantén el texto breve y comprueba que la línea principal se lea desde el recorrido de llegada.'] },
          { heading: '6×4 pies: mayor presencia visual', paragraphs: ['El formato 6×4 ofrece más espacio para una fotografía y un título sin ocupar todo el ambiente. Puede ser un punto focal fuerte cuando el salón tiene altura moderada y una pared o área despejada. Revisa también el trayecto de carga: puertas, elevadores, esquinas y pasillos influyen en la instalación.'] },
          { heading: '7×4 pies: una pieza alta y llamativa', paragraphs: ['El board de 7×4 crea una presencia vertical adecuada para fotografía de cuerpo entero, tipografía grande o un diseño de marca. Considera las líneas de visión y las lámparas del techo. La pieza no debe bloquear salidas, señales del lugar ni rutas de servicio. El soporte se confirma según el material y la ubicación final.'] },
          { heading: '8×4 pies: la mayor altura de este grupo', paragraphs: ['Un board de 8×4 puede definir el borde de un escenario, un área de fotos o una pared abierta. La altura aumenta el impacto, pero también exige mejor calidad de imagen, equilibrio y planificación. Confirma la altura libre, el nivel del piso, el acceso y la distancia necesaria para ver el diseño completo.'] },
          {
            heading: 'Preguntas para elegir con claridad',
            bullets: [
              '¿Dónde estará el board y cuánto alto y ancho hay realmente?',
              '¿Se verá desde lejos, mientras las personas caminan o al posar junto a él?',
              '¿El arte lleva un retrato, varias fotos, una lista o solamente una frase?',
              '¿Flores, muebles, globos o luces cubrirán alguna parte?',
              '¿La pieza puede entrar al lugar y mantenerse segura en la posición prevista?',
            ],
          },
          { heading: 'De la selección a la cotización exacta', paragraphs: ['Usa la referencia de tamaño como ilustración y elige el producto y la variante correspondientes. Carga el arte o referencia disponible, agrégalo al carrito de cotización y envía los datos del evento. Magic Prints For You confirma las especificaciones por email. Después se envía el enlace de Square por el importe exacto aprobado.'] },
        ],
        conclusion: 'Elige el tamaño que resuelva las necesidades visuales y físicas del lugar. Las medidas, el arte y la distancia de observación orientan mejor que la cantidad de invitados.',
      },
    },
  },
  {
    slug: 'memory-gallery-event-installation',
    image: '/images/blog/memory-gallery.jpg',
    inspirationUrl: 'https://www.instagram.com/magicprintsforyou/p/Dcgjh-DkdQX/',
    imageAlt: {
      en: 'Multiple tall black-and-white photo panels arranged as a memory gallery with purple uplighting',
      es: 'Varios paneles altos con fotos en blanco y negro organizados como galería de recuerdos con iluminación morada',
    },
    author: 'Magic Prints For You',
    content: {
      en: {
        title: 'How to Turn Photographs into a Memory Gallery Installation',
        description: 'Plan a photo-led installation that organizes memories, works in the venue and creates a meaningful visual destination.',
        tag: 'Memory galleries',
        readTime: '3 min read',
        intro: [
          'Inspired by our “The Memory Gallery” post, this guide explains how photographs can become a spatial installation rather than a simple collage. The image shows multiple tall panels with black-and-white photographs arranged in a gentle curve and accented by purple uplighting.',
          'This format can support celebrations, planner-designed experiences and business events that need to present people, milestones or a visual story. The useful production lesson is to plan the photographs, panel sequence, lighting, floor space and viewing path as one composition.',
        ],
        sections: [
          { heading: 'Decide what story the gallery should tell', paragraphs: ['A chronological tribute, family history, founder story and event milestone need different sequences. Start by defining the beginning, middle and final impression. This helps determine how many photographs deserve prominence and which supporting images can appear at a smaller scale.'] },
          { heading: 'Design for people standing in front', paragraphs: ['Place essential information outside the area most likely to be covered by heads and bodies. Keep the main title high enough to remain visible, but not so close to the trim that it feels cramped. For group photographs, allow calmer areas near faces and avoid putting critical words across the center line where people will stand.'] },
          { heading: 'Create one visual system', paragraphs: ['Choose consistent crop rules, image treatments, margins and panel relationships. Black-and-white photographs can unify images from different periods, while controlled color can separate chapters. For business use, approved organizational marks and type should support the story without overpowering the people in the photographs.'] },
          {
            heading: 'Check the real environment',
            bullets: [
              'Measure usable wall and floor space, ceiling height and nearby doors or exit signs.',
              'Identify front light, overhead spots and colored event lighting that can change contrast.',
              'Reserve enough camera distance for full-width and group photographs.',
              'Keep walking, service and accessibility paths clear around the display.',
              'Plan how edges, panel joins or supports will interact with the artwork.',
            ],
          },
          { heading: 'Review the file at production scale', paragraphs: ['Use high-resolution photographs and vector logos when available. Check safe margins, spelling, crop and small text. A detail that looks strong on a laptop may disappear when viewed from across a ballroom, while an image that looks sharp on a phone may reveal artifacts when enlarged. The final material and panel structure should be considered during layout review.'] },
          { heading: 'Request the exact configuration', paragraphs: ['Browse the backdrop products, open the relevant item, choose the closest size and material, and upload the available artwork. Add the configuration to the quote cart and submit the event details. Magic Prints For You confirms the scope through email and sends the Square payment link after the exact quote is approved.'] },
        ],
        conclusion: 'A memory gallery succeeds when image selection, sequence, scale and venue planning work together. The result gives guests a natural place to pause, connect and understand the story.',
      },
      es: {
        title: 'Cómo convertir fotografías en una instalación de galería de recuerdos',
        description: 'Planifica una instalación fotográfica que organice recuerdos, funcione en el espacio y cree un destino visual significativo.',
        tag: 'Galerías de recuerdos',
        readTime: '3 min de lectura',
        intro: [
          'Inspirada en nuestra publicación “The Memory Gallery”, esta guía explica cómo las fotografías pueden convertirse en una instalación espacial y no solamente en un collage. La imagen muestra varios paneles altos con fotografías en blanco y negro, organizados en una curva suave y acentuados con iluminación morada.',
          'Este formato puede apoyar celebraciones, experiencias creadas por planners y eventos de negocios que presentan personas, hitos o una historia visual. La planificación debe integrar fotografías, secuencia, iluminación, piso y recorrido de observación.',
        ],
        sections: [
          { heading: 'Define la historia de la galería', paragraphs: ['Un homenaje cronológico, una historia familiar, el recorrido de una organización y un aniversario necesitan secuencias distintas. Define el inicio, el desarrollo y la impresión final. Así podrás decidir qué fotografías merecen protagonismo y cuáles funcionan como apoyo.'] },
          { heading: 'Diseña pensando en personas frente al fondo', paragraphs: ['Coloca la información esencial fuera del área que cubrirán cabezas y cuerpos. Mantén el título suficientemente alto para seguir visible, pero no tan cerca del corte que parezca apretado. Para fotos de grupo, deja zonas tranquilas alrededor de los rostros y evita poner palabras importantes en el centro donde todos se colocarán.'] },
          { heading: 'Crea un sistema visual común', paragraphs: ['Elige reglas consistentes para recortes, tratamiento de imagen, márgenes y relación entre paneles. El blanco y negro puede unificar fotos de distintas épocas; el color controlado puede separar capítulos. En un evento de negocio, las marcas y tipografías aprobadas deben apoyar la historia sin desplazar a las personas retratadas.'] },
          {
            heading: 'Comprueba el espacio real',
            bullets: [
              'Mide pared, piso y techo disponibles, además de puertas y señales cercanas.',
              'Identifica luz frontal, focos superiores y luces de color que pueden cambiar el contraste.',
              'Reserva distancia suficiente para fotografías completas y de grupos.',
              'Mantén libres las rutas de paso, servicio y accesibilidad.',
              'Planifica cómo los bordes, uniones o soportes se relacionan con el arte.',
            ],
          },
          { heading: 'Revisa el archivo a escala de producción', paragraphs: ['Usa fotografías de alta resolución y logos vectoriales cuando estén disponibles. Comprueba márgenes, ortografía, recorte y textos pequeños. Un detalle fuerte en la computadora puede desaparecer al verse desde el otro lado del salón, y una imagen nítida en el teléfono puede mostrar defectos al ampliarse. El material final y la estructura de paneles deben considerarse durante la revisión.'] },
          { heading: 'Solicita la configuración exacta', paragraphs: ['Explora los productos de backdrops, abre el artículo correspondiente, elige el tamaño y material más cercanos y carga el arte disponible. Agrega la configuración al carrito de cotización y envía los datos del evento. Magic Prints For You confirma el alcance por email y envía el enlace de Square después de aprobar la cotización exacta.'] },
        ],
        conclusion: 'Una galería de recuerdos funciona cuando selección, secuencia, escala y espacio se planifican juntos. El resultado ofrece a los invitados un lugar natural para detenerse, conectar y comprender la historia.',
      },
    },
  },
];

export const getBlogPost = (slug: string) => BLOG_POSTS.find((post) => post.slug === slug);
