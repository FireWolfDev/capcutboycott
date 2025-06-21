function toggleAccordion(el) {
  const content = el.nextElementSibling;
  content.style.display = content.style.display === "block" ? "none" : "block";
}

function toggleSub(el) {
  const details = el.nextElementSibling;
  details.style.display = details.style.display === "block" ? "none" : "block";
}
