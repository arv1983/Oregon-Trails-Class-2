class Traveler {
    constructor(name) {
        this.name = name
        this.food = 1
        this.isHealth = true
    }
    hunt() {
        this.food += 2;
    }

    eat() {
        if (this.food > 0) {
            this.food -= 1
        } else {
            this.isHealth = false
        }
    }

}




//capacidade,passageiros array vazio
class Wagon {
    constructor(capacidade) {
        this.capacidade = capacidade;
        this.passageiros = [];
    }
    getAvailableSeatCount() {
        return this.capacidade - this.passageiros.length;
    }
    join(traveler) {

        if (this.capacidade - this.passageiros.length > 0) {
            this.passageiros.push(traveler)
        }


    }
    shouldQuarantine() {
        for (let i = 0; i < this.passageiros.length; i++) {
            return this.passageiros[i].isHealth;
        }
    }

    //Retorna o número total de comida de todos os ocupantes da carroça.
    totalFood() {
        for (let i = 0; i < this.passageiros.length; i++) {
            return this.passageiros[i].food;
        }
    }
}


//Aumenta a comida do viajante em 2.

/*Traveler.prototype.hunt = function() {

    this.food += 2;

}

//Consome 1 unidade da comida do viajante. Se o viajante não tiver comida para comer, ele deixa de estar saudável.
Traveler.prototype.eat = function() {
    if (this.food > 0) {
        this.food -= 1
    } else {
        this.isHealth = false
    }

}
*/

//Retorna o número de assentos vazios, determinado pela capacidade que foi estipulada quando a carroça foi criada comparado com o número de passageiros a bordo no momento.
/*
Wagon.prototype.getAvailableSeatCount = function() {
    return this.capacidade - this.passageiros.length;
}
*/

//Adicione o viajante à carroça se tiver espaço. Se a carroça já estiver cheia, não o adicione.
/*Wagon.prototype.join = function(traveler) {

    if (this.capacidade - this.passageiros.length > 0) {
        this.passageiros.push(traveler)
    }


}*/

//Retorna true se houver pelo menos uma pessoa não saudável na carroça. Retorna false se não houver.
// Wagon.prototype.shouldQuarantine = function() {
//     for (let i = 0; i < this.passageiros.length; i++) {
//         return this.passageiros[i].isHealth;
//     }
// }

// //Retorna o número total de comida de todos os ocupantes da carroça.
// Wagon.prototype.totalFood = function() {
//     for (let i = 0; i < this.passageiros.length; i++) {
//         return this.passageiros[i].food;
//     }
// }







/* codigo CONSTANT abaixo HAHAHAHAHA */

// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');

console.log(`${wagon.getAvailableSeatCount()} should be 2`);

wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);

wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);

henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)

console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);