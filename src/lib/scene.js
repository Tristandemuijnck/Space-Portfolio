import * as THREE from 'three'

// Nieuwe scene maken
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x090909)

/* --------------------------------- Camera --------------------------------- */

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.8, 1000)
// camera.position.z = 5

/* -------------------------------- Geometry -------------------------------- */

const getRandomParticlePos = (particleCount) => {
    const arr = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
        arr[i] = (Math.random() - 0.5) * 10
    }
    return arr
}

const geometry = new THREE.BufferGeometry()
geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(getRandomParticlePos(4000), 3)
)

/* --------------------------------- Loader --------------------------------- */

const loader = new THREE.TextureLoader()

/* -------------------------------- Material -------------------------------- */

const material = new THREE.PointsMaterial({
    // color: 0xf98f2b,
    size: 0.05,
    map: loader.load("/img/star.png"),
    transparent: true,
})

/* ---------------------------------- Mesh ---------------------------------- */

const cube = new THREE.Points(geometry, material)
scene.add(cube)

/* ---------------------------------- Light --------------------------------- */

const directionalLight = new THREE.DirectionalLight(0x9090aa)
directionalLight.position.set(-1, 2, 4).normalize()
scene.add(directionalLight)

// const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444)
// hemisphereLight.position.set(1, 1, 1)
// scene.add(hemisphereLight)

/* ---------------------------------- Mouse --------------------------------- */

let mouseX = 0
let mouseY = 0
document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX
    mouseY = event.clientY
})

// Renderer
let renderer

/* -------------------------------- Animation ------------------------------- */

const animate = () => {
    requestAnimationFrame(animate)
    cube.rotation.x += 0.0002
    cube.rotation.y += 0.0001
    cube.position.x = mouseX * 0.0007
    cube.position.z = mouseY * -0.0007
    renderer.render(scene, camera)
}

/* --------------------------------- Resize --------------------------------- */

const resize = () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
}

/* ---------------------------------- Main ---------------------------------- */

export const createScene = (canvas) => {
    renderer = new THREE.WebGLRenderer({ canvas })
    resize()
    animate()
}

/* -------------------------------- Listeners ------------------------------- */

window.addEventListener('resize', resize)
