// const runBtn = document.getElementById("run");
// const cmdInput = document.getElementById("cmd");
// const output = document.getElementById("output");

// runBtn.addEventListener("click", () => {
//   const cmd = cmdInput.value.trim().toLowerCase();

//   let result;
//   switch (cmd) {
//     case "hello":
//       result = "👋 Hi there!";
//       break;
//     case "time":
//       result = "⏰ " + new Date().toLocaleTimeString();
//       break;
//     case "date":
//       result = "📅 " + new Date().toLocaleDateString();
//       break;
//     case "joke":
//       result = "😂 Why don’t skeletons fight each other? They don’t have the guts.";
//       break;
//     default:
//       result = "❓ Unknown command.";
//   }

//   output.textContent = result;
// });

import hero from "bundle-text:/section.html"
function insertHtmlFragment(targetId, htmlContent) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.innerHTML = htmlContent;
    } else {
        console.warn(`Елемент з ID "${targetId}" не знайдено.`);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    insertHtmlFragment('main', hero);
   
});