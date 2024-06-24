/*
Every three.js app you create will require all six of these steps, although more complex apps will often require many more.

    1. Initial Setup
    2. Create the Scene
    3. Create the Camera
    4. Create a Visible Object
    5. Create the Renderer
    6. Render the Scene
*/

import * as THREE from "three";

const container = document.querySelector("#scene-container");

// 1. Create the Scene
const scene = new THREE.Scene(); // Create the Scene#
scene.background = new THREE.Color("skyblue"); //Set the Scene’s Background Color#

// 2. Create a camera
const fov = 35; // AKA Field of View
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1; // the near clipping plane
const far = 100; // the far clipping plane

const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
// every object is initially created at ( 0, 0, 0 )
// move the camera back so we can view the scene
camera.position.set(0, 0, 10);

// 3. Create a Visible Object

//Create geometry
const geometry = new THREE.BoxGeometry(2, 2, 2);

// create a default (white) Basic material
const material = new THREE.MeshBasicMaterial();

// create a Mesh containing the geometry and material
const cube = new THREE.Mesh(geometry, material);

// add the mesh to the scene
scene.add(cube);

//5. Create the Renderer

// create the renderer
const renderer = new THREE.WebGLRenderer();

// next, set the renderer to the same size as our container element
renderer.setSize(container.clientWidth, container.clientHeight);

// finally, set the pixel ratio so that our scene will look good on HiDPI displays
renderer.setPixelRatio(window.devicePixelRatio);

// add the automatically created <canvas> element to the page
container.append(renderer.domElement);

// 6. Render the Scene
// render, or 'create a still image', of the scene
renderer.render(scene, camera);
