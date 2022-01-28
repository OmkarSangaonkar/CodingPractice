console.log("testing surface area total area & volume \n");

const ConeInfo = (radius, height, slant) => {
  if (height && radius) {
    slant = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));

    // console.log(slant);
    console.log("**When height and radius are given**");

    let Csa = Math.PI * radius * slant;

    let TotalArea = Csa + Math.PI * Math.pow(radius, 2);

    let Volume = (1 / 3) * (Math.PI * Math.pow(radius, 2) * height);

    console.log(`Curved surface area of Cone is ${Csa.toFixed(3)}`);

    console.log(`Total surface area of Cone is ${TotalArea.toFixed(3)}`);

    console.log(`Volume of Cone is ${Volume.toFixed(3)}\n`);
  } else if (slant && radius) {
    height = Math.sqrt(Math.pow(slant, 2) - Math.pow(radius, 2));

    // console.log(height);
    console.log("**When radius and slant are given**");

    let Csa = Math.PI * radius * slant;

    let TotalArea = Csa + Math.PI * Math.pow(radius, 2);

    let Volume = (1 / 3) * (Math.PI * Math.pow(radius, 2) * height);

    console.log(`Curved surface area of Cone is ${Csa.toFixed(3)}`);

    console.log(`Total surface area of Cone is ${TotalArea.toFixed(3)}`);

    console.log(`Volume of Cone is ${Volume.toFixed(3)}\n`);
  } else if (slant && height) {
    radius = Math.sqrt(Math.pow(slant, 2) - Math.pow(height, 2));

    // console.log(radius);
    console.log("**When height and slant are given**");

    let Csa = Math.PI * radius * slant;

    let TotalArea = Csa + Math.PI * Math.pow(radius, 2);

    let Volume = (1 / 3) * (Math.PI * Math.pow(radius, 2) * height);

    console.log(`Curved surface area of Cone is ${Csa.toFixed(3)}`);

    console.log(`Total surface area of Cone is ${TotalArea.toFixed(3)}`);

    console.log(`Volume of Cone is ${Volume.toFixed(3)}\n`);
  }
};

ConeInfo(10, 30, undefined);
// ConeInfo(10, undefined, 31.6227)
// ConeInfo(undefined, 10, 31.6227)
