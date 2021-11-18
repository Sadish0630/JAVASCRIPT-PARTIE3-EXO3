let ul = document.createElement("ul")
let languages = ["html", "css", "javascript", "php", "mysql", "c++", "ruby", "python"];
let li = document.createElement("li")
for (i = 0; i < languages.length; i++) {
    //lenght compte le nombre de ligne et i veut dire incrément
    let li = document.createElement("li")
    li.innerText = languages[i]
    ul.append(li)
}
document.body.append(ul)
