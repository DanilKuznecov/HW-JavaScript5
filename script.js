console.log('Задание - "a"');
console.log('');
console.log('');


const users = {}

for (let i = 1; i <= 10; i++ ) {    
    let a = prompt('Введите имя')    
    let b = +prompt('Введите возраст');      


    users[i] = {        
        name: a,
        age: b   
               
    };    
    
};

for(let key in users) {
    console.log(`Пользователь: - ${key}`);
    for(let newKey in users[key]) {
        console.log(newKey == 'name' ? `Ваше имя ${users[key][newKey]}` : `Ваш возраст ${users[key][newKey]}`);
    }
}

console.log(users);