<template>
  <div>
    <div class="row q-pa-sm" v-if="!id">
      <div class="col-12">
        <div class="row justify-end">
          <q-btn
            color="primary"
            unelevated
            @click="redirectItem()"
            label="Novo registro"
            icon="las la-plus"
            class="q-mr-sm q-my-sm"
          />
          <q-btn
            color="negative"
            unelevated
            @click="deleteItems()"
            label="Excluir registros"
            icon="las la-trash"
            class="q-my-sm"
            :disabled="!selected.length"
          />
        </div>
        <div class="row">
          <div class="col-12 q-pa-sm">
            <q-input dense outlined v-model="search" placeholder="Pesquisar..." @keypress.enter="getItems()">
              <template v-slot:append>
                <q-icon name="las la-search" @click="getItems()"/>
              </template>
            </q-input>
          </div>
        </div>
        <q-table
          :data="items.data"
          :columns="columns"
          row-key="id"
          selection="multiple"
          :selected.sync="selected"
          @row-dblclick="(evt, row, index)=>redirectItem(row.id)"
          hide-pagination
          :loading="loading_data"
        />
        <q-pagination
          v-model="items.current_page"
          color="primary"
          :max="items.last_page"
          :max-pages="6"
          boundary-numbers
          @input="getItems"
          class="justify-center q-my-sm"
        />
      </div>
    </div>
    <div class="row q-pa-md" v-else>
      <div class="col-12">
        <q-card class="full-width q-pa-md" style="min-height: 80vh;">
          <slot name="form"></slot>
          <div class="row" v-if="!hideFooter">
            <div class="col-12 flex justify-end">
            <q-btn
              color="primary"
              unelevated
              @click="saveItem()"
              label="Salvar registro"
              icon="las la-save"
              class="q-mr-sm q-my-sm"
            />
            <q-btn
              color="negative"
              unelevated
              @click="resetForm()"
              label="Limpar formulário"
              icon="las la-sync"
              class="q-my-sm"
            />
            </div>
          </div>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageData',
  props: ['id','data','columns','hide-footer'],
  data: ()=>({
    form: {},
    loading_data: false,
    search: '',
    items: {},
    selected:[],
    errors: {}
  }),
  computed:{
    endpoint: function(){
      let path = this.$route.fullPath.split('/');
      path.pop();
      return path.join('/');
    },
  },
  watch:{
    data: function(val){
      if(Object.keys(val).length){
        this.form = this.data;
      }
    }
  },
  methods:{
    getItems(page = 1){
      let _this = this;
      _this.loading_data = true;
      _this.$axios.get(`${_this.$route.fullPath}?page=${page}&search=${_this.search}`)
      .then(({data})=>_this.items = data)
      .catch((err)=>{
        if(err.response.status==403){
          _this.$swal.fire('Erro!','Você não tem permissão para esta operação!','error');
        }else{
          _this.$swal.fire('Erro!','Ocorreu um erro ao tentar listar registros!','error');
        }
      }).finally(()=>{
         _this.loading_data = false;
      });
    },
    getItem(){
      let _this = this;
      if(_this.id && _this.id!='new'){
        _this.$axios.get(_this.$route.fullPath)
        .then(({data})=>{
          _this.$emit('load-data',data);
          _this.form = data;
        })
        .catch((err)=>{
          if(err.response.status==403){
            _this.$swal.fire('Erro!','Você não tem permissão para esta operação!','error');
          }else{
            _this.$swal.fire('Erro!','Ocorreu um erro ao tentar exibir dados!','error');
          }
        });
      }
    },
    redirectItem(id = 'new'){
      location.href = `${location.origin}${this.$route.fullPath}/${id}`;
    },
    saveItem(){
      let _this = this;
      _this.$loadingMsg('Salvando alterações');
      let _request = (endpoint,action)=>{
        _this.$axios.post(endpoint,_this.form)
        .then(({data})=>{
          _this.$swal.fire('Sucesso',`Cadastro ${action} com sucesso!`,'success')
          .then((r)=>{
            location.href = `${location.origin}${_this.endpoint}`;
          });
        })
        .catch((err)=>{
          if(err.response.status==422 && err.response.hasOwnProperty('data')){
            _this.$swal.fire('Erro!','Ocorreram erros de validação','error');
            _this.$emit('error',err.response.data.errors);
          }else if(err.response.status==403){
            _this.$swal.fire('Erro!','Você não tem permissão para esta operação!','error');
          }else{
            _this.$swal.fire('Erro!','Ocorreu um erro ao tentar salvar os dados','error');
          }
        });
      }
      if(_this.id=='new'){
        _request(`${_this.endpoint}/store`,'criado');
      }else if(parseInt(_this.id)){
        _request(`${_this.endpoint}/update/${_this.id}`,'atualizado');
      }
    },
    deleteItems(){
      let _this = this;
      _this.$swal.fire({
        title: 'Excluir',
        icon: 'question',
        text: `Deseja remover os items selecionados?`,
        showCancelButton: true,
        confirmButtonText: `Sim`,
        cancelButtonText: `Cancelar`,
      }).then((result) => {
        if (result.isConfirmed) {
          _this.$loadingMsg('Removendo registros');
          _this.$axios.delete(`${_this.$route.fullPath}/delete`,{data: {items:_this.selected.map(item=>item.id)}})
          .then((resp)=>{
            _this.$swal.fire('Sucesso!','Items removidos com sucesso!','success');
            _this.selected = [];
            _this.getItems(_this.items.current_page);
          })
          .catch((err)=>{
            if(err.response.status==403){
              _this.$swal.fire('Erro!','Você não tem permissão para esta operação!','error');
            }else{
              _this.$swal.fire('Erro!','Ocorreu um erro ao tentar excluir os items!','error');
            }
          });
        }
      });
    },
    resetForm(){
      let _this = this;
      let data = {id: _this.form.id};
      _this.$emit('load-data',data);
      _this.form = data;
    }
  },
  mounted(){
    if(this.id && this.id!='new'){
      this.getItem();
    }else if(this.id!='new'){
      this.getItems();
    }
  }
}
</script>