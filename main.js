import * as THREE from "three";
window.onload = main;
var canvas;
var loop = null;

function main() {
  canvas = document.querySelector("canvas.webgl");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  animate();
  window.addEventListener("resize", animate);
}
function animate() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight
  );
  camera.position.z = 2;
  scene.add(camera);

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({
    color: "#FF0000",
    wireframe: true,
  });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  const renderer = new THREE.WebGLRenderer({ canvas });

  if (!loop) {
    loop = setInterval(() => {
      cube.rotation.x += 0.01;
      cube.rotation.z += 0.01;
      cube.rotation.y += 0.01;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    }, 10);
  }
}
