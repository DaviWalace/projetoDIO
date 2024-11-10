const tipo = ["Mago","Guerreiro","Monge","Ninja"]
var classeEscolhida = tipo[2]
class personagem{
    constructor(nome,idade,classe){
    this.nome = "Davi"
    this.idade = "21"
    this.classe = classeEscolhida
    }    
    atacar() {
       
        if(this.classe === 'Mago')
            {this.ataque = 'magia'}
        else if (this.classe === 'Guerreiro') 
            {this.ataque = 'espada'} 
        else if (this.classe === 'Monge') 
            {this.ataque = 'artes marciais'} 
        else if (this.classe === 'Ninja') 
            {this.ataque = 'shuriken'}
        console.log(`O ${this.classe} atacou usando ${this.ataque}`)
          }  
}

var dadosPersonagem = new personagem ('Davi', "21", classeEscolhida)
dadosPersonagem.atacar()