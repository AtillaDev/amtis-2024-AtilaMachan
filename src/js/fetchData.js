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
        })
        .catch((err) => {
            console.log(`Error: ${err}`);
        });
}

giveAdvice();
