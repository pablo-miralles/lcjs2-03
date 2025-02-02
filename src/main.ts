const tituloGrupo =
	"font-size: 1.125rem; padding: 0.5rem 1rem; background: lightgreen; font-weight: 700";

interface GrupoMusical {
	nombre: string;
	año: number;
	estaActivo: boolean;
	genero: string;
}

const grupo1: GrupoMusical = {
	nombre: "The Beatles",
	año: 1960,
	estaActivo: true,
	genero: "🎵 Pop Rock",
};

console.log(`%c${grupo1.nombre}`, tituloGrupo);
console.log(`Año: ${grupo1.año}`);
console.log("Activo: " + grupo1.estaActivo);
console.log("Género: " + grupo1.genero);

const grupo2: GrupoMusical = {
	nombre: "Queen",
	año: 1970,
	estaActivo: false,
	genero: "🎸 Rock",
};

console.log(`%c${grupo2.nombre}`, tituloGrupo);
console.log(`Año: ${grupo2.año}`);
console.log("Activo: " + grupo2.estaActivo);
console.log("Género: " + grupo2.genero);

const grupo3: GrupoMusical = {
	nombre: "AC DC",
	año: 1973,
	estaActivo: true,
	genero: "🤘 Hard Rock",
};

console.log(`%c${grupo3.nombre}`, tituloGrupo);
console.log(`Año: ${grupo3.año}`);
console.log("Activo: " + grupo3.estaActivo);
console.log("Género: " + grupo3.genero);

const grupo4: GrupoMusical = {
	nombre: "Ludwig van Beethoven",
	año: 1770,
	estaActivo: false,
	genero: "🎼 Clásica",
};

console.log(`%c${grupo4.nombre}`, tituloGrupo);
console.log(`Año: ${grupo4.año}`);
console.log("Activo: " + grupo4.estaActivo);
console.log("Género: " + grupo4.genero);

const grupo5: GrupoMusical = {
	nombre: "The Rolling Stones",
	año: 1962,
	estaActivo: true,
	genero: "🎵 Pop Rock",
};

console.log(`%c${grupo5.nombre}`, tituloGrupo);
console.log(`Año: ${grupo5.año}`);
console.log("Activo: " + grupo5.estaActivo);
console.log("Género: " + grupo5.genero);
