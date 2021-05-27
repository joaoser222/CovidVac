<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="las la-bars"
          aria-label="Menu"
          @click="drawer = !drawer"
          v-if="!$q.screen.gt.sm"
        />
        <q-toolbar-title>
          {{$route.meta.title}}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="drawer"
      show-if-above
      :mini="$q.screen.gt.sm ? icon_mode : false"
      :width="200"
      :breakpoint="$q.screen.md"
      :overlay="!$q.screen.gt.sm"
      :behavior="$q.screen.gt.sm?'':'mobile'"
      bordered
      dark
    >
      <q-list>
        <q-item>
          <q-item-section />
          <q-item-section avatar>
            <q-btn
              color="primary"
              flat
              round
              @click="icon_mode = !icon_mode"
              clickable
              :icon="icon_mode? 'icon-chevron-forward-outline' : 'icon-chevron-back-outline'"
              v-ripple
              v-if="$q.screen.gt.sm"
            >
            </q-btn>
          </q-item-section>
        </q-item>
        <q-item
        class="q-ma-sm rounded-borders"
        v-for="(item,index) in menus"
        clickable
        v-ripple
        :key="index"
        :to="{name: item.name}"
        >
          <q-item-section avatar>
            <q-icon color="primary" :name="item.meta.icon"/>
          </q-item-section>
          <q-item-section>{{item.meta.title}}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <transition
      appear
      enter-active-class="animated slideLeft"
     
      >
        <router-view />
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      drawer: null,
      icon_mode: false,
      permissions: []
    }
  },
  computed:{
    menus: function(){
      let _this = this;
      return this.$router.options.routes.find((item)=>item.name=='main').children.filter((item)=>{
        return (item.path && _this.permissions.indexOf(item.name)>-1) || item.name=='logout'
      });
    }
  },
  methods:{
    getMenus(){
      let _this = this;
      _this.$axios.get('/admin/menus')
      .then(({data})=>_this.permissions = data)
      .catch((err)=>_this.$swal.fire('Erro','Ocorreu um erro ao listar menus!','error'));
    }
  },
  mounted(){
    this.drawer = !this.$q.screen.lt.md;
    this.getMenus();
  }
}
</script>
