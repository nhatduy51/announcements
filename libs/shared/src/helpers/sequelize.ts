export function convertPropertyToBoolSequelize<Type>(
  object: Type,
  field: string[]
) {
  field.forEach((fieldName) => {
    if (object[fieldName]) {
      object[fieldName] = Boolean(object[fieldName]);
    }
  });

  return object;
}
