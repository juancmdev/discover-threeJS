import { BoxGeometry, Mesh, MeshBasicMaterial } from "three";

function createCube() {
  // Create geometry
  const geometry = new BoxGeometry(1, 1, 1);

  // Create a default (white) basic material
  const material = new MeshBasicMaterial();

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);
  cube.position.set(2, 0, 0);

  return cube;
}

export { createCube };
