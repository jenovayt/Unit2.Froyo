const userInputString = prompt(
    "Please input your froyo order here:",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);
const result = countDuplicatesAndUniques(userInputString);

function countDuplicatesAndUniques(userInputString) {

    const arr = userInputString.split(',').map(item => item.trim());
    const frequency = {};
  
    arr.forEach(item => frequency[item] = (frequency[item] || 0) + 1);
  
    const duplicates = [];
    const uniques = [];
  
    for (const [key, value] of Object.entries(frequency)) {
      if (value > 1) {
        duplicates.push({ Item: key, Count: value });
      } else {
        uniques.push({ Item: key, Count: value });
      }
    }

    console.log('Duplicates:');
    console.table(duplicates);
  
    console.log('Uniques:');
    console.table(uniques);
  
    return { duplicates, uniques };
  }
