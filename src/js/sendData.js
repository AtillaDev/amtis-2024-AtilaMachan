// fetch("http://127.0.0.1:4000/desserts");

// async function sendData(data) {
//     // Construct a FormData instance
//     const formData = new FormData();

//     // Add a text field
//     formData.append("name", "Pomegranate");

//     // Add a file
//     const selection = await window.showOpenFilePicker();
//     if (selection.length > 0) {
//         const file = await selection[0].getFile();
//         formData.append("file", file);
//     }

//     try {
//         const response = await fetch("https://example.org/post", {
//             method: "POST",
//             // Set the FormData instance as the request body
//             body: formData,
//         });
//         console.log(await response.json());
//     } catch (e) {
//         console.error(e);
//     }
// }
const formEl = document.querySelector("#form");

formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    const sendData = new FormData(formEl);
    const data = Object.fromEntries(sendData);

    fetch("http://127.0.0.1:4000/form_submissions", {
        method: "POST",
        headers: {
            "Content-Type": "application/jsons",
        },
        body: JSON.stringify(data),
    });
});
