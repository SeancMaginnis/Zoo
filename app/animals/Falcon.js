class Falcon {
  constructor(length = 0, weight = 0, age = 0, name = '') {
    this.length = length
    this.weight = weight
    this.age = age
    this.name = name
  }
  log() {
    console.log(this)
  }
}

export default Falcon