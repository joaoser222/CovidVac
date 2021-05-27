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
        <div class="col-12 q-pa-sm">
          <div class="q-pb-sm">Nome<span class="text-negative">*</span>:</div>
          <q-input dense outlined v-model="form.name" placeholder="Digite o Nome" />
          <p class="text-negative">{{$getError(errors,'name')}}</p>
        </div>
        <div class="col-12 q-pa-sm">
          <div class="q-pb-sm">Descrição<span class="text-negative">*</span>:</div>
          <q-input dense outlined v-model="form.description" type="textarea" />
          <p class="text-negative">{{$getError(errors,'description')}}</p>
        </div>
        <div class="col-12 q-pa-sm">
          <div class="q-pb-sm">Permissões<span class="text-negative">*</span>:</div>
          <div class="row">
            <div class="col-12" v-for="(item,index) in permissions.all" :key="index">
              <q-checkbox :label="item.description" :value="isChecked(item.name)" @input="changeStatus(item.name)"/>
            </div>
          </div>
        </div>
      </div>
    </template>
  </page-data>
</template>

<script>
import PageData from '../components/PageData';
export default {
  name: 'Roles',
  props: ['id'],
  components:{
    PageData
  },
  data: ()=>({
    form:{},
    errors:{},
    permissions: {
      all:[],
      selected:[]
    },
    columns: [
      {field: 'id',label: 'Cód.'},
      {field: 'name',label: 'Nome'},
      {field: 'description',label: 'Descrição'},
      {field: 'created_at',label: 'Criado em'},
      {field: 'updated_at',label: 'Editado em'},
    ]
  }),
  watch:{
    'permissions.selected': {
      deep: true,
      handler(val){
        if(val){
          this.form.permissions = val.map((item)=>item.id);
        }
      }
    }
  },
  methods:{
    getPermissions(){
      let _this = this;
      _this.$axios.get(`/admin/roles/permissions/${_this.id!='new'?_this.id:''}`)
      .then(({data})=>_this.permissions = data)
      .catch((err)=>_this.$swal.fire('Erro!','Ocorreu um erro ao listar permissões','error'));
    },
    isChecked(name){
      let _this = this;
      return _this.permissions.selected.find(item=>item.name==name)!=null;
    },
    changeStatus(name){
      let _this = this;
      let permission = _this.permissions.selected.find(item=>item.name==name);
      if(!permission){
        let _permission = _this.permissions.all.find(item=>item.name==name);
        _this.permissions.selected.push(_permission);
      }else{
        _this.permissions.selected = _this.permissions.selected.filter(item=>item.name!=name);
      }
    }
  },
  mounted(){
    if(this.id){
      this.getPermissions();
    }
  }
}
</script>
