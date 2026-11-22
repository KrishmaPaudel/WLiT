// LIVE TOGGLE: Change true to false during class to demo error handling!
const kitchenHasIngredients = false;

function orderFood() {
  return new Promise((resolve, reject) => {
    console.log("Receipt printed (Promise is PENDING)...");

    setTimeout(() => {
      if (kitchenHasIngredients) {
        resolve("Here is your hot Chowmein! (RESOLVED)");
      } else {
        reject("Sorry, we ran out of noodles! (REJECTED)");
      }
    }, 1500);
  });
}

// orderFood()
// .then(food => console.log(food))
// .catch(err => console.log(err))
// .finally(console.log("pending"))

//or we can use async await (better way)

async function eatLunch() {
  try {
    const food = await orderFood(); // Pauses cleanly here until receipt finishes
    console.log("SUCCESS:", food);
  } catch (error) {
    console.log("HANDLED ERROR:", error);
  }
}

eatLunch();