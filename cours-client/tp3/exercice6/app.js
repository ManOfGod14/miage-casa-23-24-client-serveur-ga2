const listElt = document.querySelector("#list");

const deleteButtons = document.querySelectorAll(".delete");
// console.log(deleteButtons);
deleteButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    btn.parentNode.remove();
  });
});
