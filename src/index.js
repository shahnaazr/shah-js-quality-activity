// Please tidy this file up until line 43 where it says "⛔ STOP"

/*

							Bart
							Lisa
							Maggie
							Result: ✅ SUCCESS
							
*/
const bart = { name: "Bart", age: 12 };
const lisa = { name: "Lisa", age: 10 };

const peopleArray = [bart, lisa, { name: "Maggie", age: 1 }];

function printName(person) {
  console.log(person.name);
}

printName(bart);
printName(lisa);
printName(peopleArray[2]);

let result = 0;

function compareAge(person) {
  if (person.age === getInputAge(person)) {
    result += 1;
  }
}

compareAge(bart);
compareAge(lisa);
compareAge(peopleArray[2]);

// ⛔🚫 STOP TIDYING! You're done ✅

// ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
// ⚠️ DO NOT MODIFY BELOW  ⚠️
// ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️

// PRINT SUCCESS IF EXACTLY 2 INPUTS MATCH
console.log(`Result: ${result === 2 ? "✅ SUCCESS" : "❌ FAIL"}`);

function getInputAge(person) {
  switch (person.name) {
    case "Bart":
      return 12;
    case "Lisa":
      return 10;
    case "Maggie":
      return "1"; // she's a baby, she's allowed to get this type wrong!
    default:
      return 0;
  }
}
