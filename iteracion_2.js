//Iteración #2: Condicionales avanzados

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]
function findApprovedAlums(param) {
    for (let i = 0; i < param.length; i++) {
        alumn= param[i]

        let approvedT=0

        if (alumn.T1) {
            approvedT++
        }
        if (alumn.T2) {
            approvedT++
        }
        if (alumn.T3) {
            approvedT++
        }
        findApprovedAlums = approvedT >=2? true:false
    }
    return 
}
console.log(findApprovedAlums(alumns))