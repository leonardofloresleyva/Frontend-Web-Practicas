import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import "../public/hola.css"

const titulo = createElement("h1", null, "Hola mundo");
const boton1 = createElement('button', { 'data-id': 123 }, 'Boton 1');
const boton2 = createElement('button', { 'data-id': 456 }, 'Boton 2');
const boton3 = createElement('button', { 'data-id': 789 }, 'Boton 3');

createRoot(document.getElementById('root')!).render(
  createElement("div", null, titulo, boton1, boton2, boton3)
);
