const specialCharCounter = (str: string) => {
  let ch = '&'
  let count = 0
  let i = str.length - 1

  while (i >= 0) {
    if (str.charAt(i) === ch) {
      count++
    }
    i--
  }
  return count
}

const htmlEntities: { [key: string]: string } = {
  '&amp;': '&',
  '&quot;': '"',
  '&#039;': "'",
  '&#x3B;': ';',
  '&#x3A;': ':',
  '&#x40;': '@',
  '&#x24;': '$',
  '&#x25;': '%',
  '&#x3F;': '?',
  '&#x26;': '&',
  '&#x27;': "'",
}

const replaceHTMLentityFromString = (str: string, count: number) => {
  let run = count - 1
  let firstIndex = str.indexOf('&')
  let secondIndex = str.indexOf(';')
  let divider = str.slice(firstIndex, secondIndex + 1)
  let returnedString = ''

  if (htmlEntities[divider] && htmlEntities[divider].length > 0) {
    returnedString = str.replaceAll(divider, htmlEntities[divider])
  } else {
    returnedString = str.replaceAll(divider, '')
  }

  if (run > 0) {
    divider = ''
    returnedString = replaceHTMLentityFromString(returnedString, run)
  }

  return returnedString
}

export const parseQuestionString = (str: string) => {
  let count = specialCharCounter(str)
  let returnedString = replaceHTMLentityFromString(str, count)

  return returnedString
}
