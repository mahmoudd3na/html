const populations=[34000, 76000, 56000, 10000]; 

function populationPercentages(population){ 
    let total=0; 
    const percentages=[]; 
    for(let i=0; i<population.length;i++){  
        total+=population[i]; 
    }
    for(let i=0; i<population.length;i++){
        percentages[i]= ((population[i]/total).toFixed(2))*100 + `%`; 
    }
    return percentages; 
    
}
console.log(populationPercentages(populations)); 