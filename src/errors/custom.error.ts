export default class CustomError extends Error {
  code: number;

  constructor(message: string, code: number) {
    super(message);

    Object.setPrototypeOf(this, CustomError.prototype);

    this.code = code;
  }
}

/*
    | REFERENCES |
    Links:
    https://github.com/willianmarquess/artigo-erros-nodejs
    https://bobbyhadz.com/blog/typescript-extend-error-class
    https://github.com/Microsoft/TypeScript-wiki/blob/main/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
    https://medium.com/pagarme/minha-experi%C3%AAncia-com-error-handling-no-express-188534ae6ff2
    https://www.dannyguo.com/blog/how-to-fix-instanceof-not-working-for-custom-errors-in-typescript/
  */
