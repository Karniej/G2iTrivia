const specialCharCounter = (str: string) => {
  let ch = '&'
  let count = 0
  let i = str.length - 1

  while (i >= 0) {
    if (str.charAt(i) == ch) {
      count++
    }
    i--
  }
  return count
}
const removeCharsFromString = (str: string, count: number) => {
  let run = count - 1
  let firstIndex = str.indexOf('&')
  let secondIndex = str.indexOf(';')
  let divider = str.slice(firstIndex, secondIndex + 1)
  let returnedString = str.replaceAll(divider, '')

  if (run > 0) {
    divider = ''
    returnedString = removeCharsFromString(returnedString, run)
  }

  return returnedString
}

export const cleanStringFromUnwantedChars = (str: string) => {
  let count = specialCharCounter(str)
  let returnedString = removeCharsFromString(str, count)

  return returnedString
}
