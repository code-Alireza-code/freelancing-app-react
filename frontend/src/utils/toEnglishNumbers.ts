const englishDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

export function toEnglishNumbersWithComma(n: string) {
  const numWithoutCommas = removeCommas(n); // Remove commas if present
  const englishNumber = toEnglishNumbers(numWithoutCommas);
  return englishNumber;
}

function removeCommas(x: string) {
  return x.toString().replace(/,/g, "");
}

export function toEnglishNumbers(n: string) {
  return n.toString().replace(/[۰-۹]/g, (x) => {
    return englishDigits[x.charCodeAt(0) - 1776];
  });
}
