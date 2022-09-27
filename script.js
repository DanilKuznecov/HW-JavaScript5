console.log('Задание - "a"');
console.log('');
console.log('');


const users = {}

for (let i = 1; i <= 3; i++ ) {    
    let a = prompt('Введите имя')    
    let b = +prompt('Введите возраст');      


    users[`Пользователь: - ${i}`] = {
        '1': {
            name: `${a}`,
            age: `${b}`            
        }        
    };    
    
};

for(let key in users) {
    console.log(key);
    for(let newKey in users[key]) {
        console.log(users[key][newKey]);
    }
}

console.log(users);











    
