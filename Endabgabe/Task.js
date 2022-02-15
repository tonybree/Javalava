"use strict";
var KebapStore;
(function (KebapStore) {
    class Task extends KebapStore.TaskType {
        constructor(_taskType) {
            this.taskType = _taskType;
        }
    }
    KebapStore.Task = Task;
})(KebapStore || (KebapStore = {}));
//# sourceMappingURL=Task.js.map