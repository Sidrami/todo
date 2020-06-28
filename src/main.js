// https://jp.vuejs.org/v2/examples/todomvc.html
var STORAGE_KEY = "todos-vuejs-demo";
var todoStorage = {
  fetch: function() {
    var todo = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    todo.forEach(function(todo, index) {
      todo.id = index;
    });
    todoStorage.uid = todo.length;
    return todo;
  },
  save: function(todo) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todo));
  },
};

const app = new Vue({
  el: "#app",
  data: {
    todo: [],
  },
  methods: {},
});
