export const getValueByPath = (target, property) => {
    return property.split('.').reduce( (current, propertyPart) => current[propertyPart], target );
}