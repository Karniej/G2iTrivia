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
const replaceHTMLentityFromString = (str: string, count: number) => {
  let run = count - 1
  let firstIndex = str.indexOf('&')
  let secondIndex = str.indexOf(';')
  let divider = str.slice(firstIndex, secondIndex + 1)
  let returnedString = ''
  switch (divider) {
    case '&#x26;':
    case '&amp;':
      returnedString = str.replaceAll('&amp;', '&')
      break
    case '&quot;':
      returnedString = str.replaceAll('&quot;', '"')
      break
    case '&#x27;':
    case '&#039;':
      returnedString = str.replaceAll('&#039;', "'")
      break
    case '&#x3B;':
      returnedString = str.replaceAll('&#x3B;', ';')
      break
    case '&#x3A;':
      returnedString = str.replaceAll('&#x3A;', ':')
      break
    case '&#x40;':
      returnedString = str.replaceAll('&#x40;', '@')
      break
    case '&#x24;':
      returnedString = str.replaceAll('&#x24;', '$')
      break
    case '&#x25;':
      returnedString = str.replaceAll('&#x25;', '%')
      break
    case '&#x3F;':
      returnedString = str.replaceAll('&#x3F;', '?')
      break

    default:
      returnedString = str.replaceAll(divider, '')
      break
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
