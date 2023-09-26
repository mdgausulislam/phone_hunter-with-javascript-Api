const loadPhones = async () => {
    const url = `https://openapi.programming-hero.com/api/phones?search=iphone`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);
}
const displayPhones = phones => {

    const phoneContainer = document.getElementById('phone-container');
    phones.forEach(phone => {
        const divContainer = document.createElement('col');
        divContainer.innerHTML = `
        <div class="card h-100">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.</p>
        </div>
    </div>
        `
        phoneContainer.appendChild(divContainer);
        console.log(phone);
    });
}


loadPhones();