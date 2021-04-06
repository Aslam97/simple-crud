<script>
import { mapGetters } from 'vuex'

export default {
  middleware: 'auth',

  data: () => ({
    model: {
      title: '',
      description: '',
      status: [],
      due_date: ''
    },
    datePickerOptions: {
      disabledDate(date) {
        const d = new Date()
        d.setDate(d.getDate() - 1)
        return date < d
      }
    }
  }),

  computed: {
    ...mapGetters('status', ['statuses']),
    ...mapGetters('assignees', ['assignees'])
  },

  mounted() {
    Promise.all([
      this.$store.dispatch('status/index'),
      this.$store.dispatch('assignees/index')
    ])
  }
}
</script>

<template>
  <div class="page">
    <div class="page-single">
      <div class="container">
        <div class="row">
          <ValidationObserver
            ref="formLogin"
            v-slot="{ handleSubmit }"
            tag="div"
            class="col col-login mx-auto"
          >
            <form
              class="card"
              autocomplete="off"
              @submit.prevent="handleSubmit(onSubmit)"
            >
              <div class="card-body p-6">
                <div class="card-title">
                  Create Task
                </div>

                <BaseInput
                  v-model="model.title"
                  rules="required"
                  name="Title"
                  :label="true"
                  vid="title"
                />

                <BaseTextarea
                  v-model="model.description"
                  rules="required"
                  name="Description"
                  :label="true"
                />

                <ValidationProvider
                  v-slot="{ errors }"
                  tag="div"
                  name="Status"
                  class="form-group"
                  rules="required"
                >
                  <label class="form-label">
                    Status
                  </label>
                  <ElSelect
                    v-model="model.status"
                    :class="['w-100', { 'is-invalid': errors[0] }]"
                    placeholder=""
                    multiple
                  >
                    <ElOption
                      v-for="status in statuses"
                      :key="status.id"
                      :label="status.name"
                      :value="status.id"
                    />
                  </ElSelect>
                  <span class="invalid-feedback">{{ errors[0] }}</span>
                </ValidationProvider>

                <ValidationProvider
                  v-slot="{ errors }"
                  tag="div"
                  name="Assignee"
                  class="form-group"
                  rules="required"
                >
                  <label class="form-label">
                    Assignee
                  </label>
                  <ElSelect
                    v-model="model.assignee_id"
                    :class="['w-100', { 'is-invalid': errors[0] }]"
                    placeholder=""
                  >
                    <ElOption
                      v-for="assignee in assignees"
                      :key="assignee.id"
                      :label="assignee.name"
                      :value="assignee.id"
                    >
                      <span style="float: left">{{ assignee.name }}</span>
                      <span
                        style="float: right; color: #8492a6; font-size: 13px"
                      >
                        {{ assignee.role.name }}
                      </span>
                    </ElOption>
                  </ElSelect>
                  <span class="invalid-feedback">{{ errors[0] }}</span>
                </ValidationProvider>

                <ValidationProvider
                  v-slot="{ errors }"
                  tag="div"
                  name="Due Date"
                  class="form-group"
                  rules="required"
                >
                  <label class="form-label">
                    Due Date <span class="form-required">*</span>
                  </label>
                  <ElDatePicker
                    v-model="model.due_date"
                    type="date"
                    placeholder=""
                    format="dd MMM yyyy"
                    value-format="yyyy-MM-dd"
                    :picker-options="datePickerOptions"
                    :class="['w-100', { 'is-invalid': errors[0] }]"
                  />
                  <span class="invalid-feedback">{{ errors[0] }}</span>
                </ValidationProvider>

                <div class="form-footer">
                  <button class="btn btn-primary btn-block">
                    Log In
                  </button>
                </div>
              </div>
            </form>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </div>
</template>
