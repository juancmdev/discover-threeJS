import { BoxGeometry, Mesh, MeshStandardMaterial } from "three";

function createCube() {
  // Create geometry
  const geometry = new BoxGeometry(2, 2, 2);

  /* Create a default (white) basic material
  const material = new MeshBasicMaterial();*/

  // Switch the old "basic" material to
  // a physically correct "standard" material
  const material = new MeshStandardMaterial({ color: "green" });

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);

  cube.position.set(0, 0, 0);
  cube.rotation.set(-0.5, -0.1, 0.8);
  cube.scale.set(1, 1, 1);

  return cube;
}

export { createCube };
