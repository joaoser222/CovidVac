<template>
  <page-data
    :id="id"
    :data="form"
    :columns="columns"
    @load-data="form = $event"
    @error="errors = $event"
  >
    <template #form>
      <div class="row">
        <div class="col-12 col-sm-6 q-pa-sm">
          <div class="q-pb-sm">Nome<span class="text-negative">*</span>:</div>
          <q-input dense outlined v-model="form.name" placeholder="Digite o Nome" />
          <p class="text-negative">{{$getError(errors,'name')}}</p>
        </div>
        <div class="col-12 col-sm-6 q-pa-sm">
          <div class="q-pb-sm">E-mail<span class="text-negative">*</span>:</div>
          <q-input dense outlined v-model="form.email" placeholder="Digite o E-mail" />
          <p class="text-negative">{{$getError(errors,'email')}}</p>
        </div>
        <div class="col-12 col-sm-6 q-pa-sm">
          <div class="q-pb-sm">Senha<span class="text-negative" v-if="id=='new'">*</span>:</div>
          <q-input type="password" dense outlined v-model="form.password" placeholder="Digite a Senha" />
          <p class="text-negative">{{$getError(errors,'password')}}</p>
        </div>
        <div class="col-12 col-sm-6 q-pa-sm">
          <div class="q-pb-sm">Confirme a senha<span class="text-negative" v-if="id=='new'">*</span>:</div>
          <q-input type="password" dense outlined v-model="form.password_confirmation" placeholder="Digite novamente a senha" />
          <p class="text-negative">{{$getError(errors,'password_confirmation')}}</p>
        </div>
        <div class="col-12 col-sm-6 q-pa-sm">
          <div class="q-pb-sm">Função<span class="text-negative">*</span>:</div>
          <q-select
            dense
            outlined
            v-model="form.role_id"
            placeholder="Digite a Função"
            option-label="name"
            option-value="id"
            emit-value
            map-options
            use-input
            fill-input
            hide-selected
            :options="roles.data"
            dropdown-icon="las la-angle-down"
            @filter="searchRoles"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey">
                  Nenhum item encontrado
                </q-item-section>
              </q-item>
            </template>
          </q-select>
          <p class="text-negative">{{$getError(errors,'vendor_id')}}</p>
        </div>
      </div>
    </template>
  </page-data>
</template>

<script>
import PageData from '../components/PageData';
export default {
  name: 'Users',
  props: ['id'],
  components:{
    PageData
  },
  data: ()=>({
    form:{},
    errors:{},
    roles:{
      search: '',
      data: []
    },
    columns: [
      {field: 'id',label: 'Cód.'},
      {field: 'name',label: 'Nome'},
      {field: 'email',label: 'E-mail'},
      {field: 'role_name',label: 'Função'},
      {field: 'created_at',label: 'Criado em'},
      {field: 'updated_at',label: 'Editado em'},
    ]
  }),
  methods:{
    getSearch(search=''){
      let _this = this;
      _this.$axios.get(`/admin/roles?page=1&search=${encodeURIComponent(search)}`)
      .then(({data})=>_this.roles.data = data.data)
      .catch((err)=>_this.$swal.fire('Erro!','Ocorreu um erro ao pesquisar items'));
    },
    getSelectedItem(id){
      let _this = this;
      if(id){
        _this.$axios.get(`/admin/roles/${id}`)
        .then(({data})=>_this.roles.data.push(data))
        .catch((err)=>_this.$swal.fire('Erro!','Ocorreu um erro ao pesquisar items'));
      }
    },
    searchRoles(val,update,abort){
      let _this = this;
      let search = val.toLowerCase();
      update(()=>{
        if(_this.roles.search==search) return;
        _this.roles.search = search;
        _this.getSearch(search);
      });
    },
  },
  mounted(){
     if(this.id){
      this.getSearch('');
      if(this.id!='new'){
        this.getSelectedItem(this.form.role_id);
      }
    }
  }
}
</script>
