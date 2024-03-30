document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".question");

  questions.forEach((question) => {
    const title = question.querySelector(".question-title");
    const paragraph = question.querySelector("p");
    const img = title.querySelector("img");

    title.addEventListener("click", () => {
      // Close all other questions
      questions.forEach((q) => {
        if (q !== question) {
          q.querySelector("p").classList.add("hidden");
          q.querySelector("img").src = "./assets/images/icon-plus.svg";
        }
      });
      paragraph.classList.toggle("hidden");

      img.src = paragraph.classList.contains("hidden")
        ? "./assets/images/icon-plus.svg"
        : "./assets/images/icon-minus.svg";
    });
  });
});
