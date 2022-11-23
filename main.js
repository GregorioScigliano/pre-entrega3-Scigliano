const contenedorProducto = document.querySelector(".row")
const botonCarrito77 = document.querySelector("#boton-carrito77")
const modalBody = document.querySelector("#mi-modal-body") 
const borrarCarrito = document.querySelector("#mi-boton-borrar")

let elementosEnElCarrito = JSON.parse(localStorage.getItem("carrito"))

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
        <img src=${producto.img} class="mi-main__card--img" alt="${producto.nombre}">
    `

    const div3 = document.createElement('div')
    div3.classList = 'card-body'

    div3.innerHTML = `
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">$${producto.precio}</p>
    `

    const boton = document.createElement('button')
    boton.classList = "btn btn-primary"
    boton.innerHTML = sinStock

    boton.addEventListener('click', () => {
        if (producto.stock > 0) {
        elementosEnElCarrito.push(producto)
        localStorage.setItem("carrito", JSON.stringify(elementosEnElCarrito))
        }
    })

   

    div3.append(boton)
    div2.append(div3)
    div.append(div2)
    
    contenedorProducto.append(div)
})



//como agregar cosas al carrito

//  const agregarAlCarrito = (id) => {
//     const producto = stockProductos.find( (elem) => elem.id === id)
//     elementosEnElCarrito.push(producto)

//     console.log(elementosEnElCarrito)
     
//  }

const llenarCarrito = () => {
    modalBody.innerHTML = ''
    let precioTotal = 0

    elementosEnElCarrito.forEach((producto) => {
        
        precioTotal = precioTotal + parseInt(producto.precio)

        const divC = document.createElement('div')
        divC.className = "txtCarrito"
        divC.innerHTML =
        `
            <p>${producto.nombre}</p>
            <p>$${producto.precio}</p>
        `
    
        modalBody.append(divC)
    })

    const divSuma = document.createElement('div')
    divSuma.className = "txtCarrito"
    divSuma.innerHTML = `
    <p>Total </p> = $${precioTotal}
    `

    modalBody.append(divSuma)
}

botonCarrito77.addEventListener('click', llenarCarrito)

borrarCarrito.addEventListener('click', () => {
    elementosEnElCarrito = []
    localStorage.clear()

    modalBody.innerHTML = ''

} )






















