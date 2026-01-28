import PromptSync from "prompt-sync";
const prompt = PromptSync();

const queryUser = prompt(`Please enter your search query: `);
const searchString = queryUser.toLowerCase().trim();
const bookTitle = `The fundamentals of JavaScript`.toLowerCase();

function isBookApplicable() {
    if (searchString === bookTitle || bookTitle.includes(searchString)) {
        return true;
    } else {
        return false;
}
}

console.log(isBookApplicable());