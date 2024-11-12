let name = prompt("Введите имя:").trim().toLowerCase();

if (name) {
    let uniqueLetters = [...new Set(name)].sort();

    let secondLetterMessage = name.length > 1 
        ? `Вторая буква '${name[1]}' присутствует в имени.` 
        : "В имени нет второй буквы.";

    
    alert(`Имя: ${name.charAt(0).toUpperCase() + name.slice(1)}`);
    alert(`Буквы в имени: ${uniqueLetters.join(', ')}`);
    alert(secondLetterMessage);
} else {
    alert("Имя не было введено.");
}
