const loadPhones = async (searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);
}
const displayPhones = phones => {

    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent='';
   phones=phones.slice(0,10);
    phones.forEach(phone => {
        const divContainer = document.createElement('div');
        divContainer.classList.add('col')
        divContainer.innerHTML = `
        <div class="card h-100 p-4 img-fluid">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${phone.phone_name
            }</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.</p>
        </div>
    </div>
        `
        phoneContainer.appendChild(divContainer);
        console.log(phone);
    });
}

document.getElementById('btn-search').addEventListener('click',function(){
    const searchField=document.getElementById('search-Field');
    const searchText=searchField.value;
    loadPhones(searchText);

})