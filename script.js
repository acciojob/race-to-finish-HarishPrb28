window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
for (let i = 0; i < 5; i++) {
  const promise = new Promise((resolve, reject) => {
    const randomTime = Math.floor(Math.random() * 5) + 1; // Random time between 1 and 5 seconds
    setTimeout(() => {
      resolve(`Promise ${i + 1} resolved after ${randomTime} seconds`);
    }, randomTime * 1000);
  });
  promises.push(promise);
}

// Wait for the first promise to resolve using Promise.any()
Promise.any(promises)
  .then((result) => {
    // Print the result to the output div
    const outputDiv = document.getElementById("output");
    outputDiv.innerText = result;
  })
  .catch((error) => {
    console.error(error);
  });