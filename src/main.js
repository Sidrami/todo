/* eslint-disable no-unused-vars */
import Vue from "vue";

// https://jp.vuejs.org/v2/examples/todomvc.html
var STORAGE_KEY = "todo";
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

new Vue({
  el: "#app",

  data: {
    todo: [],
  },

  methods: {
    doAdd: function(event, value) {
      var comment = this.$refs.comment;
      if (!comment.value.length) {
        return;
      }
      this.todo.push({
        id: todoStorage.uid++,
        comment: comment.value,
        state: 0,
      });
      comment.value = "";
    },

    watch: {
      todo: {
        handler: function(todo) {
          todoStorage.save(todo);
        },
        deep: true,
      },
    },

    created() {
      this.todo = todoStorage.fetch();
    },
  },
});
