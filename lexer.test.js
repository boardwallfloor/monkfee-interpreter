const TokenType = require("./token").TokenType;
const Lexer = require("./lexer").Lexer;
const describe = require("mocha").describe;
const assert = require("node:assert")

const input = `let five = 5;
let ten = 10;
let add = fn(x, y) {
x + y;
};
let result = add(five, ten);
`

const testArray =
  [
    { expectedType: TokenType.LET, expectedLiteral: "let" },
    { expectedType: TokenType.IDENT, expectedLiteral: "five" },
    { expectedType: TokenType.ASSIGN, expectedLiteral: "=" },
    { expectedType: TokenType.INT, expectedLiteral: "5" },
    { expectedType: TokenType.SEMICOLON, expectedLiteral: ";" },
    { expectedType: TokenType.LET, expectedLiteral: "let" },
    { expectedType: TokenType.IDENT, expectedLiteral: "ten" },
    { expectedType: TokenType.ASSIGN, expectedLiteral: "=" },
    { expectedType: TokenType.INT, expectedLiteral: "10" },
    { expectedType: TokenType.SEMICOLON, expectedLiteral: ";" },
    { expectedType: TokenType.LET, expectedLiteral: "let" },
    { expectedType: TokenType.IDENT, expectedLiteral: "add" },
    { expectedType: TokenType.ASSIGN, expectedLiteral: "=" },
    { expectedType: TokenType.FUNCTION, expectedLiteral: "fn" },
    { expectedType: TokenType.LPAREN, expectedLiteral: "(" },
    { expectedType: TokenType.IDENT, expectedLiteral: "x" },
    { expectedType: TokenType.COMMA, expectedLiteral: "," },
    { expectedType: TokenType.IDENT, expectedLiteral: "y" },
    { expectedType: TokenType.RPAREN, expectedLiteral: ")" },
    { expectedType: TokenType.LBRACE, expectedLiteral: "{" },
    { expectedType: TokenType.IDENT, expectedLiteral: "x" },
    { expectedType: TokenType.PLUS, expectedLiteral: "+" },
    { expectedType: TokenType.IDENT, expectedLiteral: "y" },
    { expectedType: TokenType.SEMICOLON, expectedLiteral: ";" },
    { expectedType: TokenType.RBRACE, expectedLiteral: "}" },
    { expectedType: TokenType.SEMICOLON, expectedLiteral: ";" },
    { expectedType: TokenType.LET, expectedLiteral: "let" },
    { expectedType: TokenType.IDENT, expectedLiteral: "result" },
    { expectedType: TokenType.ASSIGN, expectedLiteral: "=" },
    { expectedType: TokenType.IDENT, expectedLiteral: "add" },
    { expectedType: TokenType.LPAREN, expectedLiteral: "(" },
    { expectedType: TokenType.IDENT, expectedLiteral: "five" },
    { expectedType: TokenType.COMMA, expectedLiteral: "," },
    { expectedType: TokenType.IDENT, expectedLiteral: "ten" },
    { expectedType: TokenType.RPAREN, expectedLiteral: ")" },
    { expectedType: TokenType.SEMICOLON, expectedLiteral: ";" },
    { expectedType: TokenType.EOF, expectedLiteral: "" }
  ]


let lexer = new Lexer(input)


for (let i = 0; i < testArray.length; i++) {
  let token = lexer.nextToken()

  assert.equal(testArray[i].expectedType, token.type, `expected ${testArray[i].expectedType}, but received ${token.type}`)
  assert.equal(testArray[i].expectedLiteral, token.literal, `expected ${testArray[i].expectedLiteral}, but received ${token.literal}`)
}
