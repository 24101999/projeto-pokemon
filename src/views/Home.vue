<template>
  <div class="home">
    <h1>Pokemons</h1>
    <input
      class="pesquisar"
      type="text"
      placeholder="Digite o name do Pokemon"
      v-model="search"
    />
    <div class="pokemos">
      <div
        class="pok"
        v-for="(d, i) in pesq"
        :key="(d.id, i)"
        @click="poke(($e = id = d.url[34] + d.url[35]))"
      >
        <p>{{ d.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      url: [],
      el: "",
      search: "",
      id: "",
      dados: [],
    };
  },
  computed: {
    pesq() {
      return this.dados.filter((d) => d.name.includes(this.search));
    },
  },
  methods: {
    ev() {
      axios.get(this.dados[this.el].url).then((res) => {
        if (this.url != "") {
          this.url = res.data;
        }
      });
    },
    poke(e) {
      this.$router.push(`/pokemon/${e}`);
    },
    get() {
      axios.get("https://pokeapi.co/api/v2/pokemon?limit=25").then((res) => {
        this.dados = res.data.results;
        this.url = res.data.results;
      });
    },
  },

  mounted() {
    this.get();

    setTimeout(this.get, 300);
    setTimeout(this.ev, 300);
  },
};
</script>

<style scoped src="./Home CSS/home.css"></style>
