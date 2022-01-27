//Area of parallogram

console.log(
    "/* Their are three main types in Quadrilatral 1.Parallogram 2.Rhombus 3.Trapazium */"
);
const Quadrilateral = (base1, base2, side1, side2, height, d1, d2) => {
    //   console.log(
    //     `${Math.pow(d1, 2) + Math.pow(d2, 2) === 4 * Math.pow(side2, 2)}`
    //   );

    //   console.log(base1 === base2 && side1 === side2 && base1 == side2);

    if (base1 === base2 && side1 === side2 && base1 != side2) {

        console.log(`It's Parallogram and area is : ${base1 * height}`);
        console.log(`It's Parallogram and perimeter is : ${2 * (base1 + side1)}`);

    } else if (base1 === base2 && side1 === side2 && base1 === side2) {

        if (
            Math.round(Math.pow(d1, 2)) + Math.round(Math.pow(d2, 2)) ===
            4 * Math.pow(side2, 2)
        ) {
            console.log(`It's Rhombus and area is : ${Math.round((d1 * d2) / 2)}`);
            console.log(`It's Rhombus and Perimter is : ${4 * base2}`);
        } else {
            console.log(
                `It is not Rhombus.Because it does not match propertise of rhombus`
            );
        }

    } else if (base1 != base2) {

        console.log(
            `It's Trapazium and area is : ${((base1 + base2) * height) / 2}`
        );
        console.log(
            `It's Trapazium and Perimeter is : ${base1 + base2 + side1 + side2}`
        );
    }
};

// Quadrilateral(20, 25, 30, 30, 10, 28.28, 28.28);
Quadrilateral(20, 20, 30, 30, 10, 28.28, 28.28);
// Quadrilateral(20, 20, 20, 20, 10, 28.28, 28.28);
// Quadrilateral(20, 20, 20, 20, 10, 28.215, 28.28);

// console.log(Math.pow(28.2842, 2));
