// [data, next] -> [data, next] -> [data, next] 
var NodeEl = /** @class */ (function () {
    function NodeEl(data, next) {
        this.data = data;
        this.next = next;
    }
    return NodeEl;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
    }
    LinkedList.prototype.append = function (data) {
        var node = new NodeEl(data);
        if (this.tail) {
            this.tail.next = node;
        }
        if (!this.head) {
            this.head = node;
        }
        this.tail = node;
    };
    LinkedList.prototype.prepend = function (data) {
        var node = new NodeEl(data, this.head);
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
    };
    LinkedList.prototype.toArray = function () {
        var current = this.head;
        var output = [];
        while (current) {
            output.push(current);
            current = current.next;
        }
        return output;
    };
    LinkedList.prototype.find = function (data) {
        if (!this.head) {
            return;
        }
        var current = this.head;
        while (current) {
            if (current.data = data) {
                return current;
            }
            current = current.next;
        }
    };
    LinkedList.prototype.insertAfter = function (after, data) {
        var found = this.find(after);
        if (!found) {
            return;
        }
        var node = new NodeEl(data, found.next);
        found.next = node;
    };
    LinkedList.prototype.remove = function (data) {
        if (!this.head) {
            return;
        }
        while (this.head && this.head.data === data) {
            this.head = this.head.next;
        }
        var current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
            }
            else {
                current = current.next;
            }
        }
        if (this.tail.data === data) {
            this.tail = current;
        }
    };
    return LinkedList;
}());
var list = new LinkedList();
list.append('One');
list.append('two');
list.prepend('Zero');
list.prepend('0');
// list.remove('0')
console.log(list.toArray());
