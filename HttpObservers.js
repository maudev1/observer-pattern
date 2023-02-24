// Cria o objeto sujeito que será responsável por realizar a requisição AJAX
const Request = {
    url: '',
    data: '',
    method: '',
    observers: [],

    // Método que adiciona um observador à lista de observadores
    addObserver: function (observer) {
        this.observers.push(observer);
    },

    // Método que notifica todos os observadores registrados quando a requisição é bem sucedida
    notifyObservers: function (response) {
        this.observers.forEach(function (observer) {
            observer.notify(response);
        });
    },

    // Método que realiza a requisição AJAX
    makeRequest: async function () {
        try {
            let response = await fetch(this.url, {
                method: this.method,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: this.method != 'GET' ? JSON.stringify(this.data) : null
            });

            
            if (response.status === 200) {
                
                let result = await response.json();

                this.notifyObservers(result)
            }
        }
        catch (error) {
        
            console.log(error)

        }


    }
};

// Cria o objeto observador que irá aguardar a resposta da requisição AJAX
const ResponseHandler = {
    notify: function (response) {

        console.log(response)
        // Lógica para manipular a resposta da requisição AJAX
    }
};

// Registra o observador na lista de observadores do objeto sujeito
Request.addObserver(ResponseHandler);
