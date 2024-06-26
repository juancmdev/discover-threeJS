import { BoxGeometry, Mesh, MeshBasicMaterial } from "three";

function createCube() {
  // Create geometry
  const geometry = new BoxGeometry(2, 2, 2);

  // Create a default (white) basic material
  const material = new MeshBasicMaterial();

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);

  return cube;
}

export { createCube };
