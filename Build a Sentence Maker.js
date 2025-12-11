Build a Sentence Maker
------------------------
You should declare the following variables using let:

adjective
noun
verb
place
adjective2
noun2
You should assign the above variables some string values of your choice.

You should declare a firstStory variable.

You should use the following story template to create the first story and assign it to the firstStory variable: "Once upon a time, there was a(n) [adjective] [noun] who loved to eat [noun2]. The [noun] lived in a [place] and had [adjective2] nostrils that blew fire when it was [verb].";

You should output your first story to the console using the message "First story: [firstStory]".

You should assign new values to your adjective, noun, verb, place, adjective2, and noun2 variables.

You should declare a secondStory variable.

Create another story using the same template and assign it to the secondStory variable.

You should output your second story to the console using the message "Second story: [secondStory]".


  
let adjective = "elegant";
let noun = "Rohit";
let verb = "playing";
let place = "Nagpur";
let adjective2 = "stylish";
let noun2 = "Sharma";

let firstStory = `Once upon a time, there was a(n) ${adjective} ${noun} who loved to eat ${noun2}. The ${noun} lived in a ${place} and had ${adjective2} nostrils that blew fire when it was ${verb}.`;

console.log(`First story: ${firstStory}`);

adjective = "powerful";
noun = "ROHIT";
verb = "cricketing";
place = "Mumbai";
adjective2 = "extraordinary";
noun2 = "SHARMA";

let secondStory = `Once upon a time, there was a(n) ${adjective} ${noun} who loved to eat ${noun2}. The ${noun} lived in a ${place} and had ${adjective2} nostrils that blew fire when it was ${verb}.`;

console.log(`Second story: ${secondStory}`);
