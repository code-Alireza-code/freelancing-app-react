const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

export function toPersianNumbersWithComma(n: number | string) {
  const numWithCommas = numberWithCommas(n); // 1000,2343
  const persianNumber = toPersianNumbers(numWithCommas);
  return persianNumber;
}

function numberWithCommas(x: number | string) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function toPersianNumbers(n: string) {
  return n.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x)]);
}
