export function replaceSpecialCharacters(input: string): string {
  const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
  const escapeCharacter = " ";

  return input.replace(specialCharacters, escapeCharacter + "");
}
