console.log("testing areas");

// Area of rectangle

const RectArea = function (length, width) {
  if (length === width) {
    console.log(
      `It's Square and area is : ${length * width} and perimeter is ${
        4 * length
      }`
    );
  } else {
    console.log(
      `It's Rectangle and area is : ${length * width} and perimter is ${
        2 * (length + width)
      }`
    );
  }
};

RectArea(10, 20);
RectArea(5, 5);
