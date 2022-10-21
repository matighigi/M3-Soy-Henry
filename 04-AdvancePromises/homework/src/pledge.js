'use strict';
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:

class $Promise {
   constructor(executor, state = "pending", value = undefined) {
    if(typeof executor !== "function") {
        throw new TypeError('executor function')
    }

    this._state = state;
    this._value = value
    this._handlerGroups = [];

    executor(
        (data) => this._internalResolve(data),
        (data) => this._internalReject(data)
    )
   }

   static resolve(value) {
    if (value instanceof $Promise) return value;
    let promise = new $Promise(() => {});
    if (promise._state === "pending") {
      promise._internalResolve(value);
    }
    return promise;
  }
    // static all(values) {
    //   if (values.some((ele) => ele instanceof $Promise)) {
    //     return values.reduce((accumulator, value) => {
    //       return accumulator.then((results) => {
    //         return $Promise.resolve(value).then((result) => {
    //           return [...results, result];
    //         });
    //       });
    //     }, Promise.resolve([]));
    //   } else return new $Promise(() => {}, "fulfilled", values);
    // }
}

$Promise.prototype._internalResolve = function (value){
    if(this._state === 'pending') {
        this._state = 'fulfilled'
        this._value = value
        this._callHandlers(this._value);
    }   
}
$Promise.prototype._internalReject = function (reason){
    if(this._state === 'pending') {
        this._state = 'rejected'
        this._value = reason
        this._callHandlers(this._value);
    }
}
$Promise.prototype.then = function (successCb, errorCb) {
   typeof successCb !== 'function' ? (successCb = undefined) : false
   typeof errorCb !== 'function' ? (errorCb = undefined) : false

   let downstreamPromise = new $Promise(() => {})
   this._handlerGroups.push({
    successCb,
    errorCb,
    downstreamPromise
   })
   if (this._state !== "pending"){ 
        this._callHandlers(this._value);
    }
   return downstreamPromise;
}

$Promise.prototype.catch = function(errorCb){
    return this.then(null, errorCb) // retornamos la promesa .then, pasando el primer parametro(resolve) como null, y pasandole el error como segundo parametro
}

$Promise.prototype._callHandlers = function(value){

    while(this._handlerGroups.length > 0) {

        let currentHandler = this._handlerGroups.shift()

        if(this._state === 'fulfilled') {

            if(!currentHandler.successCb) {
                currentHandler.downstreamPromise._internalResolve(value)
            }

            else{
                try {
                    let result = currentHandler.successCb(value)
                    if(result instanceof $Promise) {
                        result.then(
                            (value) => currentHandler.downstreamPromise._internalResolve(value),
                            (error) => currentHandler.downstreamPromise._internalReject(error)
                        )
                    }
                    else {
                        currentHandler.downstreamPromise._internalResolve(result)
                    }
                }
                catch (error) {
                    currentHandler.downstreamPromise._internalReject(error)
                }
            }
        }

        if(this._state === 'rejected') {

            if(!currentHandler.errorCb) {
                currentHandler.downstreamPromise._internalReject(value)
            }

            else {
                try {
                    let result = currentHandler.errorCb(value)
                    if(result instanceof $Promise) {
                        result.then(
                            (value) => currentHandler.downstreamPromise._internalResolve(value),
                            (error) => currentHandler.downstreamPromise._internalReject(error)
                        )
                    }
                    else{
                        currentHandler.downstreamPromise._internalResolve(result)
                    }
                }
                catch (error) {
                    currentHandler.downstreamPromise._internalReject(error)
                }
            }
        }
    }
}




module.exports = $Promise;
/*-------------------------------------------------------
El spec fue diseñado para funcionar con Test'Em, por lo tanto no necesitamos
realmente usar module.exports. Pero aquí está para referencia:

module.exports = $Promise;

Entonces en proyectos Node podemos esribir cosas como estas:

var Promise = require('pledge');
…
var promise = new Promise(function (resolve, reject) { … });
--------------------------------------------------------*/
