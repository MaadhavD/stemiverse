
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 100;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function createStarField() {
  const stars = [];

  for (let i = 0; i < 1000; i++) {
    const star = new THREE.Vector3();
    star.x = THREE.MathUtils.randFloatSpread(2000);
    star.y = THREE.MathUtils.randFloatSpread(2000);
    star.z = THREE.MathUtils.randFloatSpread(2000);

    stars.push(star);
  }

  const starGeometry = new THREE.BufferGeometry().setFromPoints(stars);
  const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });
  const starField = new THREE.Points(starGeometry, starMaterial);

  scene.add(starField);
}

createStarField();

function animate() {
  requestAnimationFrame(animate);

  camera.rotation.y += 0.001;

  renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
