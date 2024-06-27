import { Color, Scene } from "three";

function createScene() {
  const scene = new Scene();

  scene.background = new Color("green");

  return scene;
}

export { createScene };
