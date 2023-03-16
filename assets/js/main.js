
//////////// PALINDROME FINDER ////////////

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

palindrome_finder(user_word, reversed_word);



//////////// PARI O DISPARI ////////////


const user_team = prompt('pari o dispari?');
console.log(user_team);

const user_number = Number(prompt('Scegli un numero da 1 a 5!'))
console.log(user_number);

function computer_number () {
    let pc_number = Math.floor(Math.random() * 5) + 1;
    console.log(pc_number);
    return pc_number
}


const sum = user_number + computer_number();
console.log(sum);

if (user_team == 'pari' && sum % 2 == 0){
    console.log('Pari. Hai vinto!');
} else if (user_team == 'dispari' && sum % 2 !== 0){
    console.log('Dispari. Hai vinto!');
} else {
    console.log('Hai perso');
}
