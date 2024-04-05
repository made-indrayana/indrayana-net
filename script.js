// On Page Load & Button Clicks
window.addEventListener("load", function () {
  document.getElementById("mark").classList.add("mark-transition");
  this.setTimeout(function () {
    document.getElementById("mark").classList.remove("mark-transition");
  }, 1000);
});

document.getElementById("github-button").addEventListener("click", function () {
  window.open("https://github.com/made-indrayana", "_blank");
});

document
  .getElementById("linkedin-button")
  .addEventListener("click", function () {
    window.open("https://www.linkedin.com/in/made-indrayana/", "_blank");
  });

// Check OS
const os = navigator.appVersion;
if (os.indexOf("Win") != -1) enableMouseDetection();
if (os.indexOf("Mac") != -1) enableMouseDetection();
if (os.indexOf("X11") != -1) enableMouseDetection();
if (os.indexOf("Linux") != -1) enableMouseDetection();
if (os.indexOf("Android") != -1) enableDeviceOrientation();
if (os.indexOf("iPhone") != -1) addPermissionButton();
if (os.indexOf("iPad") != -1) addPermissionButton();

// Cube Script - Add Permission Button
function addPermissionButton() {
  const html = document.getElementById("permission-buton");
  html.innerHTML =
    "<button onclick=RequestPermissionIOS()>Enable Orientation</button>";
}

// Cube Script - Mouse
function enableMouseDetection() {
  const container = document.documentElement;
  const cube = document.getElementById("cube");

  container.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX - container.offsetLeft;
    const mouseY = e.clientY - container.offsetTop;

    const rotateY = (mouseX / window.innerWidth - 0.5) * 100;
    const rotateX = (mouseY / window.innerHeight - 0.5) * -100;

    cube.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
  });
}

// Cube Script - Mobile
function enableDeviceOrientation() {
  window.addEventListener(
    "deviceorientation",
    (e) => {
      const posX = -e.beta + 45;
      const posY = e.gamma;

      cube.style.transform = `rotateY(${posY}deg) rotateX(${posX}deg)`;

      output.textContent = `beta: ${posX}\n`;
      output.textContent += `gamma: ${posY}\n`;
    },
    true
  );
}

// Cube Script - iOS
function RequestPermissionIOS() {
  DeviceOrientationEvent.requestPermission()
    .then((response) => {
      if (response == "granted") {
        console.log("granted good");
        window.addEventListener("deviceorientation", (e) => {
          const posX = -e.beta + 45;
          const posY = e.gamma;
          cube.style.transform = `rotateY(${posY}deg) rotateX(${posX}deg)`;
        });
      }
    })
    .catch((err) => {
      console.log("Err ", err);
    });
}

// Blink function
let animationSpeed = 500;

document.addEventListener("mousedown", function (event) {
  if (event.button === 0) {
    // Check if the left mouse button is clicked (button code: 0)

    const logoFace = document.querySelector(".logo");
    logoFace.classList.add("blink");

    // After a short delay, remove the 'blink' class to stop the blinking effect
    setTimeout(function () {
      logoFace.classList.remove("blink");
    }, animationSpeed);
  }
});
