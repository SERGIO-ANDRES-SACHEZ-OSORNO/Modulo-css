import { persona } from "./persona.js";

const sectionMain= document.createElement('section');
const parrafoPrincipal= document.createElement('p');
parrafoPrincipal.innerHTML=persona[0].primernombre + '' + persona[0].apellido;
sectionMain.innerHTML.classlist.add("main");

document.body.appendChild(parrafoPrincipal);

const divisionPagina=() => {
    const seccion=    
    `
    <section class="main">
        <p>Esto es un parrafo</p>
    </section>
    `;
}
sectionMain.innerHTML=section;
document.body.appendChild(sectionMain);