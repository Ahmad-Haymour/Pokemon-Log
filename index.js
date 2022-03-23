
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
       return `# ${this.name} status\n- Health: ${this.health}\n- Magic: ${this.magic}`
    }
    attack(indexOfSkill, pokemon){
        if (this.magic < this.skills[indexOfSkill].magicAmount) {
         console.log('Not enough Magic, cannot launch attack!');
         }   
        else { 

            if( pokemon.health <= 0){
                console.log(`${pokemon.name} is Killed!!!`);
            } else{
                console.log(`${pokemon.name} got ${pokemon.skills[indexOfSkill].attackAmount+20} Damage!`);
            }
             return pokemon.health -= this.skills[indexOfSkill].attackAmount,' ' &&' ' , this.magic -= this.skills[indexOfSkill].magicAmount
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
let pikachu = new Pokemon("Pikatchu", 120, 80)
let bulbasaur = new Pokemon("Bulbasaur", 95, 105)

let lightning = new AttackSkill("lightning", 40, 30);
let poisonSeed = new AttackSkill ("poison seed", 20, 20);

pikachu.learnAttackSkill(lightning)
console.log('-'.repeat(100)+'\n');
bulbasaur.learnAttackSkill(poisonSeed)
console.log(pikachu.showStatus());
console.log('-'.repeat(100)+'\n');
console.log(bulbasaur.showStatus());
console.log('-'.repeat(100)+'\n');
pikachu.learnAttackSkill(lightning)
console.log('-'.repeat(100)+'\n');
pikachu.magical(20)
console.log('-'.repeat(100)+'\n');
pikachu.learnAttackSkill(lightning)
console.log('-'.repeat(100)+'\n');
pikachu.attack(0, bulbasaur)
pikachu.attack(0, bulbasaur)
pikachu.attack(0, bulbasaur)
pikachu.attack(0, bulbasaur)
pikachu.magical(20)
pikachu.attack(0, bulbasaur)