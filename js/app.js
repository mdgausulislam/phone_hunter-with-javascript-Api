// const loadPhones=()=>{
//     const url=`https://openapi.programming-hero.com/api/phones?search=iphone`;
//     fetch(url)
//     .then(res=>res.json())
//     .then(data=>console.log(data))
// }

// loadPhones();

const loadPhones=async()=>{
    const url=`https://openapi.programming-hero.com/api/phones?search=iphone`;
    const res=await fetch(url);
    const data=await res.json();
    displayPhones(data.data);
}

const phoneContainer=document.getElementById('phone-container');
phoneContainer.classList.add('phones');
const displayPhones=phones=>{
    // console.log(phones);
    phones.forEach(phones => {
        console.log(phones);
    });
}




loadPhones();