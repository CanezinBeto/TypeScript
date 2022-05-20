// Intersection types, unindo interfaces, atraves de herança
interface Character {
  name: string
}

interface Gum {
  type: string
  caliber: number
}

// Unindo duas interfaces com intersection types
type HumanWithGum = Character & Gum

const arnold: HumanWithGum = {
  name: 'Arnold',
  type: 'Shotgun',
  caliber: 12,
}

console.log(arnold)
