export async function getImage() {
    const serverURL = "https://foodish-api.com/api"
    try {
        const response = await fetch(serverURL);
        const data = await response.json();
        // const nutritionData = await getNutrition(getFoodName(data));
        const foodObj = {
            image: data.image,
            name: getFoodName(data),
            // data: nutritionData
        }
        return foodObj;
    } catch (error) {
        return [];
    }
}

function getFoodName(data) {
    const name = data.image.split("/")[4];
    console.log("name", name);
    return name;
}

// export async function getNutrition(foodName){
//     console.log(`GetNutrition executed, searching for ${foodName}`);
//     const serverURL = "https://www.fruityvice.com/api/fruit/" + foodName;
//     try {
//         // let response = await fetch(serverURL);
//         let data = await response.json();
//         console.log("data", data);
//         return data;
//     } catch (error) {
//         return [];
//     }
// }