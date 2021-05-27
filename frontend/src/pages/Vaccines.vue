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
          <q-input dense outlined v-model="form.name" @input="form.name = $toUpper($event)" placeholder="Digite o Nome" />
          <p class="text-negative">{{$getError(errors,'name')}}</p>
        </div>
        <div class="col-12 col-sm-6 q-pa-sm">
          <div class="q-pb-sm">Quantidade de doses<span class="text-negative">*</span>:</div>
          <q-input dense outlined v-model="form.dose_per_use" v-maska="'###'" placeholder="Digite a Quantidade" />
          <p class="text-negative">{{$getError(errors,'dose_per_use')}}</p>
        </div>
        <div class="col-12 col-sm-6 q-pa-sm">
          <div class="q-pb-sm">Intervalo (dias)<span class="text-negative">*</span>:</div>
          <q-input dense outlined v-model="form.dose_days_range" v-maska="'###'" placeholder="Digite o intervalo" />
          <p class="text-negative">{{$getError(errors,'dose_days_range')}}</p>
        </div>
      </div>
    </template>
  </page-data>
</template>

<script>
import PageData from '../components/PageData';
export default {
  name: 'Vaccines',
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
      {field: 'dose_per_use',label: 'Qtde. de Doses'},
      {field: 'dose_days_range',label: 'Intervalo (dias)'},
      {field: 'created_at',label: 'Criado em'},
      {field: 'updated_at',label: 'Editado em'},
    ]
  })
}
</script>
