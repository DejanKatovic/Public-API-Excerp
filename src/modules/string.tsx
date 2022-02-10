export const getConvertedText = (str: string): string => {
  const chars = str.split("");
  const convertedChars = chars.map((character) =>
    character.charCodeAt(0) < 65
      ? String.fromCharCode(character.charCodeAt(0) + 50)
      : character
  );
  return convertedChars.join("");
};
