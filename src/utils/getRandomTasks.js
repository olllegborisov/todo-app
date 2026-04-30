function getRandomTasks(list, count = 4) {
    const shortTasks = list.filter(task => task.length < 20)
    const copy = [...shortTasks]
    const result = []
    while (result.length < count && copy.length > 0) {
        const index = Math.floor(Math.random() * copy.length)
        result.push(copy.splice(index, 1)[0])
    }

    return result
}

export default getRandomTasks