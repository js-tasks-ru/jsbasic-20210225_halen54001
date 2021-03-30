function highlight(table) {
  let elemTr = table.querySelectorAll("tr");

  for (var i = 1; i < elemTr.length; i++) {
    let trDataAvailable = table.rows[i].cells[3].dataset.available;
    if (trDataAvailable == "true") {
      elemTr[i].classList.add("available");
    } else if (trDataAvailable == "false") {
      elemTr[i].classList.add("unavailable");
    } else if (!trDataAvailable) {
      elemTr[i].setAttribute("hidden", "hidden");
    }
  }

  for (var i = 1; i < elemTr.length; i++) {
    let tdGender = table.rows[i].cells[2].innerHTML;
    if (tdGender == "m") {
      elemTr[i].classList.add("male");
    } else if (tdGender == "f") {
      elemTr[i].classList.add("female");
    }
  }

  for (var i = 1; i < elemTr.length; i++) {
    let tdAge = table.rows[i].cells[1].innerHTML;
    if (tdAge < 18) {
      elemTr[i].setAttribute("style", "text-decoration: line-through");
    }
  }
}
