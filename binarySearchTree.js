class Node{
    constructor(value){
        this.left = null
        this.right = null
        this.value = value
    }
}
class BinarySearchTree {
    constructor(){
        this.root = null
    }

    insert(value){
        let newNode = new Node(value)
        if (this.root === null){
            this.root = newNode
        } else {
            let currentNode = this.root
            while (currentNode){
                if (currentNode.value < value){
                    if (!currentNode.right){
                        currentNode.right = newNode
                        return this
                    }
                    currentNode = currentNode.right
                } else {
                    if (!currentNode.left){
                        currentNode.left = newNode
                        return this
                    }
                    currentNode = currentNode.left
                }
            }
        }
    }
    lookup(value){
        let currentNode = this.root
        while (currentNode){
            if (currentNode.value > value){
                currentNode = currentNode.left
            } else if (currentNode.value < value){
                currentNode = currentNode.right
            } else if (currentNode.value === value) {
                return currentNode
            }
        }
        return null
    }
}

let myTree = new BinarySearchTree()
myTree.insert(10)
myTree.insert(5)
myTree.insert(30)


console.log(myTree.lookup(10))