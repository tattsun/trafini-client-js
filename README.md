# trafini-client-js
Javascript(browser) client of trafini.

## Requirement
- jQuery 1.11.1 or 2.1.1

## Examples
For Browser:
```js

var cli = new Trafini("http://localhost/");
cli.setApiKey("your_api_key");

// Get tasks
// if first argument is null, you can get all tasks.
cli.show(["hogeuser"],function(tasks) {
    for(var i=0; i < tasks.length; i++) {
        var t = tasks[i];
        console.log(t.Id + " : " + t.Summary);
    }
});

// Get a detail of a task
cli.detail("id_of_task", function(t) {
    console.log(t.Id + " : " + t.Summary);
});

// Modify a task
cli.set("id_of_task", {
}, function() {
    console.log("ok");
});

// Add new task
cli.add({
    priority: 5,
    tags: ["hogeuser", "hogeproject"],
    summary: "fix them",
    detail: "hogedetail",
},function(id) {
    console.log(id);
});

// Finish a task
cli.finish("id_of_task", function() {
    console.log("Update finished.");
});

// Unfinish a task
cli.unfinish("id_of_task", function() {
    console.log("Update finished.");
});

```

## Object Schema

```js
task:
    {
        Id: string,
        Priority: number,
        Tags: string[],
        Summary: string,
        Detail: string,
        Finished: bool
    }
```
