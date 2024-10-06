const loadData = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/peddy/pets');
    const data = await response.json();
    displayData(data.pets);


}

loadData()

setTimeout(() => {

}, 2000);

const spinnerItem = (petContainer) => {
    const spinnerContainer = document.getElementById('main-container')
    petContainer.innerHTML = `
    <div id="spinner" class="col-span-3 flex items-center justify-center">
        <span class="loading loading-bars loading-lg w-16"></span>
    </div>
`
}

const displayData = (pets) => {
    const petContainer = document.getElementById('pets-container');
    petContainer.innerHTML = '';
    spinnerItem(petContainer)

    // for implementing spinner 

    setTimeout(() => {
        document.getElementById('spinner').classList.add('hidden');
        if (pets.length === 0) {
            const div = document.createElement('div');
            petContainer.classList.remove('grid');
            div.innerHTML = `
                <div class="flex flex-col items-center justify-center p-5 my-20">
                    <img src="./images/error.webp" alt="">
                    <h1 class="text-4xl font-extrabold">No Information Available</h1>
                    <p class="md:w-3/4 text-center pt-5 text-gray-600">In this category, there are currently no pets available for adoption. Please check back later as new pets may be added soon.</p>
                </div>
        `;
            petContainer.appendChild(div);
        }
        else {
            pets.forEach(pet => {
                const { image, pet_name, breed, date_of_birth, gender, price, petId } = pet;
                const div = document.createElement('div');
                petContainer.classList.add('grid');
                div.innerHTML = `
                        <div class="card bg-base-100 shadow-lg">
                        <figure class="px-2 pt-5">
                          <img id="image-element"
                            src="${image ? image : 'not Available'}"
                            alt="Shoes"
                            class="rounded-xl" />
                        </figure>
                        <div class="card-body px-5">
                          <h2 class="card-title">${pet_name ? pet_name : 'not Available'}</h2>
                          <div>
                          <p class="flex gap-2"><img class="w-5 max-h-5" src="https://img.icons8.com/?size=100&id=8gmS8B8ERDZk&format=png&color=000000" /> Breed: ${breed ? breed : 'not Available'}</p>
                          <p class="flex gap-2"><img class="w-5 max-h-5" src="https://img.icons8.com/?size=100&id=89201&format=png&color=000000" /> Birth: ${date_of_birth ? date_of_birth : 'not available'}</p>
                          <p class="flex gap-2"><img class="w-5 max-h-5" src="https://img.icons8.com/?size=100&id=1665&format=png&color=000000" />  Gender: ${gender ? gender : 'not Available'}</p>
                          <p class="flex gap-2"><img class="w-5 max-h-5" src="https://img.icons8.com/?size=100&id=2971&format=png&color=000000" />  Price: ${price ? price : 'not Available'}</p>
                          <hr/>
                          </div>
                          <div class="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-2 item-center justify-between mt-5">
                            <button id="like-button" onclick="displayImage(${petId})" class="btn btn-outline btn-accent "><i class="fa-regular fa-thumbs-up text-teal-700 border-teal-800"></i></button>
                            <button  class="btn btn-outline btn-accent" onclick="openModal(this)">Adopt</button>
                            <button class="btn btn-outline btn-accent" onclick="showModalBox(${petId})">Details</button>
                          </div>
                        </div>
                      </div>
            `;
                petContainer.appendChild(div);

            });
        }
    }, 2000);
}


// show catagories 
const loadCatagory = async () => {
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/categories`);
    const data = await response.json();
    showCatagory(data.categories);
}

const showCatagory = (items) => {
    items.forEach(item => {
        const { category, category_icon } = item;
        const petCatagoryButton = document.getElementById('pet-catagory-btn');
        const div = document.createElement('div');
        div.innerHTML = `
                <button onclick="getCatagoryItem('${category}')" class="btn btn-outline border-[#0E7A811A] h-20 w-full flex items-center justify-center gap-3 py-4 hover:text-black hover:bg-white">
                    <img src="${category_icon}" alt="">
                    <p class="text-2xl font-bold">${category}</p>
                </button>
        `;
        petCatagoryButton.appendChild(div);
        // getCatagoryItem(category);

    })

}


// scroll into div function 
document.getElementById('adopt-scroll-btn').addEventListener('click', function () {
    document.getElementById('adopt-section').scrollIntoView({ behavior: "smooth" });
})

loadCatagory()


const getCatagoryItem = async (category) => {

    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
    const data = await response.json();
    const petData = data.data;
    displayData(petData);

}

// get images by clicking like button 

const displayImage = async (id, modalData) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`);
    const data = await response.json();
    showImage(data.petData)

}

const showImage = (pet) => {
    console.log(pet)
    const image = pet.image;
    console.log(image);
    const imageContainer = document.getElementById('image-container');
    const div = document.createElement('div');
    div.innerHTML = `
        <img class="rounded-xl" src="${image}"/>
    `;
    imageContainer.appendChild(div);
}

// show modal 
const showModalBox = async (id) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
    const data = await response.json();
    displayModal(data.petData)
}

const displayModal = (data) => {
    const { petId, breed, category, date_of_birth, price, image, gender, pet_details, vaccinated_status, pet_name } = data;
    const modalBox = document.getElementById('detailsModal');
    modalBox.innerHTML = '';
    const div = document.createElement('div');
    div.innerHTML = `
                <div class="modal-box w-11/12 max-w-5xl">
                    <img class="p-10 w-full border rounded-xl" src="${image}" alt="">
                    <h2 class="card-title text-2xl my-2">${pet_name ? pet_name : 'not Available'}</h2>
                <div class="text-gray-500">
                    <div class="flex flex-col md:flex-row md:gap-5">
                        <div>
                            <p class="flex gap-3"><img class="w-5 max-h-5" src="https://img.icons8.com/?size=100&id=8gmS8B8ERDZk&format=png&color=000000" /> Breed:
                                ${breed ? breed : 'not Available'}</p>
                            <p class="flex gap-3"><img class="w-5 max-h-5"
                                    src="https://img.icons8.com/?size=100&id=1665&format=png&color=000000" /> Gender:
                                ${gender ? gender : 'not Available'}</p>
                        </div>
                        <div>
                            <p class="flex gap-3"><img class="w-5 max-h-5"
                                    src="https://img.icons8.com/?size=100&id=89201&format=png&color=000000" /> Birth:
                                ${date_of_birth ? date_of_birth : 'not available'}</p>

                            <p class="flex gap-3"><img class="w-5 max-h-5"
                                    src="https://img.icons8.com/?size=100&id=2971&format=png&color=000000" /> Price: ${price
            ? price : 'not Available'}</p>
                        </div>
                    </div>
                    <p class="flex gap-2 py-2"><img class="w-5 max-h-5"
                                    src="https://img.icons8.com/?size=100&id=1665&format=png&color=000000" /> Vaccination:
                                ${vaccinated_status ? vaccinated_status : 'not Available'}</p>
                    <hr class="py-5"/>
                </div>
                <div>
                    <h1 class="text-xl font-bold">details Information</h1>
                    <p class="text-gray-500">${pet_details}</p>
                </div>
                <div class="modal-action">
                    <form method="dialog" class="w-full">
                      <!-- if there is a button, it will close the modal -->
                      <button class="btn w-full bg-teal-700 text-white hover:text-black">Close</button>
                    </form>
                </div>
            </div>
    `;
    modalBox.appendChild(div);
    // showing the modal by clicking 
    modalBox.showModal();

    // for disabled the button 
}



// for coundown modal 

const openModal = (buttonElement) => {
    const modalbody = document.getElementById('adoptModal');
    const countdownElement = document.getElementById('countdown');
    let countdown = 3;
    modalbody.showModal();

    const updateCountDown = () => {
        countdownElement.textContent = countdown;
        // set a condition for coundown 
        if (countdown > 0) {
            countdown--;

            setTimeout(updateCountDown, 1000);
        } else {
            modalbody.close();
        }
    }
    updateCountDown();

    // calling the pet id for disabling 
    buttonDisable(buttonElement)
}

// for disable the button 
const buttonDisable =(buttonElement) =>{
    // const button = document.getElementById('disable-adopt-btn');
    buttonElement.disabled = true;
    buttonElement.innerText = 'Adopted'
}


// for decending order each item 

const decendingOrder = async()=>{
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
    const data = await response.json();
    const pets = data.pets;
    console.log(pets);

    // for shorting the pets data 
    const shortedPetData = pets.sort((a, b) =>{
        const priceA = a.price || 0;
        const priceB = b.price || 0;
        return priceB - priceA;
    })
    displayData(shortedPetData);
}