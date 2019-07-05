var task={};
task.title='My task';
task.description='Described task';
// console.log(task.description);
// task.toString=function() {
//     return (this.title);
// }
// console.log(task.toString());

// advance step
Object.defineProperty(task, 'toString', {
    value: function(){
        return (this.title);
    },
    writable:false,
    enumerable:false,
    configurable:false
});
// task.toString="kuku";
// console.log(task.toString());


// Inheritance
var urgentTask = Object.create(task); //This new object has all the properties of the task object i.e it is task.
Object.defineProperty(urgentTask, 'toString', {
    value: function(){
        return (this.title+ ' is urgent.');
    },
    writable:false,
    enumerable:false,
    configurable:false
});

console.log(urgentTask.toString());
console.log(urgentTask.description);
