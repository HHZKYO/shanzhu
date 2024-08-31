import { defineComponent, PropType } from 'vue'
export const Money = defineComponent({
  props: {
    value: {
      type: Number as PropType<number>,
      required: true,
    },
  },
  setup: (props, context) => {
    const addZero = (n: number) => {
      const nSting = n.toString()
      const dotIndex = nSting.indexOf('.')
      if (dotIndex < 0) {
        return nSting + '.00'
      } else if (nSting.substring(dotIndex).length === 2) {
        return nSting + '0'
      } else {
        return nSting
      }
    }
    return () => <span>{addZero(props.value / 100)}</span>
  },
})
