<template>
  <div class="poke">
    <h1>pokemon</h1>
    <div class="pokemon" v-if="dados != '' && img != ''">
      <img :src="img" alt="" />
      <div class="info">
        <p>Nome: {{ dados[param - 1].name }}</p>
        <p>HP: {{ hp }}</p>
        <p>Attack: {{ attack }}</p>
        <p>Defense: {{ defense }}</p>
        <p>Special attack: {{ SpecialAttack }}</p>
        <p>Special defense: {{ SpecialDefense }}</p>
        <p>Speed: {{ speed }}</p>
      </div>
    </div>
  </div>
  <!-- <p>{{ dados[param].url }}</p> -->
</template>

<script>
import axios from "axios";
export default {
  name: "pokemon",
  data() {
    return {
      param: this.$route.params.id,
      url: "",
      dados: [],
      abilidades: [],
      img: [],
      hp: "",
      attack: "",
      defense: "",
      SpecialAttack: "",
      SpecialDefense: "",
      speed: "",
      el: "",
    };
  },
  methods: {
    get() {
      axios.get("https://pokeapi.co/api/v2/pokemon?limit=25").then((res) => {
        this.dados = res.data.results;
        this.url = this.dados[this.param - 1].url;
      });
    },
    infos() {
      axios.get(this.url).then((res) => {
        this.img = res.data.sprites.front_default;
        this.hp = res.data.stats[0].base_stat;
        this.attack = res.data.stats[1].base_stat;
        this.defense = res.data.stats[2].base_stat;
        this.SpecialAttack = res.data.stats[3].base_stat;
        this.SpecialDefense = res.data.stats[4].base_stat;
        this.speed = res.data.stats[5].base_stat;
      });
    },
  },
  mounted() {
    this.get();
    setTimeout(this.get, 300);
    setTimeout(this.infos, 300);
  },
};
</script>

<style scoped src="./pokemon CSS/pokemon.css"></style>
