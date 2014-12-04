# trafini-client-js

*** Under Construction ***

Javascript(browser) client of trafini.

## Examples
For Browser:
```js

var cli = new Trafini("http://localhost/");
cli.setApiKey("your_api_key");

// Add new task
cli.add({
    priority: 5,
    tags: ["hogeuser", "hogeproject"],
    summary: "fix them",
    detail: "hogedetail",
},function(id) {
    console.log(id);
});

// Get tasks
// if first argument is null, you can get all tasks.
cli.show(["hogeuser"],function(tasks) {
    for(var i=0; i < tasks.length; i++) {
        var t = tasks[i];
        console.log(t.id + " : " + t.summary);
    }
});

// Finish a task
cli.finish("id_of_task", function() {
    console.log("Update finished.");
});

```
