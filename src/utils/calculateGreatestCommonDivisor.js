const calculateGCD = (firstNumber, secondNumber) => {
  let largerNumber = firstNumber;
  let smallerNumber = secondNumber;
  while (smallerNumber !== 0) {
    const remainder = largerNumber % smallerNumber;
    largerNumber = smallerNumber;
    smallerNumber = remainder;
  }
  return largerNumber;
};

export default calculateGCD;
