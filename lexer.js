const { TokenType, Token } = require("./token")

/** Lexer for monkfee */
class Lexer {
  constructor(inputString) {
    this.input = inputString
    this.position = 0
    this.nextPosition = 0
    this.str = ""
    this.readChar()
  }
  readChar() {
    if (this.nextPosition >= this.input.length) {
      this.str = null
    } else {
      this.str = this.input[this.nextPosition]
    }
    this.position = this.nextPosition
    this.nextPosition++
  }
  nextToken() {
    let token = {}
    switch (this.str) {
      case "=":
        token = this.newToken(TokenType.ASSIGN, this.str)
        break
      case null:
        token = this.newToken(TokenType.EOF, this.str)
        break
      case "+":
        token = this.newToken(TokenType.PLUS, this.str)
        break
      case ",":
        token = this.newToken(TokenType.COMMA, this.str)
        break
      case ";":
        token = this.newToken(TokenType.SEMICOLON, this.str)
        break
      case "(":
        token = this.newToken(TokenType.LPAREN, this.str)
        break
      case ")":
        token = this.newToken(TokenType.RPAREN, this.str)
        break
      case "{":
        token = this.newToken(TokenType.LBRACE, this.str)
        break
      case "}":
        token = this.newToken(TokenType.RBRACE, this.str)
        break
      default:
        if (this.isLetter(this.str)) {
          token = this.readIdentifier()
          break
        } else if (this.isNumber(this.str)) {

        }
        token = this.newToken(TokenType.ILLEGAL, this.str)
    }
    this.readChar()
    return token
  }
  newToken(tokenType, str) {
    return new Token(tokenType, str)
  }
  isLetter(input) {
    let inputAscii = input.charCodeAt(0)
    return 97 <= inputAscii && inputAscii <= 122 || 65 <= inputAscii && inputAscii <= 90 || inputAscii == 95
  }
  readIdentifier() {
    let pos = this.position
    while (this.isLetter(this.str)) {
      this.readChar()
    }
    return this.str.slice(pos, this.position)
  }
  isNumber(input) {

  }
}

module.exports = { Lexer }
