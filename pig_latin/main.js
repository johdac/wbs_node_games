const args = process.argv.slice(2);
let words = args[0].split(" ");

const capitalizeWord = (word) => {
  if (word) return word[0].toUpperCase() + word.slice(1);
};

// The parameter i is the index
words.map((word, i) => {
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
  if (i !== words.length - 1) process.stdout.write(`${newWord} `);
  else process.stdout.write(`${newWord}`);
});
