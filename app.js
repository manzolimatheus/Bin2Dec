const Bin2Dec = {
  data() {
    return {
      num_binario: null,
      num_decimal: null,
      binario_visivel: true,
    };
  },
  methods: {
    DecimalNumber(e) {
      e.preventDefault();
      this.num_decimal = parseInt(this.num_binario, 2);
    },
    BinaryNumber(e) {
      e.preventDefault();
      this.num_binario = this.num_decimal.toString(2);
    },
    AlternaModo() {
      this.binario_visivel = !this.binario_visivel;
    },
    Reset() {
      this.num_binario = null;
      this.num_decimal = null;
    },
  },
  computed:{
    AnoAtual(){
      const data = new Date
      const ano = data.getFullYear()

      return ano
    }
  }
};

Vue.createApp(Bin2Dec).mount("#app");
