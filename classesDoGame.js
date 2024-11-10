var tipo = 'Cavaleiro'
class personagem{
    constructor(nome,idade,classe){
    this.nome = "Davi"
    this.idade = "21"
    this.classe = tipo
    }    
    atacar() {
       
        if(this.classe === 'Mago')
            {this.ataque = 'magia'}
        else if (this.classe === 'Cavaleiro') 
            {this.ataque = 'espada'} 
        else if (this.classe === 'Monge') 
            {this.ataque = 'artes marciais'} 
        else if (this.classe === 'Ninja') 
            {this.ataque = 'shuriken'}
          }
        
    escrever(){
        console.log(`O ${this.classe} atacou usando ${this.ataque}`)
}
}
var dadosPersonagem = new personagem
dadosPersonagem.atacar()
dadosPersonagem.escrever();

