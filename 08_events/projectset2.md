# Projects related to events and time
[my project link](https://stackblitz.com/edit/dom-project-chaiaurcode-azsbc7vk?file=index.html)


## Project 5 solution

```javascript
const insert = document.querySelector('#insert')
window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class="color">
    <table>
      <tr>
        <th>key</th>
        <th>key code</th>
        <th>code</th>
      </tr>
      <tr>
        <td>${e.key === ' ' ? 'space' : e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
      </tr>
    </table>
  </div>
  `
})

```


## Project 6 solution

```javascript
const randomColor = function () {
  let hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  // console.log(color)
  return color;
};

let intervalID;
const startChangingColor = function () {
  if (!intervalID) {
    intervalID = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = function () {
  clearInterval(intervalID);
  intervalID = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

```