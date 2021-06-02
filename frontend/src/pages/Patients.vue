<template>
  <page-data
    :id="id"
    :data="form"
    :columns="columns"
    @load-data="form = {...form,...$event}"
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
          <div class="q-pb-sm">E-mail<span class="text-negative">*</span>:</div>
          <q-input dense outlined v-model="form.email" placeholder="Digite o E-mail" />
          <p class="text-negative">{{$getError(errors,'email')}}</p>
        </div>
        <div class="col-12 col-sm-6 q-pa-sm">
          <div class="q-pb-sm">Telefone:<span class="text-negative">*</span>:</div>
          <q-input dense outlined v-model="form.phone" placeholder="(00) 00000-0000" v-maska="$masks('phone')"/>
          <p class="text-negative">{{$getError(errors,'phone')}}</p>
        </div>
        <div class="col-12 col-sm-6 q-pa-sm">
          <div class="q-pb-sm">Data de Nascimento:<span class="text-negative">*</span>:</div>
          <q-input dense outlined v-model="form.birth_date" v-maska="$masks('date')" placeholder="Digite a data">
            <template v-slot:append>
              <q-icon name="las la-calendar" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="form.birth_date" mask="DD/MM/YYYY">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <p class="text-negative">{{$getError(errors,'birth_date')}}</p>
        </div>
        <div class="col-12 col-sm-6 q-pa-sm">
          <div class="q-pb-sm">CPF<span class="text-negative">*</span>:</div>
          <q-input dense outlined v-model="form.cpf" placeholder="Digite o CPF" v-maska="$masks('cpf')"/>
          <p class="text-negative">{{$getError(errors,'cpf')}}</p>
        </div>
        <div class="col-12 col-sm-6 q-pa-sm">
          <div class="q-pb-sm">RG:<span class="text-negative">*</span>:</div>
          <q-input dense outlined v-model="form.rg" placeholder="Digite o RG" v-maska="$masks('rg')"/>
          <p class="text-negative">{{$getError(errors,'rg')}}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-h6">Endereço</div>
        <div class="col-12 col-sm-6 q-pa-sm">
          <div class="q-pb-sm">CEP<span class="text-negative">*</span>:</div>
          <q-input dense outlined v-model="form.cep" @blur="updateAddress()" placeholder="Digite o CEP" v-maska="$masks('cep')"/>
          <p class="text-negative">{{$getError(errors,'cep')}}</p>
        </div>
        <div class="col-12 col-sm-6 q-pa-sm">
          <div class="q-pb-sm">Rua<span class="text-negative">*</span>:</div>
          <q-input dense outlined v-model="form.street" placeholder="Digite a Rua" />
          <p class="text-negative">{{$getError(errors,'street')}}</p>
        </div>
        <div class="col-12 col-sm-6 q-pa-sm">
          <div class="q-pb-sm">Complemento:</div>
          <q-input dense outlined v-model="form.complement" placeholder="Digite o Complemento" />
          <p class="text-negative">{{$getError(errors,'complement')}}</p>
        </div>
        <div class="col-12 col-sm-6 q-pa-sm">
          <div class="q-pb-sm">Número<span class="text-negative">*</span>:</div>
          <q-input dense outlined v-model="form.number" placeholder="Digite o Número" />
          <p class="text-negative">{{$getError(errors,'number')}}</p>
        </div>
        <div class="col-12 col-sm-6 q-pa-sm">
          <div class="q-pb-sm">Bairro<span class="text-negative">*</span>:</div>
          <q-input dense outlined v-model="form.district" placeholder="Digite o Bairro" />
          <p class="text-negative">{{$getError(errors,'district')}}</p>
        </div>
        <div class="col-12 col-sm-6 q-pa-sm">
          <div class="q-pb-sm">Cidade<span class="text-negative">*</span>:</div>
          <q-input dense outlined v-model="form.city" placeholder="Digite a Cidade" />
          <p class="text-negative">{{$getError(errors,'city')}}</p>
        </div>
        <div class="col-12 col-sm-6 q-pa-sm">
          <div class="q-pb-sm">Estado<span class="text-negative">*</span>:</div>
          <q-select
            dense
            outlined
            v-model="form.state_id"
            placeholder="Digite o estado"
            emit-value
            map-options
            use-input
            hide-selected
            fill-input
            input-debounce="0"
            dropdown-icon="las la-angle-down"
            :options="states.data"
          >
          <p class="text-negative">{{$getError(errors,'state_id')}}</p>
        </div>
        
      </div>
    </template>
  </page-data>
</template>

<script>
import PageData from '../components/PageData';
export default {
  name: 'Patients',
  props: ['id'],
  components:{
    PageData
  },
  data: ()=>({
    form:{
      street: null,
      complement: null,
      number: null,
      city: null,
      state_id: null
    },
    errors:{},
    columns: [
      {field: 'id',label: 'Cód.'},
      {field: 'name',label: 'Nome'},
      {field: 'cpf',label: 'CPF'},
      {field: 'email',label: 'E-mail'},
      {field: 'phone',label: 'Telefone'},
      {field: 'created_at',label: 'Criado em'},
      {field: 'updated_at',label: 'Editado em'},
    ],
    states:{
      data:[],
      filtered:[]
    }
  }),
  methods:{
    getStates(){
      let _this = this;
      _this.$axios.get('admin/patients/states')
      .then(({data})=>_this.states.data = data)
      .catch((err)=>_this.$swal.fire('Erro','Ocorreu um erro ao listar estados!','error'));
    },
    updateAddress(){
      let _this = this;
      _this.$getCep(_this.form.cep).then((data)=>{
        _this.form.street = data.logradouro;
        _this.form.complement = data.complemento;
        _this.form.district = data.bairro;
        _this.form.city = data.localidade;
        _this.form.state_id = _this.states.data.find(item=>item.symbol==data.uf).value;
      });
    }
  },
  mounted(){
    this.getStates();
  }
}
</script>
