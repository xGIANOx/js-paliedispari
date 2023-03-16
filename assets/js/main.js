const user_word = prompt('inserisci una parola');
console.log(user_word);

const splitted_word = user_word.split('');
console.log(splitted_word);

const reversed_splitted_word = splitted_word.reverse();
console.log(reversed_splitted_word);

const reversed_word = reversed_splitted_word.join('');
console.log(reversed_word);

/* 
if(user_word == reversed_word){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
  } 
*/


function palindrome_finder(word_1, word_2) {
    if (word_1 == word_2){
        console.log('la parola è palindroma');
    } else {
        console.log('la parola non è palindroma');
    }
}

palindrome_finder(user_word, reversed_word)