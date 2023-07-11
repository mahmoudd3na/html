function  countryToLiveIn (language,isIsland,population,country){
    if(language=="English" && !isIsland && population< 50){
       return `You should consider living in ${country}.`
    }
    else {
        return `${country} does not meet your criteria.`
    }
}



console.log(countryToLiveIn("English",false, 51,"iceland")); 