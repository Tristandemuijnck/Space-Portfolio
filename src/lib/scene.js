import * as THREE from 'three'
import getStarfield from './starfield'
import {
    OrbitControls
} from 'three/addons/controls/OrbitControls.js'
import GUI from 'lil-gui'
import {
    GLTFLoader
} from 'three/addons/loaders/GLTFLoader.js'

let renderer
let planet
const gui = new GUI()

/* ---------------------------------- Scene --------------------------------- */

const scene = new THREE.Scene()
scene.background = new THREE.Color(0x090909)

/* --------------------------------- Camera --------------------------------- */

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 2000)
camera.position.z = 8

/* ----------------------------- Star background ---------------------------- */

const stars = getStarfield({
    numStars: 8000
})
scene.add(stars)

/* ---------------------------------- Light --------------------------------- */

// Ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, .5);
scene.add(ambientLight);

// Key light
const keyLight = new THREE.DirectionalLight(0xffddcc, 3);
keyLight.position.set(3, 3, 4);
keyLight.castShadow = true;
keyLight.shadow.mapSize.width = 4096;
keyLight.shadow.mapSize.height = 4096;
keyLight.shadow.camera.near = 3;
keyLight.shadow.camera.far = 8;
keyLight.shadow.camera.left = -3;
keyLight.shadow.camera.right = 3;
keyLight.shadow.camera.top = 3;
keyLight.shadow.camera.bottom = -3;
scene.add(keyLight);

// Fill light
const fillLight = new THREE.DirectionalLight(0xffffff, 0.9);
fillLight.position.set(-5, -1, 3);
fillLight.castShadow = false;
scene.add(fillLight);

// Back light
const backLight = new THREE.DirectionalLight(0xccccff, 1.1);
backLight.position.set(0, -1.5, -5);
backLight.castShadow = false;
scene.add(backLight);

/* --------------------------------- Loader --------------------------------- */

const gltfLoader = new GLTFLoader()

/* ---------------------------------- Model --------------------------------- */

gltfLoader.load('/models/Planet.glb', (gltf) => {
    console.log(gltf)
    planet = gltf.scene
    scene.add(planet)

    planet.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true
            child.receiveShadow = true
        }
    })
})

/* --------------------------------- Islands -------------------------------- */

const islandOneGeo = new THREE.SphereGeometry(0.2, 16, 16)
const islandOneMat = new THREE.MeshStandardMaterial({
    color: 0xff0000
})

const islandTwoGeo = new THREE.SphereGeometry(0.2, 16, 16)
const islandTwoMat = new THREE.MeshStandardMaterial({
    color: 0x00ff00
})

const islandOneMesh = new THREE.Mesh(islandOneGeo, islandOneMat)
islandOneMesh.position.set(3, 0, 0)
// planet.add(islandOneMesh)

const islandTwoMesh = new THREE.Mesh(islandTwoGeo, islandTwoMat)
islandTwoMesh.position.set(-3, 0, 0)
// planet.add(islandTwoMesh)

/* --------------------------------- Resize --------------------------------- */

const resize = () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
}

/* --------------------------------- Pointer -------------------------------- */

const pointer = new THREE.Vector2();

const onPointerMove = (event) => {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
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
        controls.update()

        if (planet) {
            planet.rotation.y += 0.001
        }

        renderer.render(scene, camera)
    }

    animate()
}

/* -------------------------------- Listeners ------------------------------- */

window.addEventListener('mousemove', onPointerMove)
window.addEventListener('resize', resize)