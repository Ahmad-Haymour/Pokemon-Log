class Pokemon{
    constructor(name, health, magic, skills = []){
        this.name = name
        this.health = health
        this.magic = magic
        this.skills = skills
    }
    learnAttackSkill(skillObj){
        console.log( `${this.name} launched skill ${skillObj.name} successfully! ` );
        return this.skills.push(skillObj) 
    }
    showStatus(){
       console.log(`# ${this.name} status\n- Health: ${this.health}\n- Magic: ${this.magic}`);
    }
    attack(indexOfSkill, pokemon){
        if (this.magic < this.skills[indexOfSkill].magicAmount) {
         console.log('Not enough Magic, cannot launch attack!');
         }   
        else { 
            if( pokemon.health <= 0){
              return  console.log(`${pokemon.name} is already DEAD!!! The winner is: >>> 💥💥💥 ${this.name} 💥💥💥`);
// >>>>>>   if hero health <= 0 break all casses
            }
             else{
                console.log(`${pokemon.name} got ${this.skills[indexOfSkill].attackAmount} Damage!`)
            }
             return pokemon.health -= this.skills[indexOfSkill].attackAmount,' ' && ' ' , this.magic -= this.skills[indexOfSkill].magicAmount 
            }
    }
    magical( addMana ){
        console.log(`${this.name} got ${addMana} Magic back.`);
       return this.magic += addMana
    }
}
class AttackSkill{
    constructor( name, attackAmount, magicAmount ){
        this.name = name 
        this.attackAmount = attackAmount
        this.magicAmount = magicAmount
    }
}

let pikachu = new Pokemon("Pikachu", 120, 80)
let bulbasaur = new Pokemon("Bulbasaur", 95, 105)

let lightning = new AttackSkill("lightning", 40, 30);
let poisonSeed = new AttackSkill ("poison seed", 20, 20);

pikachu.learnAttackSkill(lightning)
pikachu.attack(0,bulbasaur)
console.log('-'.repeat(100)+'\n');
bulbasaur.learnAttackSkill(poisonSeed)
bulbasaur.attack(0,pikachu)
console.log('-'.repeat(100)+'\n');
pikachu.showStatus()
console.log('-'.repeat(100)+'\n');
bulbasaur.showStatus()
console.log('-'.repeat(100)+'\n');
pikachu.learnAttackSkill(lightning)
pikachu.attack(0,bulbasaur)
console.log('-'.repeat(100)+'\n');
pikachu.attack(0,bulbasaur)
console.log('-'.repeat(100)+'\n');
pikachu.magical(40) // >>>>>>>>>   Fix to (20) !!! why we see ( out of mana!!) instead of DEAD ?
console.log('-'.repeat(100)+'\n');
pikachu.learnAttackSkill(lightning)
pikachu.attack(0,bulbasaur)
console.log('-'.repeat(100)+'\n');
pikachu.attack(0,bulbasaur)
console.log('-'.repeat(100)+'\n');

// Bonus
console.log('\n0==))========> # Bonus # <========((==0');

let charmander = new Pokemon("Charmander", 200, 170)
let bulba = new Pokemon("Big Bulba", 220, 120)
let squirell = new Pokemon("Squirell", 110, 90 )

let fireBall = new AttackSkill("Fire ball", 70, 50);
let smash = new AttackSkill('Smash', 60, 45)
let waterfull = new AttackSkill ("Waterfull", 105, 75);
let smackDown = new AttackSkill("Smack Down", 120, 90);

console.log( `\ncxxx{}:;:;:;:;:;:;:;:;:;:;:;:;:;>  💥   ̿ ̿̿'̿̿\̵͇̿̿\=(-_-)=/̵͇̿̿/'̿̿ ̿ ̿    Fight >>> (҂-_• )r︻╦╤─ - - - 💥\n\n( 💥 ${charmander.name} 💥 ) > VS  < ( 💥 ${bulba.name} 💥 )\n`)
console.log('-'.repeat(100)+'\n');

charmander.learnAttackSkill(fireBall)
charmander.attack(0,bulba)
console.log('-'.repeat(100)+'\n');
bulba.learnAttackSkill(smash)
bulba.attack(0,charmander )
console.log('-'.repeat(100)+'\n');
charmander.learnAttackSkill(smackDown)
charmander.attack( 1, bulba)
console.log('-'.repeat(100)+'\n');
bulba.learnAttackSkill(waterfull)
bulba.attack( 1, charmander)
console.log('-'.repeat(100)+'\n');
charmander.showStatus()
console.log('-'.repeat(100)+'\n');
bulba.showStatus()
console.log('-'.repeat(100)+'\n');
charmander.attack(1, bulba)
charmander.magical(200)
charmander.attack(1, bulba)
console.log('-'.repeat(100)+'\n');
charmander.attack(0, bulba)