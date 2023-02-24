## Observer Pattern com JavaScript

Este código demonstra a implementação do padrão Observer em JavaScript para realizar uma requisição AJAX e notificar os observadores quando a resposta for bem sucedida.

O padrão Observer é utilizado para definir uma relação de um-para-muitos entre objetos, onde um objeto, chamado sujeito, notifica uma lista de objetos dependentes, chamados observadores, sobre qualquer mudança em seu estado. Isso permite que os observadores possam ser notificados e atualizados quando um evento ocorre no sujeito.

No código, o objeto **Request** representa o sujeito e é responsável por realizar a requisição AJAX. Ele possui um método addObserver que permite adicionar um observador à lista de observadores registrados. O método **notifyObservers** é chamado quando a requisição é bem sucedida e notifica todos os observadores registrados com o objeto sujeito.

O objeto **ResponseHandler** representa o observador e é notificado quando a requisição é bem sucedida. Ele possui um método notify que é chamado pelo objeto sujeito quando a resposta é recebida.

A chamada de **Request.addObserver(ResponseHandler)** registra o objeto **ResponseHandler** na lista de observadores do objeto Request.

Para utilizar o código, basta definir a URL, dados e método de requisição do objeto **Request** e adicionar o objeto **ResponseHandler** como observador.

```

    Request.url = 'https://backend/endpoint'
 
    Request.data = {
        name: "Mauricio"
    };
    
    Request.method = 'POST'

    Request.makeRequest();

```
