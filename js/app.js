const app = new Vue({
  el: '#app',
  data: {
    message: 'hello world',
    item: "example",
    list: [
      "foo", "bar", "baz"
    ]
  },
  methods: {
    addItem: function() {
      this.list.push(this.item)
    }
  }
})