// Returns the bitwise AND of two numbers.
function bitwiseAnd(x, y)
{
  return x & y;
}

// Returns the bitwise OR of two numbers.
function bitwiseOr(x, y)
{
  return x | y;
}

// Returns the bitwise XOR of two numbers.
function bitwiseXor(x, y)
{
  return x ^ y;
}

// Returns the bitwise left shift of two numbers.
function bitwiseLeftShift(x, y)
{
  return x << y;
}

// Returns the bitwise right shift of two numbers.
function bitwiseRightShift(x, y)
{
  return x >> y;
}

function removeSubStr(text, subStr)
  {
    return text.split(subStr).join("");
  }

function awesomeRepeat(x)
  {
    return "I am awesome ".repeat(x);
  }

function isItPal(x)
  {
    return (x).split("").reverse().join("");
  }

function grades(x)
{
  switch(true)
  {
    case(x <= 100 && x >= 90):
      return "grade = A";
    case (x <= 89 && x >= 80):
      return "grade = B";
    case (x <= 79 && x >= 70):
      return "grade = C";
    case (x <= 69 && x >= 60):
      return "grade = D";
    case (x <= 59 && x >= 50):
      return "grade = F";
  }
}
