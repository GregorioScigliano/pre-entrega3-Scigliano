const contenedorCardBandas = document.querySelector(".row")

bandas.forEach((banda) => {
    const div = document.createElement('div')
    div.classList = 'col-12 col-md-6 col-lg-4 mi-main__card'

    const div2 = document.createElement('div')
    div2.classList = 'card text-bg-dark mb-3'
    div2.setAttribute('style', "width: 18rem")

    div2.innerHTML = `
    <img src=${banda.img} class="mi-main__card--img" alt="${banda.nombre}">
    `

    const div3 = document.createElement('div')
    div3.classList = 'card-body'

    div3.innerHTML =`
        <h5 class="card-title">${banda.nombre}</h5>
        <p class="card-text">${banda.descripcion}</p>
    `

    const boton = document.createElement('button')
    boton.classList = "btn btn-primary"
    boton.innerHTML = `
    <a class ="aBoton" href="${banda.href}">"Ver Banda"</a>
    `
    // hacer boton que me lleve al html de cada banda en especifo, agregar al array de bandas el href? del html correspondiente

    div3.append(boton)
    div2.append(div3)
    div.append(div2)

    contenedorCardBandas.append(div)

} )