// 講義内容
let userInput = prompt('コマンドを入力してください(new, list, delete, quit)');
const todoList = ['水やりをする', '掃除をする'];

while(userInput !== 'quit' && userInput !== 'q') { //quitまたはqが入力されるまで続ける
    
    if(userInput === 'list') { //userがlistを入力すると****が表示
        console.log('*******************');//視覚敵に見えやすく
        for(let i = 0; i < todoList.length; i++) {
            console.log(`${i}: ${todoList[i]}`);
        }
        console.log('*******************');//視覚敵に見えやすく

    } else if (userInput === 'new') { //userがnewを入れた場合
        const newTodoList = prompt('新たなリストを入力してください。');
        todoList.push(newTodoList); //todoListに新たなリストを追加する
        console.log(`${newTodoList}を追加しました。`);

    } else if (userInput === 'delete') {
        const deleteIndex = parseInt(prompt('削除するリストを入力してください。'));
        if(!Number.isNaN(deleteIndex)) {
            const deleted = todoList.splice(deleteIndex, 1)
            console.log(`${deleted[0]}を削除しました。`);
        } else {
            console.log('有効な値を入力してください。');
        }
    }
    userInput = prompt('コマンドを入力してください(new, list, delete, quit)');
}