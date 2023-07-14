const myCountry = {
  country: "france",
  capital: "paris",
  language: "french",
  population: 60,
  neighbours: ["germany","swittzeland"],
  describe: function (){ 
    return  `${this.population} million people, their mother tongue is ${this.language}, they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
  }
};
myCountry.isIsland=false; 

myCountry.chechIsland=function(){
    if (this.isIsland==true)
    return true;
    else return false; 
}

console.log(myCountry.chechIsland)
