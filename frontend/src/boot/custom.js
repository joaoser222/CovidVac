import Vue from 'vue';
Vue.prototype.$getError = (entity,field)=>{ 
  return entity.hasOwnProperty(field)? entity[field].join('\n') : '';
};
Vue.prototype.$loadingMsg = (msg = 'Carregando')=>{
  Vue.prototype.$swal.fire({
    title: msg,
    didOpen: () => Vue.prototype.$swal.showLoading()
  });
}
Vue.prototype.$getCep = (number)=>{
  return new Promise((resolve, reject) => {
    if (`${number}`.length == 9) {
      Vue.prototype.$swal.fire({
        title: 'Consultar CEP',
        text: 'Deseja consultar o CEP digitado? isso irá preencher os dados de endereço atuais',
        icon: 'question',
        showCancelButton: true,
        cancelButtonText: 'Não',
        confirmButtonText: 'Sim',
        allowOutsideClick: false
      }).then((r) => {
        if (r.isConfirmed) {
          Vue.prototype.$loadingMsg('Consultando CEP');
          Vue.prototype.$axios.get(`https://viacep.com.br/ws/${number}/json/`)
            .then(({data}) => {
              Vue.prototype.$swal.fire('Sucesso!', 'Dados de endereço atualizados com sucesso!', 'success');
              resolve(data);
            })
            .catch((err) => {
              Vue.prototype.$swal.fire('Erro!', err.message, 'error');
              return resolve({});
            });
        } else {
          return resolve({});
        }
      });
    } else {
      Vue.prototype.$swal.fire('Erro!', 'A quantidade de dígitos é inválida!', 'error');
      return resolve({});
    }
  })
};

Vue.prototype.$masks = (name)=>{
  let masks = {
    cpf: '###.###.###-##',
    date: '##/##/####',
    cep: '#####-###',
    phone: '(##) #####-####',
    rg: '###########',
    number: '#*',
    batch: { mask: 'Z*', tokens: { 'Z': { pattern: /[a-zA-Z0-9]/,uppercase: true }}} 
  };
  return masks[name];
}

Vue.prototype.$toUpper = (val)=>{
  return `${val}`.toUpperCase();
}

Vue.prototype.$toLower = (val)=>{
  return `${val}`.toLowerCase();
}