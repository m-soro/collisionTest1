const canvas = document.querySelector("canvas"); // get the canvas element
const c = canvas.getContext("2d"); //

console.log("The inner width: ", innerWidth, "The innerHeight: ", innerHeight); // the window's width and height

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
  x: innerWidth / 2, //
  y: innerHeight / 2, //
};

// Event Listeners
addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "#1A1A23";
  c.fillRect(0, 0, canvas.width, canvas.height);

  const blueRectanglesX = canvas.width / 2 - 50;
  const blueRectanglesY = canvas.height / 2 - 50;

  if (
    mouse.x + 100 >= blueRectanglesX && // if the right side of the red rectangle + width of the red rectangle is greater than the blue coordinate of the blue rectangle
    mouse.x <= canvas.width / 2 - 50 + 100 && // if the left side of the red rectangle is less than the right side of the blue rectangle
    mouse.y + 100 >= blueRectanglesY && // if the top left corner of the rectangle + height of the red rectangle is greater than > top side of the blue rectange
    mouse.y <= blueRectanglesY + 100 // if the top side of the red rectangle is less than blue rectangle y conordinate + height
  ) {
    console.log("colliding");
  }

  // Red Rectangle
  c.fillStyle = "#E86262";
  c.fillRect(mouse.x, mouse.y, 100, 100);

  // Blue rectangle
  c.fillStyle = "#92ABEA";
  c.fillRect(blueRectanglesX, canvas.height / 2 - 50, 100, 100);
}

animate();
