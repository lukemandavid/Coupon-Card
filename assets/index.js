let cpnId = document.querySelector("#cpn-id");
let cpnCode = document.querySelector("#cpn-code");

cpnCode.onclick = function () {
  navigator.clipboard.writeText(cpnId.innerHTML);
  cpnCode.innerHTML = "COPIED";
  setTimeout(function () {
    cpnCode.innerHTML = "COPY CODE";
  }, 3000);
};
