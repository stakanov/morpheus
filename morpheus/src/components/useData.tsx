const useData = (weight: any, fastingTime: any, surgeryLoss: any) => {
  console.log("Weight: "+ weight);
  console.log("FastingTime: "+ fastingTime);
  console.log("SurgeryLoss: "+ surgeryLoss);

  // Set hourRequirement
  const hourRequirement = 60 + (weight - 20);
  console.log("HourRequirement: " + hourRequirement);
  
  // Set NPO
  const npo_total =  hourRequirement * fastingTime;
  const npo1 = npo_total * 50 / 100;
  const npo2 = npo_total * 25 / 100;
  const npo3 = npo_total * 25 / 100;
  console.log("NPO total: " + npo_total);
  console.log("NPO 1: " + npo1);
  console.log("NPO 2: " + npo2);
  console.log("NPO 3: " + npo3);

  // Set Surgery Loss
  const losses = surgeryLoss * weight;
  var lossesLabel = "";
  if ((surgeryLoss >= 1) && (surgeryLoss <= 3)){
    lossesLabel = "Lievi";
  }
  else if ((surgeryLoss >= 4) && (surgeryLoss <= 6)){
    lossesLabel = "Moderate";
  }
  else if ((surgeryLoss >= 7) && (surgeryLoss <= 9)){
    lossesLabel = "Gravi";
  }
  else {
    lossesLabel = "";
  }
  console.log("Losses: " + losses);

  // Set Liquids Quantity
  const firstHour = hourRequirement + npo1 + losses;
  const secondHour = hourRequirement + npo2 + losses;
  const thirdHour = hourRequirement + npo3 + losses;
  const overForthHour = hourRequirement + losses;

  // Set Urinary output
  const urinaryOutputMin = 0.5 * weight;
  const urinaryOutputMax = 1 * weight;

return [
  hourRequirement,
  npo_total,
  npo1,
  npo2,
  npo3,
  losses, 
  lossesLabel,
  firstHour,
  secondHour,
  thirdHour,
  overForthHour,
  urinaryOutputMin,
  urinaryOutputMax
];
  
};

export default useData;

