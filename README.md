# Name: Peddy- Pet Adoption Platform.

 Peddy is a dynamic website for adopting pets. It uses APIs to show real-time information about available pets, including their age, breed, and health. Users can easily browse and filter pets, and submit adoption applications online. With a simple design, Peddy aims to make pet adoption easy and accessible for everyone.

 # 5 Key features of this website: 
 - 1. calling api for all pets catagories and get the data. showing the images and data by fatching these objects data.
 - 2. get data by catagory wise and display them when button clicked. 4 button added by calling api.
 - 3. when Click the like button. the exact card's images showing the right side box. it applied for each card.
 - 4. show modal when click the details button. on the modal show pets details dynamicly by calling api with pets id. and show another modal for adopt button with a 3second duration. and adopted button is disabled after clicking.
 - 5. sorting card data's by decending order bassed on their price. calling api and get full array and make a function for decending order.
 - 6. implement a spinner for 2 second as per as requirement. the spinner should work after reload the website and clicking catagory buttons.

 # ES6 features used for this website:
 - 1. **Arrow Functions:** I have used arrow functions in several places, such as in [const loadData = async () => { ... } and const spinnerItem = (petContainer) => { ... }.
 ]
 - 2. **Async/Await:** I have used async/await for calling api and fetch the data. such as in [const loadData = async () => { ... } and const getCatagoryItem = async (category) => { ... }.]

 - 3. **Destructuring Assignment:** I have used Destructuring to used to extract properties from objects, such as in [const { image, pet_name, breed, date_of_birth, gender, price, petId } = pet;.]