var subscription = true;
var submitButton = document.querySelector("#submitButton");
var popup = document.querySelector(".popup");
function checkAccess() {
	var age = document.querySelector(".age").value;
	var name = document.querySelector('.name').value;
	if (age > 18) {
		if (subscription == true) {
			popup.innerHTML = name +  ", доступ разрешен";
			popup.style.display = "block";
			popup.style.background = "green";
		} 
		else {
		popup.innerHTML = name + ", у Вас нет подписки, доступ запрещен";
		popup.style.display = "block";
		popup.style.background = "red";
		}		
	} 
	else {
		popup.innerHTML = name + ", Вам еще не исполнилось 18 лет, доступ запрещен";
		popup.style.display = "block";
		popup.style.background = "red";
	}
};

submitButton.addEventListener("click", checkAccess);


