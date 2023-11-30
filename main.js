// program Title
document.getElementById("btn").addEventListener("click", order);

//Event func

function order() {
  let size = document.getElementById("sop").value;
  let topping1 = document.getElementById("topp1").value;
  let topping2 = document.getElementById("topp2").value;
  //output
  let pizzaO =
    `You have ordered a ${size} pizza with:` +
    `<ul> <li>${topping1} </li>
    <li> ${topping2} </li>
    </ul>` +
    `Thank you for ordering from <a href="https://www.pizza73.com/store/1/delivery" target=_blank >Pizza 73<a>, your pizza should be ready shortly.` +
    `<img width=300px src="img/cartoon-pizza-ai-generative-free-png.png">`;
  console.log(pizzaO);
  document.getElementById("otpt").innerHTML = pizzaO;
}
