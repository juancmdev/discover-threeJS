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

const scene = new THREE.Scene(); // Create the Scene#
scene.background = new THREE.Color("skyblue"); //Set the Scene’s Background Color#

// Create a camera
const fov = 35; // AKA Field of View
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1; // the near clipping plane
const far = 100; // the far clipping plane

const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
// every object is initially created at ( 0, 0, 0 )
// move the camera back so we can view the scene
camera.position.set(0, 0, 10);
