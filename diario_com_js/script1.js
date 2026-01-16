let userName = "";
let noteCount = 0;

function updateNoteCount() {
  document.getElementById("noteCount").innerText = `${noteCount} nota${noteCount !== 1 ? 's' : ''}`;
}

function startDiary() {
  const name = document.getElementById("userName").value.trim();
  if (name !== "") {
    userName = name;
    document.getElementById("nameForm").classList.add("d-none");
    document.getElementById("diaryPage").classList.remove("d-none");
    document.getElementById("greeting").innerText = `🌼 Olá, ${name}! Como foi seu dia hoje?`;
    document.getElementById("headerTitle").innerText = `My Daily`;
  }
}

function saveEntry() {
  const text = document.getElementById("entryText").value.trim();
  const date = document.getElementById("entryDate").value;
  if (text && date) {
    const article = document.createElement("article");
    article.className = "entry-display mb-4 p-3 border rounded shadow-sm bg-white";

    const dateElement = document.createElement("h4");
    dateElement.innerText = `📅 ${new Date(date).toLocaleDateString('pt-BR')}`;
    dateElement.className = "entry-date";

    const textElement = document.createElement("p");
    textElement.innerText = text;
    textElement.className = "mt-2";

    const editButton = document.createElement("button");
    editButton.className = "btn btn-outline-primary btn-sm me-2";
    editButton.innerText = "Editar";
    editButton.onclick = function () {
      document.getElementById("entryText").value = textElement.innerText;
      document.getElementById("entryDate").value = date;
      article.remove();
      noteCount--;
      updateNoteCount();
    };

    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-outline-danger btn-sm";
    deleteButton.innerText = "Excluir";
    deleteButton.onclick = function () {
      article.remove();
      noteCount--;
      updateNoteCount();
    };

    const btnGroup = document.createElement("div");
    btnGroup.className = "mt-3 d-flex justify-content-end";
    btnGroup.appendChild(editButton);
    btnGroup.appendChild(deleteButton);

    article.appendChild(dateElement);
    article.appendChild(textElement);
    article.appendChild(btnGroup);

    document.getElementById("entriesList").prepend(article);

    document.getElementById("entryText").value = "";
    document.getElementById("entryDate").value = "";

    noteCount++;
    updateNoteCount();
  }
}
