function Palindrome(x) {
  if (x < 0) {
    return false;
  }
  const str = x.toString();
  return str === str.split("").reverse().join("");
}

const x = 12121;
console.log(Palindrome(x));

// membuat fungsi isPalindrome untuk mengecek apakah sebuah angka adalah palindrom dengan menggunakan reverse untuk membalikkan angka
