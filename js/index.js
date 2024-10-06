const loadData = async()=>{
    const response = await fetch('https://openapi.programming-hero.com/api/peddy/pets');
    const data = await response.json();
    displayData(data.pets);
}

loadData()

const displayData = (pets)=>{
    const petContainer = document.getElementById('pets-container');
    pets.forEach(pet => {
        const {image, pet_name, breed, date_of_birth, gender, price, petId} = pet;
        const div = document.createElement('div');
        div.innerHTML = `
                    <div class="card bg-base-100 shadow-lg">
                    <figure class="px-2 pt-10">
                      <img id="image-element"
                        src="${image?image:'not Available'}"
                        alt="Shoes"
                        class="rounded-xl" />
                    </figure>
                    <div class="card-body px-5">
                      <h2 class="card-title">${pet_name?pet_name:'not Available'}</h2>
                      <p class="flex gap-2"><img class="w-5" src="https://img.icons8.com/?size=100&id=8gmS8B8ERDZk&format=png&color=000000" /> Breed: ${breed?breed:'not Available'}</p>
                      <p class="flex gap-2"><img class="w-5" src="https://img.icons8.com/?size=100&id=89201&format=png&color=000000" /> Birth: ${date_of_birth?date_of_birth:'not available'}</p>
                      <p class="flex gap-2"><img class="w-5" src="https://img.icons8.com/?size=100&id=1665&format=png&color=000000" />  Gender: ${gender?gender:'not Available'}</p>
                      <p class="flex gap-2"><img class="w-5" src="https://img.icons8.com/?size=100&id=2971&format=png&color=000000" />  Price: ${price?price:'not Available'}</p>
                      <hr/>
                      <div class="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-2 item-center justify-between mt-5">
                        <button id="like-button" onclick="displayImage(${petId})" class="btn btn-outline btn-accent "><i class="fa-regular fa-thumbs-up text-teal-700 border-teal-800"></i></button>
                        <button class="btn btn-outline btn-accent">Adopt</button>
                        <button class="btn btn-outline btn-accent">Details</button>
                      </div>
                    </div>
                  </div>
        `;
        petContainer.appendChild(div);

    });
}


// show catagories 
const loadCatagory= async () =>{
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/categories`);
    const data = await response.json();
    showCatagory(data.categories);
}

const showCatagory = (items) =>{
    items.forEach(item =>{
        const {category, category_icon}= item;
        const petCatagoryButton = document.getElementById('pet-catagory-btn');
        const div = document.createElement('div');
        div.innerHTML = `
                <button class="btn btn-outline border-[#0E7A811A] h-20 w-full flex items-center justify-center gap-3 py-4 hover:text-black hover:bg-white">
                    <img src="${category_icon}" alt="">
                    <p class="text-2xl font-bold">${category}</p>
                </button>
        `;
        petCatagoryButton.appendChild(div);
        getCatagoryItem(category);
  
    })

}

loadCatagory()


const getCatagoryItem =async(category)=>{
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
    const data = await response.json();
    showCatagoryItem(data.data);
}

const showCatagoryItem = (pet)=>{
    pet.forEach(item =>{
        console.log(item)
    })
}




// get images by clicking like button 

const displayImage = async (id)=>{
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`);
    const data = await response.json();
    showImage(data.petData)
   
}

const showImage=(pet)=>{
    const image = pet.image;
    console.log(image);
    const imageContainer = document.getElementById('image-container');
    const div = document.createElement('div');
    div.innerHTML = `
        <img class="rounded-xl" src="${image}"/>
    `;
    imageContainer.appendChild(div);
}

// {
//     "status": true,
//     "message": "successfully fetched pet data using id 1",
//     "petData": {
//         "petId": 1,
//         "breed": "Golden Retriever",
//         "category": "Dog",
//         "date_of_birth": "2023-01-15",
//         "price": 1200,
//         "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
//         "gender": "Male",
//         "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
//         "vaccinated_status": "Fully",
//         "pet_name": "Sunny"
//     }
// }

// {
//     "petId": 1,
//     "breed": "Golden Retriever",
//     "category": "Dog",
//     "date_of_birth": "2023-01-15",
//     "price": 1200,
//     "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
//     "gender": "Male",
//     "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
//     "vaccinated_status": "Fully",
//     "pet_name": "Sunny"
// }