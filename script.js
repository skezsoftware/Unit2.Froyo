// Visitor receives a prompt
let froyoOrder = prompt(
  "Enter your list of flavors seperated by a comma please",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

// Their order is split into individual arrays
const seperatedFlavors = froyoOrder.split(",");
console.log(seperatedFlavors);
console.log(typeof seperatedFlavors);

// Function will count the number of flavors 
function froyoTable(seperatedFlavors) {
  const flavors = {};
  for (let i = 0; i < seperatedFlavors.length; i++) {
    flavors[seperatedFlavors[i]] = (flavors[seperatedFlavors[i]] || 0) + 1;
  }
  return flavors;
}
// Will display in a table format
console.log(froyoTable(seperatedFlavors));
console.table(froyoTable(seperatedFlavors));
