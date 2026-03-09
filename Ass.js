let personName = "Felicia James";
let weightKg = 55;
let heightM = 1.35;

let heightSquared = heightM * heightM;
let bmi = weightKg / heightSquared;
let isUnderweight = bmi < 18.5;
let isNormalweight = bmi >= 18.5 && bmi < 25;
let isOverweight = bmi >=25;

let isHighRisk = isOverweight || weightKg > 90;

console.log("Name:" , personName);
console.log("BMI:" , bmi.toFixed(2));
console.log("Underweight:" , isUnderweight);
console.log ("Normalweight:" , isNormalweight);
console.log("Overweight:" , isOverweight);
console.log("Overweight:" , isHighRisk);


