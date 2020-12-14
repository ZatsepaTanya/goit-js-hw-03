const findBestEmployee = function(employees) {
    const values = Object.values(employees);
       console.log(values);
    let bestCount = values[0];
    for(let i=1; i<=values.length; i+=1){
        if(bestCount<values[i]){
        bestCount=values[i];
        }
       
    }
    console.log(bestCount);
    // console.log(this.Object);
    
    // for(const key in employees){
    //     console.log(key);
    // }
    
};
// Напиши функцию findBestEmployee(employees), 
// которая принимает объект сотрудников и возвращает имя самого продуктивного 
// (который выполнил больше всех задач). Сотрудники и кол-во выполненых задач 
// содержатся как свойства объекта в формате "имя":"кол-во задач".

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux