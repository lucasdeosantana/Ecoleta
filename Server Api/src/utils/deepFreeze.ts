function deepFreeze(obj:Object) {

    // Recuperar os nomes de propriedade definidos em obj
    var propNames = Object.getOwnPropertyNames(obj);
  
    // Congelar as propriedades antes de congelar-se
    propNames.forEach(name => {
      var prop = obj[name];
      // Congele prop se for um objeto
      if (typeof prop == 'object' && prop !== null)
        deepFreeze(prop);
    });
    // Congele-se (não faz nada se já estiver congelado)
    return Object.freeze(obj);
}

export default deepFreeze