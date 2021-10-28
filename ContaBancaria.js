class ContaBancaria{
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    
    set saldo(saldo){
        this._saldo = saldo;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor){
        if(valor > this._saldo){
            console.log("Você não pode sacar mais do que já possui em sua conta");
        }
        this._saldo = this._saldo - valor;
        return valor;
    }

    depositar(valor){
        this._saldo += valor;
        return this._saldo;
    }
}


class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero, saldo);
        this.tipo = 'poupança';
        
    } 
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'universitária';  
    }
    
    sacar(valor){
        if(valor > 500){
            return 'Operação negada';
        }

        this._saldo = this._saldo - valor;
    }
}

