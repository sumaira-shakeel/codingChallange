
// console.log("Hello world");

// let animals_array:string[] = ['Cat','Dog','Rabbit']
// for(let i=0; i<animals_array.length; i++){
//     console.log(` A ${animals_array[i]} would be a great pet!`)

// }
// console.log('All of below pets would be a great pet!')
// let array:string[] = ['1','2','3','4','5','6','7','8','9']
// for(let i=0; i<array.length; i++){
//     if(i===0){
//         console.log(`${array[i]}st`);
//     }else if(i===1){
//         console.log(`${array[i]}nd`);
//     }else if(i===2){
//         console.log(`${array[i]}rd`);
//     }else if(i===3){
//         console.log(`${array[i]}th`);
//     }else if(i===4){
//         console.log(`${array[i]}th`);
//     }else if(i<=9){
//         console.log(`${array[i]}th`)
//     }
// }shirt

// function makeShirt(size:string,text:string){
//     console.log(`on  a ${size} size of shirt. ${text} is printed`)

// }
// makeShirt("medium","Have a nice day");
// makeShirt("large","Have a good day");
// makeShirt("small","Happy coding");
// function makeShirt(size:string = "Large" , text:string = "I love Typescript"){
//     console.log(`on a ${size} size of shirt. ${text} is printed`)

// }
// makeShirt();
// makeShirt("medium");
// makeShirt("small","I love to learn phython")

// function describeCity(city:string,country:string ="England"){
//     console.log(`${city} is in ${country}`)
     
// }
// describeCity("Krachi","pakistan");
// describeCity("Mumbai","India");
// describeCity("London",);
// pizza array
// let pizzaArray:string[] = ['papperoni','barbeque','Fajjita']
// for(let i=0; i < pizzaArray.length; i++){
//     console.log(`I like ${pizzaArray[i]} pizza.`)
// }
// console.log('I really like pizza!')
// let age:number = 4;
// if(age < 2 ){
//     console.log("person is a baby");
// }else if(age  >= 2 && age < 4){
//     console.log('Person is a todler');
// }else if(age >=4 && age < 13){
//     console.log('person is kid');
// }else if(age >=13 && age < 20){
//     console.log('Person is a teenager');
// }else if(age >=20 && age <65){
//     console.log('person is an adult');
    
// }else{
//     console.log('person is an elder')
// }
// let favoriteFruit:string[] = ['Apple' , 'Mango','peach','Banana']
// if(favoriteFruit.includes("melon")){
//     console.log('I really like melon')
// }
// if(favoriteFruit.includes("pear")){
//     console.log('I really like pear')
// }
// if(favoriteFruit.includes("Mango")){
//     console.log('I really like Mango')
// }
// if(favoriteFruit.includes("Banana")){
//     console.log('I really like Banana')
// }
// if(favoriteFruit.includes("peach")){
//     console.log('I really like peach')
// }
// let userArray:string[] = ['Tom','Jhone','Marrie','Admin','Jully']

// for( let i=0; i < userArray.length; i++){
//     if(userArray[i] === 'Admin'){
//         console.log("Hello admin would you like to see a status report?")
//     }else{
//     console.log(`Hello ${userArray[i]} thank you for logining in again!`);
// }

// let userArray:string[] = ['Tom','Jhone','Marrie','Admin','Jully']
// while(userArray.length>0){
//     userArray.pop()
// }
// if(userArray.length===0){
//     console.log("We need to find some users!")
// }
// let currentUsers =['asad','fahad','saad','samad','Eric']

// let newUser = ['Asad','Fahad',"nazia",'fazila','sadaf']
// let lowercase =[]
// for(let j=0; j<currentUsers.length; j++){
//     lowercase.push(currentUsers[j].toLowerCase())
// }

// for(let i = 0;  i < newUser.length;  i++){
//     if(lowercase.includes(newUser[i])){
//         console.log(`${newUser[i]} is not available`);
//     }else{
//         console.log(`${lowercase[i]} is available.`)
//     }

// }
let currentUsers: string[] = ['john', 'peter', 'arah', 'emily', 'imichael'];
let newUsers: string[] = ['john', 'peter', 'lisa', 'tom', 'arah'];

for (let newUser of newUsers) {
  if (currentUsers.some(user => user.toLowerCase() === newUser.toLowerCase())) {
    console.log(`Sorry, ${newUser} is already taken. Please choose a new username.`);
  } else {
    console.log(`${newUser} is available!`);
  }
}








    
