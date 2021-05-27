<template>
  <page-data
    :id="id"
    :data="form"
    :columns="columns"
    @load-data="loadData"
    @error="errors = $event"
  >
    <template #form>
      <div class="row">
        <div class="col-12 q-pa-sm">
          <div class="q-pb-sm">Nome do Paciente<span class="text-negative">*</span>:</div>
          <q-select
            dense
            outlined
            v-model="form.patient_id"
            placeholder="Digite o Nome"
            option-label="name"
            option-value="id"
            emit-value
            map-options
            use-input
            fill-input
            hide-selected
            :options="patients.data"
            dropdown-icon="las la-angle-down"
            @filter="searchPatients"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey">
                  Nenhum item encontrado
                </q-item-section>
              </q-item>
            </template>
          </q-select>
          <p class="text-negative">{{$getError(errors,'patient_id')}}</p>
        </div>
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
            :disabled="history.vendor_id"
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
          <div class="q-pb-sm">Lote<span class="text-negative">*</span>:</div>
          <q-select
            dense
            outlined
            v-model="form.batch"
            placeholder="Digite o Lote"
            use-input
            fill-input
            hide-selected
            :options="batchs"
            dropdown-icon="las la-angle-down"
            @filter="searchBatchs"
            :disabled="!Object.keys(stocks).length"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey">
                  Nenhum item encontrado
                </q-item-section>
              </q-item>
            </template>
          </q-select>
          <p class="text-negative">{{$getError(errors,'batch')}}</p>
        </div>
        <div class="col-12 col-sm-6 q-pa-sm">
          <div class="q-pb-sm">Validade<span class="text-negative">*</span>:</div>
          <q-select
            dense
            outlined
            v-model="form.validity"
            placeholder="Digite a Validade"
            use-input
            fill-input
            hide-selected
            :options="validities"
            dropdown-icon="las la-angle-down"
            @filter="searchValidities"
            :disabled="!form.batch"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey">
                  Nenhum item encontrado
                </q-item-section>
              </q-item>
            </template>
          </q-select>
          <p class="text-negative">{{$getError(errors,'validity')}}</p>
        </div>
      </div>
    </template>
  </page-data>
</template>

<script>
import PageData from '../components/PageData';
export default {
  name: 'PatientVaccinations',
  props: ['id'],
  components:{
    PageData
  },
  data: ()=>({
    form:{
      patient_id: null,
      vendor_id: null,
      vaccine_id: null
    },
    errors:{},
    patients:{
      data: [],
      search: null
    },
    vaccines: {
      data: [],
      search: null
    },
    vendors: {
      data: [],
      search: null
    },
    batchs:[],
    validities:[],
    stocks:{},
    history:{
      patient_id: null,
      vaccine_id: null,
      vendor_id: null,
      error: false
    },
    columns: [
      {field: 'id',label: 'Cód.'},
      {field: 'patient_name',label: 'Paciente'},
      {field: 'vaccine_name',label: 'Vacina'},
      {field: 'vendor_name',label: 'Fabricante'},
      {field: 'created_at',label: 'Data vacinação'}
    ]
  }),
  watch:{
    'form.patient_id': function(val){
      if(val) this.checkHistory();
    },
    'form.vaccine_id': function(val){
      if(val) this.checkHistory();
    },
    'form.vendor_id': {
      handler(newVal,oldVal){
        if(newVal) this.getStocks();
      },
      deep: true
    }
  },
  methods:{
    loadData(data){
      this.form = {...this.form,...data};
    },
    getSearch(search='',entity){
      let _this = this;
      _this.$axios.get(`/admin/${entity}?page=1&search=${encodeURIComponent(search)}`)
      .then(({data})=>_this[entity].data = data.data)
      .catch((err)=>_this.$swal.fire('Erro!','Ocorreu um erro ao pesquisar items','error'));
    },
    getSelectedItem(id,entity){
      let _this = this;
      if(id){
        _this.$axios.get(`/admin/${entity}/${id}`)
        .then(({data})=>_this[entity].data.push(data))
        .catch((err)=>_this.$swal.fire('Erro!','Ocorreu um erro ao pesquisar items','error'));
      }
    },
    searchPatients(val,update,abort){
      let _this = this;
      let search = val.toLowerCase();
      update(()=>{
        if(_this.vendors.search==search) return;
        _this.vendors.search = search;
        _this.getSearch(search,'patients');
      });
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
      if(_this.history.vendor_id){
        abort();
        return;
      }
      update(()=>{
        if(_this.vendors.search==search) return;
        _this.vendors.search = search;
        _this.getSearch(search,'vendors');
      });
    },
    searchBatchs(val,update,abort){
      let _this = this;
      let stocks = Object.keys(_this.stocks);

      if(!stocks.length || _this.history.error){
        abort();
        return;
      }

      let search = val.toLowerCase();
      update(()=>{
        _this.batchs = stocks.filter((item)=>item.toLowerCase().indexOf(search)>-1);
      });
    },
    searchValidities(val,update,abort){
      let _this = this;
      if(!(_this.form.hasOwnProperty('batch') && _this.form.batch)){
        abort();
        return;
      }else{
        let validities = _this.stocks[_this.form.batch].map((item)=>item.validity);
        let search = val.toLowerCase();
        update(()=>{
          _this.validities = validities.filter((item)=>item.toLowerCase().indexOf(search)>-1);
        });
      }
    },
    checkHistory(){
      let _this = this;
      if(_this.history.vaccine_id!=_this.form.vaccine_id &&
        _this.history.patient_id!=_this.form.patient_id &&
        _this.form.vaccine_id && _this.form.patient_id &&
        (_this.id=='new')
      ){
        let history = {
          vaccine_id: _this.form.vaccine_id,
          patient_id: _this.form.patient_id
        }
        _this.$axios.post(`/admin/patient-vaccinations/history`,history)
        .then(({data})=>{
          _this.history.vendor_id = data.vendor_id;
          _this.form.vendor_id = data.vendor_id;
        })
        .catch((err)=>{
          _this.form = {
            ..._this.form,
            patient_id: null,
            vaccine_id: null,
            vendor_id: null,
            batch: null,
            validity: null
          }
          if(err.response.hasOwnProperty('data') && err.response.data.hasOwnProperty('error')){
            _this.$swal.fire('Erro!',err.response.data.error,'error');
          }else{
            _this.$swal.fire('Erro!','Ocorreu um erro ao consultar o histórico do paciente','error');
          }
        });
      }
    },
    getStocks(){
      let _this = this;
      _this.$axios.get(`/admin/patient-vaccinations/stocks/${_this.form.vendor_id}`)
      .then(({data})=>{
        _this.stocks = data;
      })
      .catch((err)=>{
        _this.stocks = {};
        if(err.response.hasOwnProperty('data') && err.response.data.hasOwnProperty('error')){
          _this.$swal.fire('Erro!',err.response.data.error,'error');
        }else{
          _this.$swal.fire('Erro!','Ocorreu um erro ao consultar os estoques de vacina','error');
        }
      });
    }
  },
  mounted(){
    if(this.id){
      this.getSearch('','patients');
      this.getSearch('','vaccines');
      this.getSearch('','vendors');
      if(this.id!='new'){
        this.getSelectedItem(this.form.vendor_id,'patients');
        this.getSelectedItem(this.form.vaccine_id,'vaccines');
        this.getSelectedItem(this.form.vendor_id,'vendors');
      }
    }
  }
}
</script>
