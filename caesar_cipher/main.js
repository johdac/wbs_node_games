const args = process.argv.slice(2);
let caesarFactor = Number(args[1]);

if (args.length !== 2 || isNaN(caesarFactor)) {
  console.error("Wrong input. Use caesar cipher like so: node main.js 'text to encrypt' nbr");
  process.exit(1);
}

caesarFactor %= 26;
for (let i = 0; i < args[0].length; i++) {
  let ascii = args[0].charCodeAt(i);
  // For lowercase chars
  if (ascii >= 97 && ascii <= 122) {
    ascii += caesarFactor;
    if (ascii < 97) ascii += 26;
    else if (ascii > 122) ascii -= 26;
  }
  // For uppercase chars
  else if (ascii >= 65 && ascii <= 90) {
    ascii += caesarFactor;
    if (ascii < 65) ascii += 26;
    else if (ascii > 90) ascii -= 26;
  }
  process.stdout.write(String.fromCharCode(ascii));
}
