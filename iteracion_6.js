//**Iteración #6: Mixed For...of e includes**
const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]

    for (const param of toys) {
        if (param.name.includes ('gato')) {
            toys.splice(toys.indexOf(param));
        }
    }
    console.log(toys);
