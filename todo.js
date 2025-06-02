const todoList = []; //空の配列を用意

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("addBtn").addEventListener("click", addTodo);
}); //html内のbtn要素を取得しaddTodoに追加

function addTodo() {
  const input = document.getElementById("todoInput"); //htmlにあるinputを取得
  const newTodo = input.value.trim(); //両端の空白を除く

  //   入力が空の場合
  if (newTodo === "") {
    alert("タスクを入力してください。");
    return;
  }

  // 英数字が含まれている場合の処理
  const hasAlphaNumeric = /[a-zA-Z0-9]/.test(newTodo);
  if (hasAlphaNumeric) {
    alert("英字や数字を含むToDoは追加できません。");
    return;
  }

  // 重複チェック
  if (todoList.includes(newTodo)) {
    alert("同じタスクが既に追加されています。");
    return;
  }

  // 追加処理
  todoList.push(newTodo);
  input.value = "";
  updateList();
}
//削除ボタン
function deleteTodo(index) {
  todoList.splice(index, 1);
  updateList();
}

function updateList() {
  const listElement = document.getElementById("todoList");
  listElement.innerHTML = "";

  todoList.forEach((todo, index) => {
    const li = document.createElement("li");

    // テキスト設定
    li.textContent = `${index + 1}. ${todo}`;

    const btn = document.createElement("button");
    btn.textContent = "削除する";

    btn.addEventListener("click", () => {
      deleteTodo(index);
    });

    li.appendChild(btn);

    listElement.appendChild(li);
  });
}
