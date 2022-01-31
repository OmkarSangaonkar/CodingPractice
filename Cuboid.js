console.log("testing cube & cuboid");

const cuboid = (length, breadth, height) => {
  if (length === breadth && length === height) {
    console.log("## cube ## \n");
    // volume, area, digonal, edge
    let surfaceArea = 6 * Math.pow(length, 2);
    let volume = Math.pow(length, 3);
    let digonal = Math.sqrt(3) * length;
    let edge = Math.sqrt(3) * (digonal / 3);
    let perimeter = 4 * length;
    console.log(`surface area of cube is: ${surfaceArea.toFixed(3)}\n`);
    console.log(`volume of cube is: ${volume.toFixed(3)}\n`);
    console.log(`digonal of cube is: ${digonal.toFixed(3)}\n`);
    console.log(`edge of cube is: ${edge.toFixed(3)}\n`);
    console.log(`perimeter of cube is: ${perimeter}\n`);
  } else {
    console.log("## cuboid ## \n");
    let volume = length * breadth * height;
    let surfaceArea = 2 * (length + breadth + height);
    let curvedArea = 2 * height * (length + breadth);
    let digonal = Math.sqrt(
      Math.pow(length, 2) + Math.pow(breadth, 2) + Math.pow(height, 2)
    );
    let perimeter = 2 * (length + breadth);

    console.log(`volume of cubiod is ${volume.toFixed(3)}\n`);
    console.log(`surface area of cubiod is ${surfaceArea.toFixed(3)}\n`);
    console.log(`curved surface area of cubiod is ${curvedArea.toFixed(3)}\n`);
    console.log(`digonal of cubiod is ${digonal.toFixed(3)}\n`);
    console.log(`perimeter of cubiod is ${perimeter.toFixed(3)}\n`);
  }
};

cuboid(10, 10, 12);
cuboid(10, 10, 10);
