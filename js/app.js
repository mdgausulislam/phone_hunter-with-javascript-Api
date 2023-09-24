// const loadPhones=()=>{
//     const url=`https://openapi.programming-hero.com/api/phones?search=iphone`;
//     fetch(url)
//     .then(res=>res.json())
//     .then(data=>console.log(data))
// }

// loadPhones();

const loadPhones = async (searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);
}


const displayPhones = phones => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';

    // display 20 phones
    phones=phones.slice(0,10);

    //display no phones found

    const noFoundPhones=document.getElementById('no-found-message');
    if(phones.length===0){
        noFoundPhones.classList.remove('d-none');
    }else{
        noFoundPhones.classList.add('d-none');
    }
    //display all phones


    // console.log(phones);
    phones.forEach(phone => {
        // console.log(phones);

        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = ` <div class="card h-100 p-4">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">${phone.slug}</p>
        </div>
    </div>`;
        phoneContainer.appendChild(phoneDiv);
    });
}

document.getElementById('btn-search').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhones(searchText);
})


// loadPhones();