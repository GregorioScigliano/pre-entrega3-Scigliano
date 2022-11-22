const contenedorProducto = document.querySelector(".row")



stockProductos.forEach((producto) => {
    let sinStock = 'Carrito'
    if(producto.stock === 0) {
        sinStock = 'Sin Stock'
    }

    const div = document.createElement('div')
    div.classList = 'col-12 col-md-6 col-lg-4 mi-main__card'

    const div2 = document.createElement('div')
    div2.classList = 'card text-bg-dark mb-3'
    div2.setAttribute('style', "width: 18rem")

    div2.innerHTML = `
        <img src=${producto.img} class="mi-main__card--img" alt="Cuadro2">
    `

    const div3 = document.createElement('div')
    div3.classList = 'card-body'

    div3.innerHTML = `
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">$${2000}</p>
    `

    const boton = document.createElement('button')
    boton.classList = "btn btn-primary"
    boton.innerHTML = sinStock

    boton.addEventListener('click', () => {
        if (producto.stock > 0) {
        elementosEnElCarrito.push(producto)
        }
    })

    div3.append(boton)
    div2.append(div3)
    div.append(div2)
    



    contenedorProducto.append(div)
    
})







