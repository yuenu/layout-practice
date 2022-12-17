


/**
 * 循環調用 Queue
 */
class actionLoop {

  #queue = {}

  /**
   * 
   * @param {*} param0 
   */
  addLoop({
    key,
    fn,
    durtion = 2000,
    immediatelyExecute = true
  }) {
    if(!key) throw new Error('No Enter key on actionLoop')
    if(!fn) throw new Error('No pass in function on actionLoop')
    if(this.#queue[key]) throw new Error('Already has the same key loop')
    if(immediatelyExecute) {
      fn()
    }
    const loop = setInterval(fn, durtion);
    this.#queue[key] = loop
  }

  removeLoop(key) {
    if(!this.#queue[key]) throw new Error('Remove Loop not matched key')
    clearInterval(this.#queue[key])
    delete this.#queue[key]
  }
}


const loop1 = {key: 'test1', fn: () => console.log('test1'), durtion: 2000}
const loop2 = {key: 'test2', fn: () => console.log('test2'), durtion: 3000}

const action = new actionLoop()
action.addLoop(loop1)
action.addLoop(loop2)

window.actionLoop = action