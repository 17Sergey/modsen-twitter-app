export const removeSpacesAndLowercase = (name: string) => {
  return name.toLowerCase().replace(/\s+/g, "");
};
