<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    rules: {
      type: [String, Object],
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    vid: {
      type: String,
      default: undefined
    },
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    currentValue: ''
  }),
  computed: {
    isRequired() {
      if (this.rules.includes('required')) return true
      return false
    }
  },
  watch: {
    value: {
      handler(after) {
        this.currentValue = after
      },
      immediate: true
    }
  },
  methods: {
    handleInput() {
      this.$emit('input', this.currentValue)
    }
  }
}
</script>

<template>
  <ValidationProvider
    v-slot="{ errors }"
    tag="div"
    class="form-group"
    :rules="rules"
    :name="name"
    :vid="vid"
  >
    <label
      v-if="label"
      :for="name"
      class="form-label"
    >
      {{ name }}
      <span
        v-if="isRequired"
        class="form-required"
      >*</span>
    </label>

    <input
      :id="name"
      v-model="currentValue"
      :type="type"
      :class="['form-control', { 'is-invalid': errors[0] }]"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :disabled="disabled"
      @input="handleInput"
    >
    <span class="invalid-feedback">{{ errors[0] }}</span>
  </ValidationProvider>
</template>
