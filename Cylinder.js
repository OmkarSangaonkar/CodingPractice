console.log("testing cylinder area & volume");

const cylinder = (radius, height) => {
  let SurfaceArea = 2 * Math.PI * radius * height;
  let TotalArea = SurfaceArea + 2 * Math.PI * Math.pow(radius, 2);
  let volume = Math.PI * Math.pow(radius, 2) * height;

  console.log(`Surface Area of Cylinder of is : ${SurfaceArea.toFixed(3)} \n`);
  console.log(`Total Area of Cylinder of is : ${TotalArea.toFixed(3)} \n`);
  console.log(`Volume of Cylinder of is : ${volume.toFixed(3)} \n`);
};

cylinder(10, 20);
