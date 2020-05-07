let teamoneNumshots = document.querySelector("#teamone-numshots");
let resetButton = document.querySelector("#reset-button");
let teamtwoNumshots = document.querySelector("#teamtwo-numshots");
let teamoneShootButton = document.querySelector("#teamone-shoot-button")
let teamtwoShootButton = document.querySelector("#teamtwo-shoot-button")
let teamoneNumGoals = document.querySelector("#teamone-numgoals")
let teamtwoNumGoals = document.querySelector("#teamtwo-numgoals")
let numResets = document.querySelector("#num-resets")

teamoneShootButton.addEventListener("click", function () {
    let newShotCount = Number(teamoneNumshots.innerHTML) + 1
    teamoneNumshots.innerHTML = newShotCount
    let randomNumber = (Math.random())
    
    console.log (randomNumber)
    if (randomNumber > 0.5) {
        console.log(teamoneNumGoals)
        let newGoalCount = Number(teamoneNumGoals.innerHTML) + 1
        teamoneNumGoals.innerHTML = newGoalCount
    }


})

teamtwoShootButton.addEventListener("click", function () {
    let newShotCount2 = Number(teamtwoNumshots.innerHTML) + 1
    teamtwoNumshots.innerHTML = newShotCount2
    console.log(Math.random(0.5))
    if (Math.random() > 0.5) {

        console.log(teamtwoNumshots)
        let newGoalCount2 = Number(teamtwoNumGoals.innerHTML) + 1
        teamtwoNumGoals.innerHTML = newGoalCount2
    }

})

resetButton.addEventListener("click", function () {
    let newcountReset = Number(numResets.innerHTML) + 1
    numResets.innerHTML = newcountReset
    teamoneNumshots.innerHTML = 0
    teamoneNumGoals.innerHTML = 0
    teamtwoNumshots.innerHTML = 0
    teamtwoNumGoals.innerHTML = 0


})







