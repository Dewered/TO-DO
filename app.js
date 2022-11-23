let tasks = [
  {
    _id: "5d2ca9e2e03d40b326596aa7",
    completed: true,
    body: "Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n",
    title: "Eu ea incididunt sunt consectetur fugiat non.",
  },
  {
    _id: "5d2ca9e29c8a94095c1288e0",
    completed: false,
    body: "Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n",
    title:
      "Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.",
  },
  {
    _id: "5d2ca9e2e03d40b3232496aa7",
    completed: true,
    body: "Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n",
    title: "Eu ea incididunt sunt consectetur fugiat non.",
  },
  {
    _id: "5d2ca9e29c8a94095564788e0",
    completed: false,
    body: "Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n",
    title:
      "Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.",
  },
];

const list = document.getElementById("list");
list.addEventListener("click", tasksListListener);

const createTaskForm = document.getElementById("formAddTask");
createTaskForm.addEventListener("submit", createTask);

//Переборка и добавление в html значений из объектов в массиве tasls
(function (arrOfTasks) {
  arrOfTasks.forEach((task) => {
    addTask(task);
  });
})(tasks);

function addTask(task) {
  let listElement = `
    <li class="list-group-item d-flex align-items-center flex-wrap mt-2">
      <span>${task.title}</span>
      <button class="btn btn-danger ml-auto delete-btn" data-remove="${task._id}">Delete</button>
      <p class="mt-2 w-100">
      ${task.body}
      </p>
      <div class="switch" data-change="${task._id}" >
          <label for="${task._id}">
            <input type="checkbox" id="${task._id}">
            <span class="indicator"></span>
            <span class="label">
              Switch
            </span>
          </label>
        </div>
    </li>
  `;
  list.insertAdjacentHTML("afterbegin", listElement);
}

function createTask(e) {
  e.preventDefault();
  let title = document.getElementById("title"),
  body = document.getElementById("body");
  
  if (title.value.trim() && body.value.trim()) {
    let task = {
      _id: Math.random(),
      completed: false,
      body: body.value,
      title: title.value,
    };
    tasks.push(task);
    addTask(task);
    title.value = "";
    body.value = "";
  }
}

function deleteTask(e, id) {
  tasks = tasks.filter((task) => task._id != id);
  e.target.closest(".list-group-item").remove();
}
  
function changeTaskStatus(e, changeId) {
  const check = document.getElementById(changeId);
  if (check.checked == true) {
    e.target.closest(".list-group-item").style.backgroundColor = "green";
  } else {
    e.target.closest(".list-group-item").style.backgroundColor = "white";
  }
}

function tasksListListener(e) {
  const removeId = e.target.dataset.remove;
  const changeId = e.target.closest(".switch")?.dataset?.change;

  if (removeId) {
    deleteTask(e, removeId);
  }
  if (changeId) {
    changeTaskStatus(e, changeId);
  }
}