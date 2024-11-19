class NumberValidator {
  isValid(value) {
    return typeof value === 'number' && !Number.isNaN(value);
  }
}

export default NumberValidator;
