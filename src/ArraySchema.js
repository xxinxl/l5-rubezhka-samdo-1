class ArrayValidator {
  constructor() {
    this.checkIntegers = false;
    this.customValidator = null;
  }

  isValid(value) {
    if (!Array.isArray(value)) {
      return false;
    }

    if (this.customValidator) {
      if (!value.every(this.customValidator)) {
        return false;
      }
    }

    if (this.checkIntegers) {
      return value.every(
        (item) => Number.isInteger(item) || typeof item === 'bigint',
      );
    }

    return true;
  }

  allIntegers() {
    this.checkIntegers = true;
    return this;
  }

  custom(validator) {
    this.customValidator = validator;
    return this;
  }
}

export default ArrayValidator;
