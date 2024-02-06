class Token {
  constructor(type, literal) {
    this.type = type
    this.literal = literal
  }
}


const Keywords = {
  fn: "FUNCTION",
  let: "LET"
}

const TokenType = {
  ILLEGAL: "ILLEGAL",
  EOF: "EOF",
  IDENT: "IDENT",
  INT: "INT",
  ASSIGN: "=",
  PLUS: "+",
  COMMA: ",",
  SEMICOLON: ";",
  LPAREN: "(",
  RPAREN: ")",
  LBRACE: "{",
  RBRACE: "}",
  FUNCTION: "FUNCTION",
  LET: "LET"
}

module.exports = { TokenType, Token, Keywords }
