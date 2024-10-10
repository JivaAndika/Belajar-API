const question = document.getElementById("question");
const answer = document.getElementById("answer");
const apiUrl = "https://widipe.com/openai";
const submit = document.getElementById("submit");
const loader = document.getElementById("spinner");

question.addEventListener("input", () => {
  submit.disabled = question.value() === "";
});

async function sendReq() {
  loader.classList.remove("hidden");
  try {
    const url = `${apiUrl}?text=${question.value}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const data = await response.json();
    answer.innerHTML = data.result;
    question.value = "";
    submit.disabled = true;
    console.log(data);
  } catch (error) {
    console.log(error.message);
  } finally {
    loader.classList.add("hidden");
  }
}
