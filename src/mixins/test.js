

export default {
  data: {
    mixinValue: 'MixinText'
  },
  methods: {
    mixintap () {
      this.mixinValue = 'MixinText' + (Math.random() + '').substring(3, 7);
      console.log('mixin method tap');
    }
  }
}
