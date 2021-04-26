// let maxNum = parseInt(prompt('Enter maximum number! Type "quit" to quit.'));

// while (!maxNum) {
//         maxNum = parseInt(prompt('Enter valid number!'));
// }

// const randomNum = Math.floor((Math.random() * maxNum) + 1);

// let guess = parseInt(prompt('Enter your guess!'));
// let attempt = 1

// while (parseInt(guess) !== randomNum) {
//     if (guess === 'quit') break;
//     attempt++
//     if (!guess) {
//         guess = (prompt('Enter valid number!'));
//     } else if (guess > randomNum) {
//         guess = (prompt('Too high! Try again.'));
//     } else {
//         guess = (prompt('Too low! Try again.'));
//     }
// }
// if (guess === 'quit') {
//     alert(`Finished with ${attempt} attempt/s. See you next time!`);
// } else {
//     alert(`${guess} is correct! It took you ${attempt} attempt/s!`);
// }

let input = prompt('What would you like to do today')
const toDoList = []


while (input !== 'quit' && input !== 'q' && input !== null) {
    if (input !== 'new' && input !== 'list' && input !== 'delete') {
        alert('Please enter valid input!');
    }
    else if (input === 'list') {
        // for (let i = 0; i < toDoList.length; i++) {
        // const listDisplay = [`${i+1}: ${toDoList[i]}`];
        //    alert(listDisplay.join("\n"));
        alert('Here are your to do lists (ascending): \n' + toDoList.join('\n'))
    }


    else if (input === 'new') {
        let newToDo = prompt('What would you like to add?')
            toDoList.push(newToDo);
        alert(`Added to the list!`);
    }

    else if (input === 'delete') {
        let index = (parseInt(prompt('Input pos. number of the entry you wish to delete (top to bottom): \n' + toDoList.join('\n')))) - 1;
        while (Number.isNaN(index)) {
            alert('Please input VALID number');
            index = (parseInt(prompt('Input pos. number of the entry you wish to delete (top to bottom): \n' + toDoList.join('\n')))) - 1;
        }
        while (index > ((toDoList.length))) {
            alert('Please input VALID number');
            index = (parseInt(prompt('Input pos. number of the entry you wish to delete (top to bottom): \n' + toDoList.join('\n')))) - 1;
        }
        alert("Entry '" + toDoList[index] + "' deleted!");
        toDoList.splice((index), 1);
    }

    input = prompt('What would you like to do today');


}

alert('Goodbye! Have a great day.')