function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
<<<<<<< HEAD
  if (string.toLowerCase() === string) {
    return "I can't hear you!"
  }  else if (string.toUpperCase() === string) {
    return "YES INDEED!"
  }
  if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
  
=======
  if (string.toLowerCase() === "hello") {
    return "I can't hear you!"
  }
  if (string.toUpperCase() === "hello") {
    return "I can't hear you!"
  }
>>>>>>> 23a7275d563d6095e39d075ec1ad82ea681ebbb5
}

