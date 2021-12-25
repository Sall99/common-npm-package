import { CustomError } from './custom-error'
export class NotFoundErrors extends CustomError {
   statusCode = 404
   constructor() {
      super(' not found')
      Object.setPrototypeOf(this, NotFoundErrors.prototype)
   }
   serializeErrors() {
      return [{ message: " not found" }]
   }
}