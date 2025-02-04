function fooBar(n) {
  for (let x = 1; x <= n; x++) {
    if (x % 3 === 0 && x % 5 === 0) {
      console.log("catKitty");
    } else if (x % 3 === 0) {
      console.log("cat");
    } else if (x % 5 === 0) {
      console.log("kitty");
    } else {
      console.log(x);
    }
  }
}

const n = 15;
console.log(fooBar(n));

// membuat perulangan fooBar dengan menggunakan for loop dan if else
