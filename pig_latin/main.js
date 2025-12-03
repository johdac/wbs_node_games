const args = process.argv.slice(2);
if (args.length !== 1) {
  console.error("Wrong input. Use game like so: node main.js 'text to transform'");
  process.exit(1);
}

let words = args[0].split(" ");

// Utility function
const capitalizeWord = (word) => {
  if (word) return word[0].toUpperCase() + word.slice(1);
};

// The parameter i is the index
words.forEach((word, i) => {
  // We remember if the word was capitalized but work on lower cased strings
  const wordWasUpper = word === capitalizeWord(word);
  word = word.toLowerCase();

  // Per default we return the original word (for non alpha chars)
  let newWord = word;

  // We check each case with regex
  let matched;
  matched = word.match(/^([bcdfghjklmnpqrstvwxz])([aeiouy])(.*$)/);
  if (matched) newWord = matched[2] + matched[3] + matched[1] + "ay";

  matched = word.match(/^([bcdfghjklmnpqrstvwxz])([bcdfghjklmnpqrstvwxz])(.*$)/);
  if (matched) newWord = matched[3] + matched[1] + matched[2] + "ay";

  matched = word.match(/^([aeiouy])(.*$)/);
  if (matched) newWord = matched[0] + "way";

  // Restore capitalization
  if (wordWasUpper) newWord = capitalizeWord(newWord);

  // Print words
  process.stdout.write(i !== words.length - 1 ? `${newWord} ` : `${newWord}`);
});
