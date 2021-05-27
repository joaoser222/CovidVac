<template>
  <q-layout view="lHh Lpr lFf" style="z-index: 1">
    <q-page-container>
      <q-page>
        <div class="q-pa-md row fullscreen items-center justify-center q-gutter-md">
          <q-card class="col-lg-4 col-md-6 col-sm-8">
            <div class="row">
              <div class="col-12 flex justify-center">
                <q-card elevation="0" class="q-pa-md bg-primary" style="margin-top: -40px;height: 80px; max-width: 80px;">
                  <img
                    src="../assets/icons/favicon-128x128.png"
                  >
                </q-card>
              </div>
            </div>
            <q-toolbar>
              <q-toolbar-title>
                <div class="text-weight-medium text-center">Fazer Login</div>
              </q-toolbar-title>
            </q-toolbar>
            <q-card-section>
              <div class="text-center text-subtitle2">Digite os seus dados para efetuar login no sistema</div>
              <div class="row">  
                <div class="col-12 q-pa-sm">
                  <div class="q-pb-sm">E-mail:</div>
                  <q-input dense standout="bg-primary" elevation="0" v-model="login.email" placeholder="Digite o Email" />
                </div> 
                <div class="col-12 q-pa-sm">
                  <div class="q-pb-sm">Senha:</div>
                  <q-input dense standout="bg-primary" type="password" elevation="0" v-model="login.password" placeholder="Digite a Senha" />
                </div> 
              </div>
            </q-card-section>
            <q-card-actions class="q-pa-md">
              <q-btn unelevated color="primary" @click="sendData()" label="Entrar" class="full-width"></q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'Login',
  data: ()=>({
    login:{
      email: null,
      password: null
    }
  }),
  methods:{
    sendData(){
      let _this = this;
      _this.$axios.post('/login',_this.login)
      .then((resp)=>{
        _this.$router.push('/admin');
      })
      .catch((err)=>_this.$swal.fire('Erro','Login inválido','error'));
    }
  }
}
</script>
