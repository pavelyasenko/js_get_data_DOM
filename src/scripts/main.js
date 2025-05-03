'use strict';

const population = document.querySelectorAll('.population ');
const selectTototalPopulation = document.querySelector('.total-population');
const selectAveragePopulation = document.querySelector('average-population');

let totalPopulation = 0;

population.array.forEach((element) => {
  totalPopulation += parseInt(element.textContent.replace(/,/g, ''));
});

const AveragePopulation = Math.round(totalPopulation / population.length);

selectTototalPopulation.textContent = totalPopulation.toLocaleString('en-US');

selectAveragePopulation.textContent = AveragePopulation.toLocaleString('en-US');
//  solution
