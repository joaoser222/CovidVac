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
      </div>
    </template>
  </page-data>
</template>

<script>
import PageData from '../components/PageData';
export default {
  name: 'Vendors',
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
      {field: 'created_at',label: 'Criado em'},
      {field: 'updated_at',label: 'Editado em'},
    ]
  })
}
</script>
