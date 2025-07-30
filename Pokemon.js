const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonPokemonJugador = document.getElementById('boton-pokemon')
const botonReiniciar = document.getElementById('boton-reiniciar')
sectionReiniciar.style.display = 'none'

const seccionSeleccionarPokemon = document.getElementById('seleccionar-pokemon')
const spanMascotaJugador = document.getElementById('pokemon-jugador')

const spanPokemonEnemigo = document.getElementById('pokemon-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

let pokemones = []
let ataqueJugador =[]
let ataqueEnemigo = []
let opcionDePokemon
let inputSnom
let inputChikorita
let inputDratini
let inputLapras
let inputFlareon
let pokemonJugador
let pokemonJugaedorObjeto
let ataquesPokemon
let ataquesPokemonEnemigo
let botonHielo
let botonPlanta
let botonDragon
let botonFuego
let botonAgua
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0 
let vidasJugador = 3
let vidasEnemigo = 3
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = './assets/pokemonmap.png'
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
const anchoMaximoDelMapa = 350

if (anchoDelMapa > anchoMaximoDelMapa) {
    anchoDelMapa = anchoMaximoDelMapa - 20
}

alturaQueBuscamos = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

class Pokemon {
    constructor(nombre, foto, vida, fotoMapa) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 40
        this.alto = 40
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }

    pintarMokepon() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}

let Snom = new Pokemon('Snom', './assets/Snomface.png', 5, './assets/Snom.png')

let Chikorita = new Pokemon('Chikorita', './assets/Chikorita.png', 5, './assets/Chikoritaface.png')

let Dratini = new Pokemon('Dratini', './assets/Dratini.png', 5, './assets/Dratiniface.png')

let Lapras = new Pokemon('Lapras', './assets/Lapras.png', 5, './assets/Laprasface.png')

let Flareon = new Pokemon('Flareon', './assets/Flareon.jpg', 5, './assets/Flareonface.png')

let SnomEnemigo = new Pokemon('Snom', './assets/Snomface.png', 5, './assets/Snom.png')

let ChikoritaEnemigo = new Pokemon('Chikorita', './assets/Chikorita.png', 5, './assets/Chikoritaface.png')

let DratiniEnemigo = new Pokemon('Dratini', './assets/Dratini.png', 5, './assets/Dratiniface.png')

let LaprasEnemigo = new Pokemon('Lapras', './assets/Lapras.png', 5, './assets/Laprasface.png')

let FlareonEnemigo = new Pokemon('Flareon', './assets/Flareon.png', 5, './assets/Flareonface.png')

Snom.ataques.push(
    { nombre: '🧊', id: 'boton-Hielo' },
    { nombre: '🌱', id: 'boton-Planta' },
    { nombre: '🐲', id: 'boton-Dragon' },
    { nombre: '💧', id: 'boton-Agua' },
    { nombre: '🔥', id: 'boton-Fuego' },
)

SnomEnemigo.ataques.push(
    { nombre: '🧊', id: 'boton-Hielo' },
    { nombre: '🌱', id: 'boton-Planta' },
    { nombre: '🐲', id: 'boton-Dragon' },
    { nombre: '💧', id: 'boton-Agua' },
    { nombre: '🔥', id: 'boton-Fuego' },
    
)

Chikorita.ataques.push(
    { nombre: '🌱', id: 'boton-Planta' },
    { nombre: '🧊', id: 'boton-Hielo' },
    { nombre: '🐲', id: 'boton-Dragon' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    
)

ChikoritaEnemigo.ataques.push(
    { nombre: '🌱', id: 'boton-Planta' },
    { nombre: '🧊', id: 'boton-Hielo' },
    { nombre: '🐲', id: 'boton-Dragon' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    
)

Dratini.ataques.push(
    { nombre: '🐲', id: 'boton-Dragon' }, 
    { nombre: '🧊', id: 'boton-Hielo' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-Fuego' },
    { nombre: '🌱', id: 'boton-Planta' },
)

DratiniEnemigo.ataques.push(
    { nombre: '🐲', id: 'boton-Dragon' }, 
    { nombre: '🧊', id: 'boton-Hielo' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-Fuego' },
    { nombre: '🌱', id: 'boton-Planta' },
    
)

Lapras.ataques.push(
    { nombre: '💧', id: 'boton-Agua' }, 
    { nombre: '🧊', id: 'boton-Hielo' },
    { nombre: '🐲', id: 'boton-Dragon' },
    { nombre: '🔥', id: 'boton-Fuego' },
    { nombre: '🌱', id: 'boton-Planta' },
)

LaprasEnemigo.ataques.push(
    { nombre: '💧', id: 'boton-Agua' }, 
    { nombre: '🧊', id: 'boton-Hielo' },
    { nombre: '🐲', id: 'boton-Dragon' },
    { nombre: '🔥', id: 'boton-Fuego' },
    { nombre: '🌱', id: 'boton-Planta' }, 
)

Flareon.ataques.push(
    { nombre: '🔥', id: 'boton-Fuego' }, 
    { nombre: '🧊', id: 'boton-Hielo' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🐲', id: 'boton-Dragon' },
    { nombre: '🌱', id: 'boton-Planta' },
)

FlareonEnemigo.ataques.push(
    { nombre: '🔥', id: 'boton-Fuego' }, 
    { nombre: '🧊', id: 'boton-Hielo' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🐲', id: 'boton-Dragon' },
    { nombre: '🌱', id: 'boton-Planta' },
)

pokemones.push(Snom,Chikorita,Dratini,Lapras,Flareon)

function iniciarJuego() {
    
    sectionSeleccionarAtaque.style.display = 'none'
    sectionVerMapa.style.display = 'none'

    pokemones.forEach((pokemon) => {
        opcionDePokemon = `
        <input type="radio" name="pokemon" id=${pokemon.nombre} />
        <label class="tarjeta-de-pokemon" for=${pokemon.nombre}>
            <p>${pokemon.nombre}</p>
            <img src=${pokemon.foto} alt=${pokemon.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDePokemon

     inputSnom = document.getElementById('Snom')
     inputChikorita = document.getElementById('Chikorita')
     inputDratini = document.getElementById('Dratini')
     inputLapras = document.getElementById('Lapras')
     inputFlareon = document.getElementById('Flareon')

    })
    
    botonPokemonJugador.addEventListener('click', seleccionarPokemonJugador)

    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarPokemonJugador() {
    
    seccionSeleccionarPokemon.style.display = 'none'
    
    if (inputSnom.checked) {
        spanMascotaJugador.innerHTML = inputSnom.id
        pokemonJugador = inputSnom.id
    } else if (inputChikorita.checked) {
        spanMascotaJugador.innerHTML = inputChikorita.id
        pokemonJugador = inputChikorita.id
    } else if (inputDratini.checked) {
        spanMascotaJugador.innerHTML = inputDratini.id
        pokemonJugador = inputDratini.id
    } else if (inputLapras.checked) {
        spanMascotaJugador.innerHTML = inputLapras.id
        pokemonJugador = inputLapras.id
    } else if (inputFlareon.checked) {
        spanMascotaJugador.innerHTML = inputFlareon.id
        pokemonJugador = inputFlareon.id
    } else {
        alert('Selecciona un pokemon')
    }

    extraerAtaques(pokemonJugador)
    sectionVerMapa.style.display = 'flex'
    iniciarMapa()
}

function extraerAtaques(pokemonJugador) {
    let ataques
    for (let i = 0; i < pokemones.length; i++) {
        if (pokemonJugador === pokemones[i].nombre) {
            ataques = pokemones[i].ataques
        }
        
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesPokemon = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesPokemon
    })

     botonHielo = document.getElementById('boton-hielo')
     botonPlanta = document.getElementById('boton-planta')
     botonDragon = document.getElementById('boton-dragon')
     botonAgua = document.getElementById('boton-agua')
     botonFuego = document.getElementById('boton-fuego')
     botones = document.querySelectorAll('.BAtaque')
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#ca5151ff'
                boton.disabled = true   
            } else if (e.target.textContent === '💧') {
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#ca5151ff'
                boton.disabled = true 
            } else if (e.target.textContent === '🐲') {
                ataqueJugador.push('DRAGON')
                console.log(ataqueJugador)
                boton.style.background = '#ca5151ff'
                boton.disabled = true  
            } else if (e.target.textContent === '🧊') {
                ataqueJugador.push('HIELO')
                console.log(ataqueJugador)
                boton.style.background = '#ca5151ff'
                boton.disabled = true   
            } else {
                ataqueJugador.push('PLANTA')
                console.log(ataqueJugador)
                boton.style.background = '#ca5151ff'
                boton.disabled = true  
            }
            ataqueAleatorioEnemigo()
        })
    })
    

}

function seleccionarPokemonEnemigo(enemigo) {
    spanPokemonEnemigo.innerHTML = enemigo.nombre
    ataquesPokemonEnemigo = enemigo.ataques
    secuenciaAtaque()
}


function ataqueAleatorioEnemigo() {
    console.log('Ataques enemigo', ataquesPokemonEnemigo);
    let ataqueAleatorio = aleatorio(0,ataquesPokemonEnemigo.length -1)
    
    if (ataqueAleatorio == 0 || ataqueAleatorio ==1) {
        ataqueEnemigo.push('HIELO')
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('PLANTA')
    } else if (ataqueAleatorio== 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('DRAGON')
    } else if (ataqueAleatorio== 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('AGUA')
    } else {
        ataqueEnemigo.push('FUEGO')
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea() {
    if (ataqueJugador.length === 5) {
        combate()
    }
}

function indexAmbosOponente(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {
    
    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponente(index, index)
            crearMensaje("EMPATE")
        } else if (ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'HIELO') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] ==='FUEGO' && ataqueEnemigo[index] === 'PLANTA') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'AGUA' && ataqueEnemigo[index] === 'FUEGO') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'DRAGON' && ataqueEnemigo[index] === 'FUEGO') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'PLANTA' && ataqueEnemigo[index] === 'AGUA') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'DRAGON' && ataqueEnemigo[index] === 'AGUA') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'HIELO' && ataqueEnemigo[index] === 'AGUA') {
            indexAmbosOponente(index, index)
            crearMensaje("EMPATE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'HIELO' && ataqueEnemigo[index] === 'PLANTA') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'HIELO' && ataqueEnemigo[index] === 'DRAGON') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'HIELO') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'DRAGON' && ataqueEnemigo[index] === 'PLANTA') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'DRAGON' && ataqueEnemigo[index] === 'DRAGON') {
            indexAmbosOponente(index, index)
            crearMensaje("EMPATE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'PLANTA' && ataqueEnemigo[index] === 'PLANTA') {
            indexAmbosOponente(index, index)
            crearMensaje("EMPATE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'HIELO' && ataqueEnemigo[index] === 'HIELO') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'AGUA' && ataqueEnemigo[index] === 'AGUA') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'FUEGO') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else {
            indexAmbosOponente(index, index)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
    }

    revisarVidas()
}

function revisarVidas() {
    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal("Esto fue un empate!!!")
    } else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal("FELICITACIONES! Ganaste :)")
    } else {
        crearMensajeFinal('Lo siento, perdiste :(')
    }
}

function crearMensaje(resultado) {
    
    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    
    
    sectionMensajes.innerHTML = resultadoFinal


    
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function pintarCanvas() {
    pokemonJugaedorObjeto.x = pokemonJugaedorObjeto.x + pokemonJugaedorObjeto.velocidadX
    pokemonJugaedorObjeto.y = pokemonJugaedorObjeto.y + pokemonJugaedorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    pokemonJugaedorObjeto.pintarMokepon()
        SnomEnemigo.pintarMokepon()
        ChikoritaEnemigo.pintarMokepon()
        DratiniEnemigo.pintarMokepon()
        LaprasEnemigo.pintarMokepon()
        FlareonEnemigo.pintarMokepon()
    if (pokemonJugaedorObjeto.velocidadX !== 0 || pokemonJugaedorObjeto.velocidadY !== 0) {
        revisarColision(SnomEnemigo)
        revisarColision(ChikoritaEnemigo)
        revisarColision(DratiniEnemigo)
        revisarColision(LaprasEnemigo)
        revisarColision(FlareonEnemigo)
    }
}

function moverDerecha() {
    pokemonJugaedorObjeto.velocidadX = 5
}

function moverIzquierda() {
    pokemonJugaedorObjeto.velocidadX = -5
}

function moverAbajo() {
    pokemonJugaedorObjeto.velocidadY = 5
}

function moverArriba() {
    pokemonJugaedorObjeto.velocidadY = -5
}

function detenerMovimiento() {
    pokemonJugaedorObjeto.velocidadX = 0
    pokemonJugaedorObjeto.velocidadY = 0
}

function sePresionoUnaTecla(event) {
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        case 'ArrowRight':
            moverDerecha()
            break
        default:
            break
    }
}

function iniciarMapa() {

    pokemonJugaedorObjeto = obtenerObjetoMascota(pokemonJugador)
    console.log(pokemonJugaedorObjeto, pokemonJugador);
    intervalo = setInterval(pintarCanvas, 50)
    
    window.addEventListener('keydown', sePresionoUnaTecla)

    window.addEventListener('keyup', detenerMovimiento)
}

function obtenerObjetoMascota() {
    for (let i = 0; i < pokemones.length; i++) {
        if (pokemonJugador === pokemones[i].nombre) {
            return pokemones[i]
        }
        
    }
}

function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota = 
        pokemonJugaedorObjeto.y
    const abajoMascota = 
        pokemonJugaedorObjeto.y + pokemonJugaedorObjeto.alto
    const derechaMascota = 
        pokemonJugaedorObjeto.x + pokemonJugaedorObjeto.ancho
    const izquierdaMascota = 
        pokemonJugaedorObjeto.x

    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ) {
        return
    }

    detenerMovimiento()
    clearInterval(intervalo)
    console.log('Se detecto una colision');
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionVerMapa.style.display = 'none'
    seleccionarPokemonEnemigo(enemigo)
}

window.addEventListener('load', iniciarJuego)