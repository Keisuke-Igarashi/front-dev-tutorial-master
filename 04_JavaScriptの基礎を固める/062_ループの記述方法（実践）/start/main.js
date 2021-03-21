const todos =[

    {
        id : 1,
        name : 'Go to school',
        completed : true
    },

    {
        id : 2,
        name : 'Go to museum',
        completed : true
    },

    {
        id : 1,
        name : 'Go shopping',
        completed : false
    }
];

//console.log(todos);

// for(let i=0; i < todos.length; i++){
//     // console.log(i);
//     // console.log(todos[i]);

//     if (todos[i].completed === true){
//         console.log(todos[i].name);
//     }
// };

// for( let i in todos){
//     if (todos[i].completed === true){
//         console.log(todos[i].name);
//     }
// }

for( let v of todos){
    if (v.completed == true){
        console.log(v.name);
    }
}
