export default {
  methods: {
    pageTo(path, isParams = false, _blank = false) {
      let query = {}
      if (isParams === true) {
        let { code, name, type } = { ...this.$route.query }
        query = { code, name, type }
      } else if (isParams) {
        query = isParams
      }
      if (_blank) {
        let url = this.$router.resolve({
          path: path,
          query: query
        })
        window.open(url.href)
      } else {
        this.$router.push({
          path: path,
          query: query
        })
      }
    }
  }
}
