const employee1 = {
    name:'John',
    lastname:'Smith',
    age:27,
    jobs:['apple', 'microsoft', 'google']
}
const employee2 = {
    name:'Bill',
    lastname:'Anderson',
    age:30,
    jobs:['bell', 'rogers', 'virgin']
}

{if (employee1.jobs.length == employee2.jobs.length){
    console.log(employee1.name)
    for(let x in employee1.jobs){
        console.log(employee1.jobs[x])
    }
    }
    {console.log(employee2.name)
        for(let x in employee2.jobs){
            console.log(employee2.jobs[x])
        }
    }
}
{if (employee1.jobs.length < employee2.jobs.length){
    console.log(employee2.name)
    for(let x in employee2.jobs){
        console.log(employee2.jobs[x])
    }
    }
}
{if (employee1.jobs.length > employee2.jobs.length){
    console.log(employee1.name)
    for(let x in employee1.jobs){
        console.log(employee1.jobs[x])
    }
    }
}