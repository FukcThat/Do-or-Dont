class Collection {
  constructor(collectionName) {
    this.collection = [];
    this.collectionName = collectionName;
  }

  // Add todo
  addTask(taskItem) {
    this.collection.push(taskItem);
  }
  // Remove Todo
  // Get Todo Collection
}

module.exports = Collection;
