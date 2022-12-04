class Formatter {
  static capitalize(input) {
    return input[0].toUpperCase() + input.slice(1)
  }
  static sanitize(input) {
    return input.replace(/[^A-Za-z0-9-' ]+/g, "")
  }
  static titleize(input) {
    const capFrstLetter = this.capitalize(input)
    let lowerCaseWords = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let title = []
    let wordsArray = capFrstLetter.split(" ")
    wordsArray.forEach(word => {
      if (lowerCaseWords.includes(word)) title.push(word)
      else title.push(this.capitalize(word))
    })
    return title.join(" ")
  }
}

console.log(Formatter.capitalize("stephen"))