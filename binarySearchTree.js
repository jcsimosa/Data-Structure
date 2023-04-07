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
    remove(value){
        if (!this.root){
            return false
        }
        let currentNode = this.root
        let parentNode = null
        while (currentNode){
            if (value > currentNode.value){
                parentNode = currentNode
                currentNode = currentNode.right
            } else if (value < currentNode.value){
                parentNode = currentNode
                currentNode = currentNode.left
            } else if (value === currentNode.value){
                //first case
               if (currentNode.right === null){

                   if (parentNode === null){
                       this.root = currentNode.left
                   }
                   else {
                       if (parentNode.value > currentNode.value){
                           parentNode.left = currentNode.left
                       }
                       else if (parentNode.value < currentNode.value){
                           parentNode.right = currentNode.left
                       }
                   }
               }
               //second case
               else if (currentNode.right.left === null){
                    currentNode.right.left = currentNode.left
                    if (parentNode === null){
                        this.root = currentNode.right
                    } 
                    else {
                        if (currentNode.value > parentNode.value){
                            parentNode.right = currentNode.right
                        }
                        else if (currentNode.value < parentNode.value){
                            parentNode.left = currentNode.right
                        }
                    }
               } 
            else {
                let leftMost = currentNode.right.left
                let leftMostParent = currentNode.right
                while (leftMost.left !== null){
                    leftMost = leftMost.left
                    leftMostParent = leftMost
                }
                leftMostParent.left = leftMost.right
                leftMost.left = currentNode.left
                leftMost.right = leftMost.right
            }
            }
        }
    }
}

let myTree = new BinarySearchTree()
myTree.insert(15)
myTree.insert(23)
myTree.insert(6)
myTree.insert(4)
myTree.insert(71)
myTree.insert(50)
myTree.insert(5)
myTree.insert(7)


console.log(myTree.remove(6))