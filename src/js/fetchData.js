const desserts = document.querySelector("#desserts");
const features = document.querySelector("#features");

console.log(features.children);

function giveDeserts() {
    fetch("http://127.0.0.1:4000/desserts")
        .then((res) => {
            if (!res.ok) {
                console.log("Error connecting to API");
                return;
            }
            // console.log(res.json());
            return res.json();
        })
        .then((data) => {
            console.log(data);

            for (let i = 0; i < data.length; i++) {
                const desert = data[i];
                console.log(desert);
                desserts.children[i].innerHTML += `  <picture>
                <img
                    id="dessert-image"
                    class="dessert-image"
                    src="src/images/${desert.image}"
                    alt="dessert image"
                />
            </picture>
            <img
                class="dessert-seperator"
                src="/images/Sub Title Element.png"
                alt=""
            />                  
                <h4 class="dessert-tittle">${desert.name}</h4>
                <p class="dessert-text">
                ${desert.description_long}
            </p>
            
            <a class="dessert-link" href="#">НАУЧЕТЕ ПОВЕЧЕ</a>
            `;

                features.children[i].innerHTML += `                        
                <img
                class="feature-image"
                src="src/images/${desert.image}"
                alt=""
            />
                <div class="feature-text">
                    <h6 class="feature-text-tittle">${desert.name}</h6>
                    <p class="feature-text-description">
                    ${desert.description_long}
                    </p>
                    <p class="feature-text-description">
                        <span class="bold-text">Основни съставки:</span>
                        ${desert.ingredients_text}
                    </p>
                </div>

                <div class="feature-nutrients">
                    <div class="feature-nutrients-section">
                        <p>Калории:</p>
                        <h6>${desert.nutrition.calories}</h6>
                    </div>
                    <div class="feature-nutrients-section">
                        <p>Общо мазнини:</p>
                        <h6>${desert.nutrition.totalFat}</h6>
                    </div>
                    <div class="feature-nutrients-section">
                        <p>Наситени мазнини:</p>
                        <h6>${desert.nutrition.saturatedFat}</h6>
                    </div>
                    <div class="feature-nutrients-section">
                        <p>Общо въглехидрати:</p>
                        <h6>${desert.nutrition.totalCarbs}</h6>
                    </div>
                    <div class="feature-nutrients-section">
                        <p>Протеин:</p>
                        <h6>${desert.nutrition.protein}</h6>
                    </div>
                    <div class="feature-nutrients-section">
                        <p>Захари:</p>
                        <h6>${desert.nutrition.sugars}</h6>
                    </div>
                    <div class="feature-nutrients-section">
                        <p>Натрий:</p>
                        <h6>${desert.nutrition.sodium}</h6>
                    </div>
                    <div class="feature-nutrients-section">
                        <p>Холестерол:</p>
                        <h6>${desert.nutrition.cholesterol}</h6>
                    </div>
                  </div>`;
            }
        })
        .catch((err) => {
            console.log(`Error: ${err}`);
        });
}

giveDeserts();
