class Saola {
  constructor(length = 0, weight = 0, age = 0, name = '', inZoo = true) {
    this.length = length
    this.weight = weight
    this.age = age
    this.name = name
    this.inZoo = inZoo
  }
  log() {
    console.log(this)
  }
}

export default Saola