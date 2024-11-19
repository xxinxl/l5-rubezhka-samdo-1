class ObjectValidator {
  constructor() {
    this.shapeDefinition = {};
  }

  shape(shape) {
    this.shapeDefinition = shape;
    return this;
  }

  isValid(value) {
    if (typeof value !== 'object' || value === null) {
      return false;
    }

    return Object.keys(this.shapeDefinition).every((key) => {
      const validator = this.shapeDefinition[key];
      const fieldValue = value[key];

      if (typeof validator === 'object' && !Array.isArray(validator)) {
        if (validator.isValid) {
          return validator.isValid(fieldValue);
        }

        const nestedValidator = new ObjectValidator().shape(validator);
        return nestedValidator.isValid(fieldValue);
      } if (validator.isValid) {
        return validator.isValid(fieldValue);
      }

      return false;
    });
  }
}

export default ObjectValidator;
