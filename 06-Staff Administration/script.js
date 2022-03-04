console.log(staff);

//staff.forEach(element => {
//   console.log(element)
//});

for (let i = 0; i < staff.length; i++) {
  const element = staff[i];
  element.email = `${element.lastName.toLowerCase()} @coorparation.com.`;
  element.fullName = function (params) {
    return this.firstName + " " + this.lastName;
  };
  // console.log(element.fullName())

  element.fullname = () => element.firstName + " " + element.lastName;

  //console.log(element.fullname())
}

// yaşı istenenden küçük olanlari bulma
for (i in staff) {
  if (staff[i].age > 21) {
   // console.log(staff[i]);
  }
}

const filteredAge = staff.filter(item => item.age > 21)
console.log(filteredAge)


staff.sort((a, b) => a.experience - b.experience);
console.log(staff);


//  ortalama yaş hesaplama
let sumAge = 0;
for (item of staff) {
    sumAge += item.age  
}
let average = sumAge / staff.length
console.log(average)

console.log(staff.reduce((a,b) => a+b.age,0) / (staff.length));
 

const filtered = staff.filter(item => (item.age <40))
console.log(filtered)

const filtered1 = staff.filter(item => (item.language === "Turkish"))
console.log(filtered1)

const filtered2 = staff.filter(item => (item.isActive))
console.log(filtered2)


//Seçili elemanlari büyükten küçüğe gönderme
const sorti = staff.sort((a,b) => b.age-a.age)
console.log(sorti)


// Her eleman için fonksiyon çağirma
const  roomNumber = filtered.map(item => item.roomNumber)
console.log(roomNumber)

const  roomNumber1 = filtered.map(item => [item.roomNumber, item.fullName()] )
console.log(roomNumber1)
