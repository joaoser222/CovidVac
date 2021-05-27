<template>
  <q-layout view="lHh Lpr lFf" style="z-index: 1">
    <q-page-container>
      <q-page>
        <div class="q-pa-md row fullscreen items-center justify-center q-gutter-md">
          <q-card class="bg-secondary col-lg-4 col-sm-6 ">
            <q-toolbar>
              <q-toolbar-title>
                Entrar
              </q-toolbar-title>
            </q-toolbar>
            <q-card-section class="text-white">
              <div class="row">  
                <div class="col-12 q-pa-xs">
                  <q-input standout="bg-primary text-white" dense v-model="login.email"  label="Email" />
                </div>   
                <div class="col-12 q-pa-xs">
                  <q-input standout="bg-primary text-white" type="password" dense v-model="login.password"  label="Senha" />
                </div>
              </div>
            </q-card-section>
            <q-card-actions align="right">
              <q-btn flat @click="sendData()" label="Entrar"></q-btn>
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
