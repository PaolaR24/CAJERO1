class Cuenta
{
    #Saldo

    constructor()
    {
        this.#Saldo = 0.0;
    } 
    depositar (valorDeposito) 
    {
        this.#Saldo = this.#Saldo + valorDeposito
        return;
    }
    Consultarsaldo()
    {
        return(This.#Saldo);
    }
    Retirar (ValorRetiro)
    {
        let Respuesta;
        if (this.#Saldo>= ValorRetiro);
        {
            this.#Saldo = this.#Saldo -ValorRetiro;
            respuesta = true
        }
        Else       
        {
            Respuesta = false
        }
        return Respuesta
    }
}