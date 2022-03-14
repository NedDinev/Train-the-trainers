function trainTheTrainers(input) {
  let index = 0;
  let judge = Number(input[index]);
  index++;
  let command = input[index];
  index++;

  let sumGrade = 0;
  let counter = 0;

  while (command !== "Finish") {
    let presentationName = command;
    let tempSumGrade = 0;
    counter++;
    for (let i = 0; i < judge; i++) {
      let tempGrade = Number(input[index]);
      index++;
      tempSumGrade += tempGrade;
    }
    let tempAvgGrade = tempSumGrade / judge;
    sumGrade += tempAvgGrade;
    console.log(`${presentationName} - ${tempAvgGrade.toFixed(2)}.`);
    command = input[index];
    index++;
  }
  let avgGrade = sumGrade / counter;
  console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);
}

trainTheTrainers([
  "2",
  "While-Loop",
  "6.00",
  "5.50",
  "For-Loop",
  "5.84",
  "5.66",
  "Finish",
]);
