// import Validator from './src/Validator.js';
import NumberValidator from './src/NumberSchema.js';

class Validator {
  NumberValidator() {
    return new NumberValidator();
  }
}

export default Validator;
