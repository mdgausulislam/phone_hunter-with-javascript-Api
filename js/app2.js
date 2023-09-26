const loadPhones = async (searchText, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data, dataLimit);
}
const displayPhones = (phones, dataLimit) => {

    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    const showAll = document.getElementById('show-all');
    if (dataLimit && phones.length > 10) {
        phones = phones.slice(0, 10);
        showAll.classList.remove('d-none');
    } else {
        showAll.classList.add('d-none');
    }


    const noFoundPhones = document.getElementById('no-phone-found');
    if (phones.length === 0) {
        noFoundPhones.classList.remove('d-none');
    } else {
        noFoundPhones.classList.add('d-none');
    }

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
                <button onclick="loadPhoneDetails('${phone.slug}')" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailsModal">Show Details</button>
        </div>
        
    </div>
        `
        phoneContainer.appendChild(divContainer);
        console.log(phone);
    });

    toggleLoader(false);
}

const processSearch = (dataLimit) => {
    toggleLoader(true);
    const searchField = document.getElementById('search-Field');
    const searchText = searchField.value;
    loadPhones(searchText, dataLimit);
}

document.getElementById('btn-search').addEventListener('click', function () {
    processSearch(10);
})

document.getElementById('search-Field').addEventListener('keypress', function (events) {
    if (events.key === 'Enter') {
        processSearch(10);
    }
})


const toggleLoader = isLoading => {
    const loader = document.getElementById('loader');

    if (isLoading) {
        loader.classList.remove('d-none');
    } else {
        loader.classList.add('d-none');
    }
}

document.getElementById('btn-show-all').addEventListener('click', function () {
    processSearch();

})

const loadPhoneDetails = async (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhonesDetails(data.data);
}

const displayPhonesDetails=(phone)=>{
    const modelTitle=document.getElementById('phoneDetailsModalLabel');
    modelTitle.innerText=phone.name;
    const phoneTitle=document.getElementById('phone-details');
    phoneTitle.innerHTML=`
    <p>Release Date: ${phone.releaseDate ?phone.releaseDate :'no found date'}</p>
    <p>Storage: ${phone.mainFeatures ? phone.mainFeatures.storage : 'No storage found'}</p>
    <p>Others: ${phone.others ? phone.others.Bluetooth : 'No Bluetooth found'}</p>
    `


}
// loadPhones('apple');
