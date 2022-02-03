console.log("testing sphere formulae");

const sphere = (radius) => {
  let pi = 22 / 7;
  let surfaceArea = 4 * pi * Math.pow(radius, 2);
  let volume = (4 / 3) * (pi * Math.pow(radius, 3));

  console.log(`Surface area of sphere is ${surfaceArea.toFixed(3)}`);
  console.log(`Volume of sphere is ${volume.toFixed(3)}`);
};

sphere(4);
