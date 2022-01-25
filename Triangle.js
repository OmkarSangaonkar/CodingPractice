// Area of triangle & Isocelous triangle

const TriangleArea = (base, height, slant1, slant2) => {
    if (slant1 === slant2 && slant1 != base) {
        console.log(
            `It's Isocelous traingle and Area is : ${(1 / 2) * (base * height)}`
        );
        console.log(
            `It's Isocelous traingle and perimter is : ${base + slant1 + slant2}`
        );
    }
    else if (slant1 != slant2) {
        console.log(
            `It's Regular traingle and Area is : ${(1 / 2) * (base * height)}`
        );
        console.log(
            `It's Regular traingle and perimter is : ${base + slant1 + slant2}`
        );
    }
    else if (slant1 === slant2 && slant1 === base) {
        console.log(`It's Equilateral triangle and area is : ${(Math.sqrt(3) * slant1 * slant1) / 4} `);
        console.log(
            `It's Equilateral traingle and perimter is : ${3 * slant1}`
        );

    }



};

TriangleArea(24, 36, 15, 15);
TriangleArea(24, 36, 15, 20);
TriangleArea(20, 10, 20, 20);



