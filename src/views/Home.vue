<template>
    <main>
        <div class="container py-4">
            <header class="pb-3 mb-4 border-bottom">
                <div>
                    <i class="bi bi-wrench-adjustable-circle h3"></i>
                    <span class="fs-4">Proyecto conexión Vue 3 con API Node.js</span>
                </div>
            </header>
            <div class="p-5 mb-4 bg-light rounded-3">
                <div class="container-fluid py-5">
                    <h1 class="display-5 fw-bold">Título contenido</h1>
                    <p class="col-md-8 fs-4">Usando una serie de utilidades, puede crear este jumbotron, como el de
                        versiones anteriores de Bootstrap. Echa un vistazo a los ejemplos a continuación para saber cómo
                        puedes remezclarlo y cambiarle el estilo a tu gusto.</p>
                    <button class="btn btn-primary btn-lg" type="button">Botón de ejemplo</button>
                </div>
            </div>
            <div class="row align-items-md-stretch">
                <div class="col-md-6">
                    <div class="h-100 p-5 text-white bg-dark rounded-3">
                        <h2>Cambiando el fondo</h2>
                        <p>Cambia la utilidad de color de fondo y agregue una utilidad de color `.text-*` para mezclar el
                            aspecto jumbotron. Luego, mezcla y combine con temas de componentes adicionales y más.</p>
                        <button class="btn btn-outline-light" type="button">Botón de ejemplo</button>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="h-100 p-5 bg-light border rounded-3">
                        <h2>Añadir bordes</h2>
                        <p>O manténlo ligero y agrega un borde para darle una definición adicional a los límites de su
                            contenido. Asegúrate de mirar debajo del capó en el HTML de origen aquí, ya que hemos ajustado
                            la alineación y el tamaño del contenido de ambas columnas para que tengan la misma altura.</p>
                        <button class="btn btn-outline-secondary" type="button">Botón de ejemplo</button>
                    </div>
                </div>
            </div>
            <footer class="pt-3 mt-4 text-muted border-top">
                &copy; 2023
        </footer>
    </div>
</main></template>

<script>
export default {
    name: 'Home'
}
</script>