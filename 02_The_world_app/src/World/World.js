import { createCamera } from "./components/camera";
import { createCube } from "./components/cube";
import { createLights } from "./components/lights";
import { createScene } from "./components/scene";

import { createRenderer } from "./systems/renderer";
import { Resizer } from "./systems/Resizer";

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;

class World {
  // 1. Create an instance of the World app
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    container.append(renderer.domElement);

    const cube = createCube();
    const light = createLights();

    scene.add(cube, light);

    const resizer = new Resizer(container, camera, renderer);
  }

  // 2. Render the scene
  render() {
    renderer.render(scene, camera);
  }
}

export { World };
