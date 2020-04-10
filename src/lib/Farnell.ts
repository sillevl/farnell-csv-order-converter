function retrieveOrderListing (order: any) {
  const regEx = /^\d+.*$/gim
  const match = order.match(regEx)
  if (match) {
    return match.join('\n')
  }
  return ''
}

function retrieveTotalCheck (order: any) {
  const regEx = /,,,,,,,.*/gim
  const match = order.match(regEx)
  if (match) {
    return match.join('\n')
  }
  return ''
}

function transformOrderListing (originalOrderListing: any) {
  if (originalOrderListing) {
    const regEx = /^\d+,(.*?),.*?,,(\d+)\.0,.*$/gim
    return originalOrderListing.replace(regEx, '$1, $2')
  }
  return ''
}

function generateInstructionHeader () {
  let header = 'Onderstaande lijst kan worden geplakt op de website van Farnell.\n'
  header += 'Ga naar https://be.farnell.com\n'
  header += 'Kies vervolgens "Hulpmiddelen => Snel kopen" in het menu.\n'
  header += 'Open het tabblad "Snel plakken" en plak er onderstaande lijst in (zonder de dashes ----)\n'
  header += '-------------------------------------------\n\n'

  return header
}

function generateCheckFooter (originalTotalCheck: any) {
  let footer = '-------------------------------------------\n\n\n'
  footer += 'Dit is ter controle:\n'
  footer += '-------------------------------------------\n'
  footer += originalTotalCheck
  return footer
}

export default function (content: any) {
  console.log('JavaScript HTTP trigger function processed a request.')

  return generateInstructionHeader() +
    transformOrderListing(retrieveOrderListing(content)) +
    '\n\n' +
    generateCheckFooter(retrieveTotalCheck(content))
}
