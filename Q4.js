let arr = [{ txt: "", top: 0, right: 0 }];

const textContent = prompt("whats your text?");
arr[0].txt = textContent;

const topPixel = prompt("enter a num az distance to top (in pixels)");
arr[0].top = topPixel;

const rightPixel = prompt("enter a num az distance to right (in pixels)");
arr[0].right = rightPixel;

let span = document.getElementsByTagName("span")[0];
span.style.top = arr[0].top + "px";
span.style.right = arr[0].right + "px";
span.textContent = `${arr[0].txt}`;
