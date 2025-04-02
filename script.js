document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("dogForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form from reloading the page

        const dogName = document.getElementById("dogName").value;
        const dogBreed = document.getElementById("dogBreed").value;

        const formData = {
            dogName: dogName,
            dogBreed: dogBreed
        };

        const configObject = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        };

        fetch("http://localhost:3000/dogs", configObject)
            .then(response => response.json())
            .then(data => {
                console.log("Success:", data);
                alert(`Dog added: ${data.dogName}, ${data.dogBreed}`);
                form.reset();
            })
            .catch(error => {
                console.error("Error:", error);
                alert("Failed to add dog. Try again.");
            });
    });
});
