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
function insertHtmlFragment(targetId, htmlContent) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) targetElement.innerHTML = htmlContent;
    else console.warn(`\u{415}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442} \u{437} ID "${targetId}" \u{43D}\u{435} \u{437}\u{43D}\u{430}\u{439}\u{434}\u{435}\u{43D}\u{43E}.`);
}
document.addEventListener('DOMContentLoaded', ()=>{
    insertHtmlFragment('header-placeholder', header);
});

//# sourceMappingURL=parcel.c36f364e.js.map
