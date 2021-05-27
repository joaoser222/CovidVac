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
    columns: [
      {field: 'id',label: 'Cód.'},
      {field: 'name',label: 'Nome'},
      {field: 'email',label: 'E-mail'},
      {field: 'role_name',label: 'Função'},
      {field: 'created_at',label: 'Criado em'},
      {field: 'updated_at',label: 'Editado em'},
    ]
  })
}
</script>
