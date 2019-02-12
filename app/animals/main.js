//Animals import
import Aardvark from './Aardvark.js'
import Baboon from './Baboon.js'
import Cat from './Cat.js'
import Dog from './Dog.js'
import Echinda from './Echidna.js'
import Falcon from './Falcon.js'
import Gecko from './Gecko.js'
import Horse from './Horse.js'
import Ibis from './Ibis.js'
import Jackal from './Jackal.js'
import Kakapo from './Kakapo.js'
import Lamprey from './Lamprey.js'
import Macaw from './Macaw.js'
import Narwhal from './Narwhal.js'
import Ocelot from './Ocelot.js'
import Pig from './Pig.js'
import Quoll from './Quoll.js'
import Raccoon from './Raccoon.js'
import Saola from './Saola.js'
import Tiger from './Tiger.js'
import Uakaris from './Uakaris.js'
import Viper from './Viper.js'
import Walrus from './Walrus.js'
import Xebra from './Xebra.js'
import Yak from './Yak.js'
import Zorse from './Zorse.js'

//length,weight,age,name
let aardvark = new Aardvark(2, 26, 7, 'Sandy')
let baboon = new Baboon(4, 232, 9, 'Big Butt')
let cat = new Cat(2, 14, 3, 'Kitty')
let dog = new Dog(3, 100, 4, 'Aroara')
let echinda = new Echinda(2, 30, 6, 'Nosie')
let falcon = new Falcon(3, 23, 2, 'Beacky')
let gecko = new Gecko(1, 1, 3, 'Green')
let horse = new Horse(7, 450, 6, 'Jeff')
let ibis = new Ibis(3, 145, 9, 'Kooly')
let jackal = new Jackal(4, 90, 5, 'Theif')
let kakapo = new Kakapo(1, 5, 99, 'Squack')
let lamprey = new Lamprey(2, 5, 2, 'Scary')
let macaw = new Macaw(2, 9, 45, 'Goon')
let narwhal = new Narwhal(8, 900, 22, 'Horny')
let ocelot = new Ocelot(3, 55, 7, 'Archer')
let pig = new Pig(3, 66, 3, 'Oink')
let quoll = new Quoll(5, 76, 8, 'Noidea')
let raccoon = new Raccoon(2, 25, 10, 'Trashpanda')
let saola = new Saola(3, 78, 55, 'Idk')
let tiger = new Tiger(7, 237, 13, 'Rawr')
let uakaris = new Uakaris(3, 65, 12, 'Hmm')
let viper = new Viper(2, 8, 6, 'SSSSSSSS')
let walrus = new Walrus(8, 555, 7, 'Mr.Tusk')
let xebra = new Xebra(7, 345, 14, 'Zebra.X')
let yak = new Yak(6, 455, 15, 'YakYak')
let zorse = new Zorse(9, 678, 6, 'Horse.z')

let animalArray = [aardvark, baboon, cat, dog, echinda, falcon, gecko, horse, ibis, jackal, kakapo, lamprey, macaw, narwhal, ocelot, pig, quoll, raccoon, saola, tiger, uakaris, viper, walrus, xebra, yak, zorse]

function myZoo(animalArray) {
  animalArray.map(animal => {
    if (animal.inZoo == true)
      console.log(`${animal.name}: In Zoo`)
    else {
      console.log(`${animal.name}: Not in Zoo`)
    }
  })
}

myZoo(animalArray)