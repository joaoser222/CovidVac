(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"013f":function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("q-layout",{staticStyle:{"z-index":"1"},attrs:{view:"lHh Lpr lFf"}},[i("q-page-container",[i("q-page",[i("div",{staticClass:"q-pa-md row fullscreen items-center justify-center q-gutter-md"},[i("q-card",{staticClass:"col-lg-4 col-md-6 col-sm-8"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 flex justify-center"},[i("q-card",{staticClass:"q-pa-md bg-primary",staticStyle:{"margin-top":"-40px",height:"80px","max-width":"80px"},attrs:{elevation:"0"}},[i("img",{attrs:{src:t("5596")}})])],1)]),i("q-toolbar",[i("q-toolbar-title",[i("div",{staticClass:"text-weight-medium text-center"},[e._v("Fazer Login")])])],1),i("q-card-section",[i("div",{staticClass:"text-center text-subtitle2"},[e._v("Digite os seus dados para efetuar login no sistema")]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 q-pa-sm"},[i("div",{staticClass:"q-pb-sm"},[e._v("E-mail:")]),i("q-input",{attrs:{dense:"",standout:"bg-primary",elevation:"0",placeholder:"Digite o Email"},model:{value:e.login.email,callback:function(a){e.$set(e.login,"email",a)},expression:"login.email"}})],1),i("div",{staticClass:"col-12 q-pa-sm"},[i("div",{staticClass:"q-pb-sm"},[e._v("Senha:")]),i("q-input",{attrs:{dense:"",standout:"bg-primary",type:"password",elevation:"0",placeholder:"Digite a Senha"},model:{value:e.login.password,callback:function(a){e.$set(e.login,"password",a)},expression:"login.password"}})],1)])]),i("q-card-actions",{staticClass:"q-pa-md"},[i("q-btn",{staticClass:"full-width",attrs:{unelevated:"",color:"primary",label:"Entrar"},on:{click:function(a){return e.sendData()}}})],1)],1)],1)])],1)],1)},A=[],s={name:"Login",data:()=>({login:{email:null,password:null}}),methods:{sendData(){let e=this;e.$axios.post("/login",e.login).then((a=>{e.$router.push("/admin")})).catch((a=>e.$swal.fire("Erro","Login inválido","error")))}}},n=s,l=t("2877"),o=t("4d5a"),r=t("09e3"),c=t("9989"),g=t("f09f"),d=t("65c6"),p=t("6ac5"),m=t("a370"),Q=t("27f9"),f=t("4b7e"),B=t("9c40"),u=t("eebe"),D=t.n(u),E=Object(l["a"])(n,i,A,!1,null,null,null);a["default"]=E.exports;D()(E,"components",{QLayout:o["a"],QPageContainer:r["a"],QPage:c["a"],QCard:g["a"],QToolbar:d["a"],QToolbarTitle:p["a"],QCardSection:m["a"],QInput:Q["a"],QCardActions:f["a"],QBtn:B["a"]})},5596:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAOwAAADsAEnxA+tAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAG8RJREFUeJztnXd41FXWxz9TM5OekEBCh1CDFEGQXgIIiBRBWFQQGxaKKLp2F1blFXx311721VVkURABAZEmEkFAEOkgJJRQAunJpPe57x93ZjKTmUkyYUJCMt/nmedJ5lfmzny/v3PPPefce8EDDzzwwAMPPPDAgwYHVW034AZABQQDSqC4ltviwQ1EMPAekAwYgQJgFxBVm43y4MagCXAGEA5epcBjtdc0D24EvgNEgNZLfDx0tDj3wJPi18kzxMiWbcwiKAQ6124T6wYUtd2AGkBz4BKg3DRuKmNbt7McKDKW0m/1VxxOSQT4EJhXO02sO1DWdgNqAL0AZZi3L2NaRdgc0CpVTO90i/V5DR71UQD18TvVGKrzY2mBqcAHwGfAM0CYOxt1nTgCiMS8HDZfPG9zoKi0lP+eOWH+948b3bD6gE7An9h71jnA9FpsV3msA4S/1kt8MOQOETPjCbFr0nQxvEVrayewU+028eZDMHAZEN5qjfhL+0jxWJdbRSu/APOPWgKMroHP1QA+gDegruI1jZGOoKNhYAnwiPubeXOiqj8owAKgRajem12TptM5OASAvJJiJm9ey9ZLF1TA28B2ZODFVSiAdsBQoA8QCbQGApAiEMhIXjoQB5wEDgDRQHy5e+mBENPfmYAfUATsA15HBoQ8wLVh4DGg29sDovhrz742B85nZtBu+Sfmf9sD51y4bzPgIeBe5Njc1aGpETgEfA38FymQb0z3iwV6ADpkJDDfxXvXe7hiAZoARAaH2B1o6x+ITqWmoLQEpENYFQG0BV4D7kM6lgBEBAQxILw53UIaExEQRBO9Dz4aDQJBtiGThNRUzuVmcyQzjb1pyVwryFMCvU2vN5H9/zTT7Z5Hku4h3glcEcBVoMkfyQk2wRWAk+kpZvIF9ua4PLyRxD8DeIEk/cHOXZnaPpL2gcHOTUBwKELra/lXIDiamcG3V+NYfuUciQX5vsADpsM7gY0ufL8GCVeygY2BqEMpiQxq2oKWfgEApOTncd+2DcTnZANcRD6FooL7fA88DKi7BIfw4ZBRfDR0FEObt6KRTl+x/VcoICcXhLy9AgXhOj0jQpsyp01nrhbkcTQzHbVCwTNtu7zyW0bKiYpu54Fr/a0f0unqrFIo6B/eHH+tF3sSrpBZWGh93jpkn55V/gZi0SLt8M++PHo4Nanzwj4DmdPtNjRKF0IRRiMiPtHhobzSErrsXM+lvBweadWez3sMKEDwChu/fEeBoiJBNmi46nA1A1YgPXVrJAJbgZmme54CJiGdMADEY8+G4OW1DhhUbDS6Rrz5HhlZkJ3j8Nj/xB7n1dOH8VNrODN8EuE6vbwGVimDeEixbFmByx/YAOCKDwDSD4gC+gODkf35KeAHIBfYDPwH6IK0FjOATeKJZ5qh1u7AFHypKvlCCLKLivBHgcjOhTzHvlxKYQFLz0pr/2L7rhbyARQwLSWxIMzUzm2mtnpggqsCANm/7zW9yuM7IAZYixzTrw/Q6paUqLzuVisULkXeLmQauPvHNfyZnsqgRo1Z02cYQRovh+dmlxRTZDTSzsePpyMi7Y7vSksairRajyKDVb+40pb6jJooCUtCjslvB9oWlpYMPpWeEjqmVQReqiroTQA5ucyJ3srPiVcwIriYl4OXUsWwkHCHlwRpvZjRIoK5bTvjp9baHW/j7csvqYlcyc9VA3cCq3DgozRE1FTmLJeySBzrzsfQ77uviDWkV3xVcTEiKQWRkUlGga25zyguqvDSVt6+Ti2EXqVmbZ9hNNf7gBzNfEn9rIVwGTVVFPoqMNVbrWFxv6HsT7zK1dxsVsSc5JZGoXQIDLa/IicPkZoBpaUAhHrp+O7aJUqFIFCj5cNufWnspbe/rorwVWu4NaARK+LPI2QQ6iJw1MGpOmRi6wmkv1NkOrdeoiaeghbAacBn6YAonu/ZlxNpKUzevJazhnRUCgWLbh/My7f1R6mQHy8MWZBl793H5eVwLDOdfsGhNLkO8q0x9/h+Po47A3AN6ZRmWx0OQzqK3azeE8DnSEFUJ8dRp1ETFuAtYED7wGCWjxyHSqmkibcP93fswom0FGIN6UTHX+JkWgp3topAm5XndGgXpNHSyS8AX7XGbY3rGxTKZ5diKTCW+gEGbJ3Zr4HB3moNf+kQSRNvH+IyDQpk9VAsUO8CS+4WQAiwDNC+O2gEPRuX1Yno1RqmdYik2GhkX0I8f6ansvF8LOMCGxOgsXfcagp6lZoio5FfUhNBZhw/RFYKhwGfAsr1Y6fwQq9+zOjUlaT8XP5ITgAZCFtxwxp6g+BuJ/B+wKeZjx/TOtgPx1QKJf/TbygrR03EV6PllCGNddcuubkJlePJNh3Rq1QgA1tjkYmumYBKrVQytHlLy7nDW7Q2/9nxxrbyxqA6cYCKcC/AA527olE6Ny5T23akS4mCDVcvMrNlO6fn1RRCtDrGh7Xk26txIEcEvpisYYnRyDcxp3i0Sw/L3yYcuuENvQFwpxMYhswEqg5Pe5hbQ52XCYrUDKdRvRuFddcucc/BaOu3EpGziLopFQpub9KU1IJ8zsqhqwDGIB3EegV3WoAhgCrcx5fuIU2cn1VY5BbyL+fn8vWV80SnJhKXl02x0UgTLz29g0KY2qw1gxqFVajuqNBwtEolRUYjyOzkcuQQcKVRiHG/JV41n1oMvEI9JB/cK4DeAP3CmlmGd44gMrOdHqsK8kpLeO30ET6KO20mz4LL+bkcNKTycdwZBjZqwqfd+xHpF+jwPoEaLZF+gRzNTAfZBZQiA1gTkLmOvkAeMskVd12NrsNwpwAiAbqFNHZ+RlExFBQ6P14JUgoLGLP/Jw4b0gAZ4h0X1oLOfoFolUri83PZmZrIr2lJ7ElLou/uTXx721DGNGnu8H7d/IPNArD2WCvKddQ7uFMArQDa+Dt+4gBETh75paV8E3+Bn1OukV5cRCu9D5OatuKOxs0qNNmFxlLGH/iZw4Y09CoVCzv2YHqLCNTlrM3jrTtyLDOd+Sd+50xOJvccjGbXwDHcFuiglM3HUl3U0u5gA4E7BdAIoLHe2+kJfyYnMOm3HcTm2OZhPrsUy7iwFqzoNRg/J0GfJbEnOJCRgpdSxfKegxjUyLmf0T0gmA23RzH54C+czMrgwcN7ODx0PNpyaWir0LK9OhoI3BUHUCBLsfF2QmBadjaj92wjNicLH5WaGS0ieKlDV0Y3boYCBT8kXmHGod0Oa8kMxUW8c14Ox55r16VC8s0I0Gj5vx790ClV/JltYNXVC3bneKssQ1Xnqq3ncGcgSAAYnZQDLj1+kPj8XEK0Orb3v4P/7XIb89tGsqznQD7t3helQsHGxCvsSLlmd+2GhMtklRQTpPFiVusOVW5QW28/pjRrDcB/r9gLQJQ1td7F+KsKdwlAID1osors07YC+P58DABPR0QS4eNnc3xCeEtGhMpc//cOIoN70pMBGB4ahq6CAJMj3GlyAH/PSKG43Kghu8SyYozjZETtoDmyVP5B5JyGGoU7LUAyQEKu/W9ZajRyzfR+j4Aghxd395cp4sv5uXbHrpjea+fj73Kj2pnEll1SjKFcTUFCoSUekezyjd0PLXLC7UVkUupL5ETXnwHHlTBugDsFcAFwWPShUigsCZ8r+XkOLzaTHKy1L+oQmMvAXYfC6qryndO5MmfUvn+48fgYmIt9gi4K2INMs7sd7hTASYAjKfZl24qiYoaHyNDwhxdOkycnkVgQk5PJxsQrAIwMbWp3fXOdDwAX8ly31HF5MvDko1YTWC7reCTTItbaTvN2RUYj0XrpmfDwK0xf8A6Nwiyj07bIOka3i8CdAtgPcDApgfxiq9XYiosRaRm81L4repWKU9kG7tr/M2uuXWJ/RgqfxMUw8UA0eaUlRPoFMtXktFmjX3AoADtTE+yif5Vha7IM6d4WGGIzDLycn8uFPEtUcr9LN3U/RmEycFNmv8mU2W8y+r6neWvFfpq1tiQha0QE7hTAXqAgp7iI6BPHEclpiMRUREIKlJTS2S+Q5T0Ho1fJYdnc4/uZeGAnf485SkZxIa29fVnXJwovB07exPCWeKvUpBQW8N8r5+0/2Qmu5uexKl5Gce9r3tbm2NakqxjlMOAKspK5NmHxisNaylFOsDd0bhPORyujadnWTgRuC1y5UwBZyPl4rLp8ToZ8y40IJjdtxR9DxjOzZTua6bzxVqnp5BfAKx26c2joeDr4OnbyQrQ65rSRVeWLY49bQsEVIa+0hCeO/UZuaQkRPn7MaG67XpBVXGADFU9luxE4Y/5j68p30SqK8TO5Qo0ah/P+13YiiMZNInB3TeA0YKW3Ss2lO6bQyIFDV13klZbQf/dmjmel46fWsCSyF5OatnL4Bc7lZjHv+AGOZKajUSrZ0X+UTfDodHYmXaPXYxRCAP2Qk1hqE97AWaApQP8Rk1j80SrUVkG1tOQEnrp/GJcvWIzVBWAYctGOasPdAtAhGxa+sFMPFnZ07zD2an4ed/y2jdPZmQB09Q9iYnhLOvsGoFWquJKfS3RqAluSrlIsjHgpVXzVc5CdX/HIkb18efksyHWC+lD7FgBgEDLz6A0wZNQkFr1f8yKoiargF4AlARotMcMn0dhL59abG4qLePbkQZZfOUepcM5b94Bg/t29P32CbMP8f2Yb6BG9kRJhBLnY1XdubeD1YTDwIzI9Tb9hY1n88Vo0VpY0PTWJ+fdHcfHcn+a3LiFFUK2UdU0IwBdpzsIebNmOL24dWAMfAaeyDSy/fM5SEFJkNBKm09M7MIQpzVoztkkLu0yhUQhG7ttOdGoCyKe/L7IOoC5hEHKOZYUieHr6cOLOWsrVqi2C6ghAg6yn1yC9Z+vQXSCwBJgFKBXA+tuHMy6sRmIYLuP9C6d5+sQBkKQPAn6roY9qCUQAv2P7+1QVq4Ep5n+cdQfzp0dx6bzFf6xWd+DKKEALLETWzh1HFkmmAB8B/shKmhPA46b7pgrgkSN7OJ97fVVA7sBv6cm8cMqyNOB71Bz5jyOXyNmJDI65uhzdv7AiH2DXtnUsemoaJWW5Cxo1Due9FTtpFWG5fbVGB1UVgBpYDywCgtVKJVo5XtcDs5Em/3tkIiMVmciIBC6mFhUy/sDPpBRVPj3/VLaBKQej2Zfu3tB8bE4Wk36PptBYCnK4+oZbP6AMs4FPkNYR5Cpn0VRdBP9CLp2DUqlk5oyZ6HTSh6opEVRVAHOAMSqFkrf6DyPpkfmkzHqGz6LuNOf/zXVgq5Fhza+Q1mESkHU628DofdtJKaxYBItjjrH22iW+uuLKImMVIzYni5H7tpFUlvjxRzpaFdSuVQuzkZNMFACBZTOZw5DWoDIR2JD/+qLXeW7Bs3z43gfoTesd1IQIqiqAWQDP3NqHF3v1I1inx1+r5dEuPXh7gGX/hSzkxBDrZMAR4G4g90hmOgP3bOZMTqbDD8gpKeGHJJkPGBXarIrNqhi/piUxaM9mc6IpGTlptRBZ9LkP9y0Z/wRW5E985FWWrj5Fm86W9ajDqVgEduRPGDcegMFDhvD55/9Br3dZBJswLcJVEaoiADXQAeCeCPv2T25neS8AOdOmPHYiZ98YzuZk0XfXJr6Jt0++/ZB4mdySEgI1WkY3uT4BlArBP86dZOS+bWarcxnpIC1GLhCRjnTS9nL9OfcI4H2syL/nyTfw8Q/ijc9/ouMtlYrAKfleeh1aLy8GDBjAp598isI0qqlIBFYRw67I2U4VoioCEMgp0mQ7mKOfYxvudWbjdwEDgZiskmKmH9rNFzIQY8EqOUuH8WEy7l9dHDKkMejXzTx/6g9z4ug3ZLTPPHD+BRiAdNSCkNbAGm2Ri0gMQ3YXlaEzpj4/tGlrxj/0EgC+XtAyLIh3llcoAlvyF/7djnyAkpISVn27CmEV93AmgpffXmbdthGVNb4qAijFlC179+jvlIqybJwA/nnEEkWNoeLCilPIVUOWAXlZxcWbQZQApBUV8lOyLAWb1rxNFZpkCwH8YUjlLwd/oe/uTezPSAG5JvASJJHl68zOIGMAE5FTv0GucLoD6dD+iCTqGnK2c0WzV/dh+t4p1y7yj2fGoRF5BHtLk+AX4FQEX1Ce/PETAHvy5z01ly1btpivtyx86UgE4c1bW7fNp4J2A1WPA4xEzoxRjGzRhse73opWqWJFzElWnz1tPudhZBVLVeAFFBZOeChSLcTz/3cpdtqTx/Z56VUqjg2bQISPf6UNE0BsTiY/JsXzbXwcfxhSreO5+4CngYNVbE9b0zVNAEL03uSXFJNbltZeixyaOQs99kaukRwI0LNfFEs/+wGdVYV0dmYGzzwwkpiTtlMMq0H+ONPfP2AqxB04YgIvv/0lOr03/1o4h02r/2M+/21kZNYpXAkE/RX5RDmyGu8D8124V3nsRD6pALTU+9AtIJh2Pn408dLjo1LLpYNKikkozOdsThbHMtNJLLSZYmae0LEU+QS7Et//EbizpZ8/K0dNpH94cwpLS3n/2EFe3BdtThvfjRwKO4IGScgo8xtVFcHc2XN5fJbcw8pLp0Orq5T8n03/D8dKBCqVGqVKRXGRZeJNIXK1tqrnz6uAwcjx/jXkYlDbgPHXec9myPl3wnRfR0u8O3sZkauRLMV2VQ9XEI7s5sTOu+8XYt7LNq+HI7ubP2u1k+s1wBpH7evZL0r8dDJX/HpeWF6bD6eLjrf0spwT0ihEbPx+g4g9Eysuxl0SF+MuiXNnz4sxY8ZY3ysPx/15FJDh4LMLkSOySnE9uQAF7smizQfeRXrqEcjgifVy8SGU1e3nIPtb83LxvyNnJF9POwYDu/y1WtJmLUBdbvLImnNnmLJlHabPbFvuWg2wEpgMoNPpWLhwIUuWLCEzUw53q2IJQkNDWbXyWyIiIpw9+eOR/okjtEQu5T/Y1J7fkb9nbZe5VQpvpHd+CEng/9ZSO3oBQqtUibRZC+wswMdDR5ufqvJbzKiQy9ILQOh0OrF+/XphMBjE7t27RVBQkOWJ7N57kNh+ItvGEmw9ahCdu/cpswQhIWLrlq1i/PgJVXnyb3rMQo7Frb/sS7XUFi0yaime63m7DfkZjy0QHYMamdu32OoaG7NvTb7BYBB5uXli7549IjAg0KXuQK1SNwjypyH7bqFTqYWXSmXdn0+opTYtMLVBTGjbQXwx4i7xz4EjRLsAy1OcTVlotVLyC/MLRGF+gbh32jSXfQLqOfkgnTYxOaKTyHz8WZHx2AJxV5t25i9+uJbapETW5Ruxd6gyKdsLyY7877//3iH5T817yqHjWkURJFJPN7XyRwZoxLF7H7WY2gNTHzR/8RIqDrrUNEYil5E9gawT/Aemae9Uk3ylUilmPfKo8PPzc1UE5nUM6xW8kAUSYv3YeywCWDlqovXTVhe3tHfq8JUn/6/P/dWG/Ddff1OcOHJcrP7mWxEQYNlhrUqOIdISdKml71xjWA2IRjq9eHtAlHir/1AR5KUzf+GvarltjmDz5Gs0mnJPfq7TJ//Nv78hThw5Lk4cOS5iTseKDRs2Cn9//wZvCVogx9Tl+8ez1K0dSMFJkOfll1+u1OyXJ98c5Fm7Zp1QKpUNXgRBSM/7F2QY+ClkOrkuwfbJ12qFQqGwkPLaa6+5TP65s+fF6NGjywu/wYqgLqOcw6cXX635Sbz65rs2Ilj4t7/Zkf/GoterRL5er7fxCVwQgf3sWQ/cCofkn00W4myyEK8vsRUB1SR/6+Yt1QoWIfMeHtQglmFF/rLvtlvIv2YQIi1HiMVL37ERgUKhsCE/9nRMpeSbu4/KRLD1qEFE9rjdWgBv187P0kCgUCiyqIB882vx0ndsLMDc2XOq/OSbyTe/9vz6q9BoNJbzevUfLnacynNEfhKy8tqDmkCyEL5L3vvcMHTkWPHNhl1OyXcmgvlPzXeZ/ML8AjFv7jy7LqVX/+GOyK93MYE6g2QhfONSRYKZ9MrIdyaCBQuevR7yS5HV1eUF4SG/hqAC7u7Wq1fP6pDvTATt27evLvkPIMvLrIs8POTXECzevrePr/HI+cxqke9MBFSPfDPaI5NT79GAl7GtSdgM9Xx8/YS1AFwl35kIZj7wQHXIv6Goi4mXmoYKuTfAVACdTs+ny9cT0UFOEvLRglc1pyXc1qcvAQGBRP+8HYBjx46hVCoYPGiw5ZxXXn2Vd9971/yvkbK9Cjy4ASiX1bMN8lT3yXdkCazjBH8zhY2fe/a58k/+zFr7JRogKozwuYt8Z91Bv75964zZt0ZD6QLKVe/q+feKjfQfLKuursfsAxiNRsu8PTPM3cHOHXKnmfj4eMvpwEPUEbNfU3sH1zUsxxn5XtdH/qaN62ge6s34McPIyrKd+fzEnKcZMGio9Vt1ivyGgt5Ym/21O8rMfub1m/rpMx8pi971vl3EXTNYjj0x52lPn18HcB8mEl5c9A+3kp+WI8TvR2NEaOMmdiK4Wch398aRdRGWjYGCghsBoNeAl5u8n4h2HdiweScT7owiJTmJQwcP0Lt7B1JTLBOlzUO9ulju1iB8AAvV5lW2lNfxra9cvkRqaorNex07RbJh805CG8vVSG8W8qGhCUAjBVDdCZG7onfQq2sEt3Vtx769u22OdewUyfCRo63fqvPkQwMVgLKaCrgYd4HS0lKys7OYNmmsjQheeeEZVn1t4fqmIB8amAC05g0jRPVudO/0Bxk15i4AcnNzmDZpLHv37OLVFxfw6Ud24d06Tz40DCfQzgJUtw/QarUs+3otD94/mW1bNpGbm8Oku0ZQUmLZAeWmIh8ahgWwiNziBFZRAAf272XH9i0275lFYLYENzP50DAEYLEAiQnxFZ1ng1Mnj3PXHYP5y6Q7ee2lZ22OabVaWrW2WSvipiS/ISAUOdHTEgn8cvU2kZJdeYBn78GTQlU2dV3MnrfAE+G7yRCKXNTaJiun0+nFmvXbqhTl++CTL2ymcc2et8BD/k0CPXJJFwGIxuEtRL9hY8tEoNeLNRuqJwI85N8UeBUr8r/95byIjikSQ0ZNqrYI8JB/UyEGEGq1Rny56ahllo2rIriakifOx6eL2fMWlCf/wdr7ah5UBiWmdf/aR95qM8/OkQi0Wq0IDm4kAgODRGBgkM0MHQevekd+fRwGCkxr6WakJVFabptatVrDgOHjLP8XFRWRnp6GwZCBwZBBsfWup7YoRQ71ltVEo2sL9bUkbCDQPi83G6PRSK9+lj0N2L5+BW+9+LD1ytt/IhepTLB6nUbuwXMB2Z1EA88jN5n04CbAKKxMd5/Bo8STLywVUWOnlp/a/QE1s3OaB7UIf+TK3xX15QKrTR48qD8oT34K9usRpSH39/GgnqE8+cnIbVNUyMWnJwNDqMI+Oh7cfPBBbktTnnwPGgA85DdgeMhvwPCQ34DhIb8Bw0N+A4aH/AYMD/kNGP7ILWA95DdAeMhv4FiNLfm31G5zPLjRiMZDfoNGM+Tuoq5vK+6BBx544IEHHnjggQceeOCBBx5Y4/8B/ZOBf/mw1QQAAAAASUVORK5CYII="}}]);