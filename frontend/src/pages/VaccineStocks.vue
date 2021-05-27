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
          <div class="q-pb-sm">Vacina<span class="text-negative">*</span>:</div>
          <q-select
            dense
            outlined
            v-model="form.vaccine_id"
            placeholder="Digite a Vacina"
            option-label="name"
            option-value="id"
            emit-value
            map-options
            use-input
            fill-input
            hide-selected
            :options="vaccines.data"
            dropdown-icon="las la-angle-down"
            @filter="searchVaccines"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey">
                  Nenhum item encontrado
                </q-item-section>
              </q-item>
            </template>
          </q-select>
          <p class="text-negative">{{$getError(errors,'vaccine_id')}}</p>
        </div>
        <div class="col-12 col-sm-6 q-pa-sm">
          <div class="q-pb-sm">Fabricante<span class="text-negative">*</span>:</div>
          <q-select
            dense
            outlined
            v-model="form.vendor_id"
            placeholder="Digite o Fabricante"
            option-label="name"
            option-value="id"
            emit-value
            map-options
            use-input
            fill-input
            hide-selected
            :options="vendors.data"
            dropdown-icon="las la-angle-down"
            @filter="searchVendors"
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
        <div class="col-12 col-sm-6 q-pa-sm">
          <div class="q-pb-sm">Quantidade<span class="text-negative">*</span>:</div>
          <q-input dense outlined v-model="form.quantity" v-maska="$masks('number')" placeholder="Digite a Quantidade" />
          <p class="text-negative">{{$getError(errors,'quantity')}}</p>
        </div>
        <div class="col-12 col-sm-6 q-pa-sm">
          <div class="q-pb-sm">Lote<span class="text-negative">*</span>:</div>
          <q-input dense outlined v-model="form.batch" v-maska="$masks('batch')" placeholder="Digite o Lote" />
          <p class="text-negative">{{$getError(errors,'batch')}}</p>
        </div>
        <div class="col-12 col-sm-6 q-pa-sm">
          <div class="q-pb-sm">Validade:<span class="text-negative">*</span>:</div>
          <q-input dense outlined v-model="form.validity" v-maska="$masks('date')" placeholder="Digite a Validade">
            <template v-slot:append>
              <q-icon name="las la-calendar" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="form.validity" mask="DD/MM/YYYY">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <p class="text-negative">{{$getError(errors,'validity')}}</p>
        </div>
      </div>
    </template>
  </page-data>
</template>

<script>
import PageData from '../components/PageData';
export default {
  name: 'VaccineStocks',
  props: ['id'],
  components:{
    PageData
  },
  data: ()=>({
    form:{},
    errors:{},
    vaccines: {
      data: [],
      search: null
    },
    vendors: {
      data: [],
      search: null
    },
    columns: [
      {field: 'id',label: 'Cód.'},
      {field: 'vaccine_name',label: 'Vacina'},
      {field: 'vendor_name',label: 'Fabricante'},
      {field: 'quantity',label: 'Quantidade'},
      {field: 'batch',label: 'Lote'},
      {field: 'validity',label: 'Validade'},
      {field: 'created_at',label: 'Criado em'},
      {field: 'updated_at',label: 'Editado em'},
    ]
  }),
  methods:{
    getSearch(search='',entity){
      let _this = this;
      _this.$axios.get(`/admin/${entity}?page=1&search=${encodeURIComponent(search)}`)
      .then(({data})=>_this[entity].data = data.data)
      .catch((err)=>_this.$swal.fire('Erro!','Ocorreu um erro ao pesquisar items'));
    },
    getSelectedItem(id,entity){
      let _this = this;
      if(id){
        _this.$axios.get(`/admin/${entity}/${id}`)
        .then(({data})=>_this[entity].data.push(data))
        .catch((err)=>_this.$swal.fire('Erro!','Ocorreu um erro ao pesquisar items'));
      }
    },
    searchVaccines(val,update,abort){
      let _this = this;
      let search = val.toLowerCase();
      update(()=>{
        if(_this.vaccines.search==search) return;
        _this.vaccines.search = search;
        _this.getSearch(search,'vaccines');
      });
    },
    searchVendors(val,update,abort){
      let _this = this;
      let search = val.toLowerCase();
      update(()=>{
        if(_this.vendors.search==search) return;
        _this.vendors.search = search;
        _this.getSearch(search,'vendors');
      });
    },
  },
  mounted(){
    if(this.id){
      this.getSearch('','vaccines');
      this.getSearch('','vendors');
      if(this.id!='new'){
        this.getSelectedItem(this.form.vaccine_id,'vaccines');
        this.getSelectedItem(this.form.vendor_id,'vendors');
      }
    }
  }
}
</script>
