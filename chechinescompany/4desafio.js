// Agregar dos clases nuevas
document.getElementById("modify").classList.add("mision");
document.querySelector(".modify").classList.add("correo");
document.querySelector(".row.bg-primary.bg-opacity-25.p-4").classList.add("about-us");

// Cambiar el texto de la misión de la empresa y el correo de contacto
let mision = document.querySelector(".mision").textContent = "Nuestra misión consiste en ser el motor que impulsa la innovación y la revolución digital en diversos sectores. Nos especializamos en ofrecer soluciones de software de última generación que abordan desafíos complejos, al tiempo que generamos un impacto positivo a nivel global. Trabajamos incansablemente para forjar un mundo más eficiente y conectado, aportando soluciones tecnológicas de excelencia que marcan la diferencia en múltiples industrias";
let email = document.querySelector(".correo").textContent = "chechinessoft@.com";

// Obtener elementos por ID 
const misiontext = document.getElementById("modify");
const correo = document.querySelector(".modify");   

//Crear una nueva sección utilizando párrafos como mínimo
let nuevaSeccion = document.createElement('div')
nuevaSeccion.classList.add("new-section");
let aboutSection = document.querySelector('.about-us')


let imagen = document.createElement("img");
imagen.src = "https://c.wallhere.com/photos/4c/30/2880x1800_px_Anatomy_Binary_bones_circle_Code_computer_digital_art-570261.jpg!d"
let text1 = document.createElement("p");
text1.textContent = "¡Bienvenido a Chechines Soft, donde la innovación toma forma! En nuestro mundo, somos los artífices de un mañana más inteligente, y nos enorgullece liderar el camino en el emocionante reino del desarrollo de software. Aquí, las ideas se transforman en soluciones, los desafíos se convierten en oportunidades y la tecnología se teje en las fibras del progreso. ¡Únete a nosotros en esta emocionante aventura hacia un futuro tecnológico inigualable!";
let text2 = document.createElement("p");
text2.textContent = "Nuestra pasión es crear soluciones tecnológicas que impulsen tu negocio.";

aboutSection.appendChild(nuevaSeccion)
nuevaSeccion.appendChild(imagen)
nuevaSeccion.appendChild(text1)
nuevaSeccion.appendChild(text2) 

//Eliminar facebook
document.getElementById("facebook").remove();



//Stilos
nuevaSeccion.style.backgroundColor = "#d6eef2";
imagen.style.height = "350px";

text1.style.fontFamily = "Proxima Nova Arial, sans-serif"
text1.style.fontSize = "16px"; 
text1.style.color = "#17494d";

text2.style.fontFamily = "Proxima Nova Arial, sans-serif"; 
text2.style.fontSize = "16px"; 
text2.style.color = "#17494d";  

