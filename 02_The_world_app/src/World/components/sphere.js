import { Mesh, MeshBasicMaterial, SphereGeometry } from "three";

function createSphere() {
  // Create geometry
  const geometry = new SphereGeometry(1, 32, 16);

  // Create a default (white) basic material
  const material = new MeshBasicMaterial();

  // create a Mesh containing the geometry and material
  const sphere = new Mesh(geometry, material);

  return sphere;
}

export { createSphere };
