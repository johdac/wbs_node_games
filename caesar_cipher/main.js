const args = process.argv.slice(2);
let caesarFactor = Number(args[1]);

if (args.length !== 2 || isNaN(caesarFactor)) {
  console.error("Wrong input. Use caesar cipher like so: node main.js 'text to encrypt' nbr");
  process.exit(1);
}

caesarFactor = caesarFactor % 26;
for (let i = 0; i < args[0].length; i++) {
  let originalAscii = args[0].charCodeAt(i);
  let newAscii = originalAscii;
  if ((originalAscii >= 97 && originalAscii <= 122) || (originalAscii >= 65 && originalAscii <= 90)) {
    newAscii = originalAscii + caesarFactor;
    if ((originalAscii <= 122 && newAscii > 122) || (originalAscii <= 90 && newAscii > 90)) newAscii = newAscii - 26;
  }
  process.stdout.write(String.fromCharCode(newAscii));
}
