import * as THREE from "three";
function main() {
  const canvas = document.querySelector("#cube3");
  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });

  const fov = 100;
  const aspect = 2;
  const near = 0.1;
  const far = 10;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

  camera.position.z = 5;

  const scene = new THREE.Scene();

  const boxWidth = 1.5;
  const boxHeight = 1.5;
  const boxDepth = 1.5;
  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

  const boxWidth1 = 2.5;
  const boxHeight1 = 2.5;
  const boxDepth1 = 2.5;
  const geometry1 = new THREE.BoxGeometry(boxWidth1, boxHeight1, boxDepth1);

  const material = new THREE.MeshPhongMaterial({ color: 0x6600cc });
  const material1 = new THREE.MeshLambertMaterial({ color: 0xff0000 });

  const cube = new THREE.Mesh(geometry, material);
  const cube1 = new THREE.Mesh(geometry1, material1);

  scene.add(cube);
  scene.add(cube1);

  const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
  const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0x00ccff });
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

  sphere.position.y = -2; // move it down a bit
  scene.add(sphere);

  cube.position.x = 3;
  cube1.position.x = -2;

  requestAnimationFrame(render);

  const color = 0x33cc33;
  const intensity = 15;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-4, 7, 8);
  scene.add(light);

  function render(time) {
    time *= 0.001; // convert time to seconds

    cube.rotation.x = time;
    cube.rotation.y = time;

    cube1.rotation.x = time;
    cube1.rotation.y = time;

    sphere.rotation.y = time * 8;

    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }
}
main();
