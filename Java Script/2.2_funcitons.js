function tellFortune(jobTitle, location, partnerName, numberOfChildren) {
  return `You will be a ${jobTitle} in ${location} married to ${partnerName} with ${numberOfChildren} children'.`;
}
let mazen = tellFortune("plummer", "iceland", "muna", 3);

console.log(mazen);
