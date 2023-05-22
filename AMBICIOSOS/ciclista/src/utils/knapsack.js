export function knapsack(itens, limit) {
  var itensList = itens.sort((a, b) => {
      return (b.calories / b.amount) - (a.calories / a.amount)
  });
  var calories = 0;
  var limitRemainder = limit;
  var orderedList = [];

  for (var i in itensList) {
      orderedList.push({ 
          name: itensList[i].name, 
          amount: Math.min(limitRemainder, itensList[i].amount) 
      });

      calories += Math.min(limitRemainder, itensList[i].amount) * (itensList[i].calories);

      limitRemainder -= Math.min(limitRemainder, itensList[i].amount);
  }

  return { 
      orderedItensList: orderedList, 
      totalCalories: parseFloat(calories.toFixed(2)),
  };
}