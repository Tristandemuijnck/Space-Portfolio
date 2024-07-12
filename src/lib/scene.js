import * as THREE from 'three'
import getStarfield from './starfield'
import {
    OrbitControls
} from 'three/addons/controls/OrbitControls.js'

/* ---------------------------------- Scene --------------------------------- */

const scene = new THREE.Scene()
scene.background = new THREE.Color(0x090909)

/* --------------------------------- Camera --------------------------------- */

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000)
camera.position.z = 6

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
    new THREE.BufferAttribute(getRandomParticlePos(6000), 3)
)

/* --------------------------------- Loader --------------------------------- */

const loader = new THREE.TextureLoader()

/* -------------------------------- Material -------------------------------- */

const material = new THREE.PointsMaterial({
    size: 0.02,
    map: loader.load("/img/star.png"),
    transparent: true,
})

/* ---------------------------------- Mesh ---------------------------------- */

const star = new THREE.Points(geometry, material)
const stars = getStarfield({
    numStars: 8000
})
scene.add(stars)

/* ---------------------------------- Light --------------------------------- */

const directionalLight = new THREE.DirectionalLight(0x9090aa)
directionalLight.position.set(-1, 2, 4).normalize()
scene.add(directionalLight)

/* ---------------------------------- Mouse --------------------------------- */

let mouseX = 0
let mouseY = 0
document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX
    mouseY = event.clientY
})

/* -------------------------------- Renderer -------------------------------- */

let renderer

/* --------------------------------- Planet --------------------------------- */

const planetGeo = new THREE.SphereGeometry(3, 32, 32)
const planetMat = new THREE.MeshBasicMaterial({
    color: 0x0000ff,
    transparent: false,
    wireframe: true
})
const planet = new THREE.Mesh(planetGeo, planetMat)
scene.add(planet)

/* --------------------------------- Islands -------------------------------- */

const islandGeo = new THREE.SphereGeometry(0.2, 16, 16)
const islandMat = new THREE.MeshBasicMaterial({
    color: 0xff0000
})

const islands = [{
        position: new THREE.Vector3(3, 0, 0)
    },
    {
        position: new THREE.Vector3(-3, 0, 0)
    }
]

islands.forEach(island => {
    const islandMesh = new THREE.Mesh(islandGeo, islandMat)
    islandMesh.position.copy(island.position)
    planet.add(islandMesh)
})

/* --------------------------------- Resize --------------------------------- */

const resize = () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
}

/* ---------------------------------- Main ---------------------------------- */

export const createScene = (canvas) => {
    renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true
    })

    const controls = new OrbitControls(camera, canvas)
    controls.update()
    controls.enableDamping = true
    controls.dampingFactor = 0.025
    controls.enablePan = false
    controls.enableZoom = true
    controls.maxDistance = 10
    controls.minDistance = 6
    controls.rotateSpeed = 0.25

    resize()

    const animate = () => {
        requestAnimationFrame(animate)
        star.rotation.x += 0.0002
        star.rotation.y += 0.0001
        star.position.x = mouseX * 0.0002
        star.position.z = mouseY * -0.0002
        planet.rotation.y += 0.0025
        controls.update()
        renderer.render(scene, camera)
    }

    animate()
}

/* -------------------------------- Listeners ------------------------------- */

window.addEventListener('resize', resize)