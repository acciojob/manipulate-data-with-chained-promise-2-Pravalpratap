function manipulateArray() {
    // Step 1: Create the initial promise that resolves with the array after 3 seconds
    new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    })
    .then(array => {
        // Step 2: Filter out odd numbers and update output after 1 second
        return new Promise((resolve) => {
            setTimeout(() => {
                const evenNumbers = array.filter(num => num % 2 === 0);
                document.getElementById('output').innerText = `Filtered Array: ${evenNumbers}`;
                resolve(evenNumbers);
            }, 1000);
        });
    })
    .then(evenNumbers => {
        // Step 3: Multiply even numbers by 2 and update output after 2 seconds
        return new Promise((resolve) => {
            setTimeout(() => {
                const multipliedNumbers = evenNumbers.map(num => num * 2);
                document.getElementById('output').innerText = `Multiplied Array: ${multipliedNumbers}`;
                resolve(multipliedNumbers);
            }, 2000);
        });
    })
    .catch(error => {
        // Handle any potential errors
        document.getElementById('output').innerText = `Error: ${error}`;
    });
}

// Call the function to trigger the promise chain
manipulateArray();
