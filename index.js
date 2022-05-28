// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUserColor = ["Yellow", "Pink", "White", "Purple"];
const firstUserRes = ["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang",
                     "Tteok", "Sushi", "Sushi"];

const firstEducation = [
    {
        name: "SD 01",
        city: "Jakarta",
        graduate: "2016"
    },
    {
        name: "SMP 02", 
        city: "Jakarta", 
        graduate: "2019"
    },
    {
        name: "SMA 03", 
        city: "Tangerang"
    }
];

const secondEducation = [
    {
        name: "SD 02", 
        city: "Jakarta", 
        graduate: "2010"
    },
    {
      name: "SMP 03", 
      city: "Bogor", 
      graduate: "2013"
    },
    {
       name: "SMA 01",
       city: "Surabaya", 
       graduate: "2016"
    },
    {
        name: "Universitas Maju",
        city: "Tangerang"	
    }
];

const secondUserColor = ["Blue", "Black", "Grey"];
const secondUserRes = ["Tempura", "Bento", "Sushi", "Pancake","Padang", "Katsu", "Geprek", "Pancake",
                     "Eggy"];

 const setArrayC1 =  new Set(firstUserColor);
 const newColor1 = [];

 for(e of setArrayC1) {
    newColor1.push(e);
 }
 
 const setResto1 = new Set(firstUserRes);
 const newResto1 = [];

 for (e of setResto1) {
    newResto1.push(e);
 }


 const setArrayC2 =  new Set(secondUserColor);
 const newColor2 = [];

 for(e of setArrayC2) {
    newColor2.push(e);
 }
 
 const setResto2 = new Set(secondUserRes);
 const newResto2 = [];

 for (e of setResto2) {
    newResto2.push(e);
 }


const firstUser = {
    name : "Monica",
    gender: "Female",
    age : 17,
    email: "monica@dingdong.com",
    favoriteColor: newColor1,
    isHavePet : "Yes",
    education :  firstEducation,
    favoriteRestaurant: newResto1
};


const secondUser = {
    name : "Wendy",
    gender: "Male",
    age : 23,
    email: "wendy@dingdong.com",
    favoriteColor: newColor2,
    isHavePet : "No",
    education : secondEducation,
    favoriteRestaurant: newResto2
};


// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [
    firstUser, secondUser
];



// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};