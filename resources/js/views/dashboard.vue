<script>
import { mapGetters } from 'vuex'

export default {
  middleware: 'auth',

  data: () => ({
    model: {
      title: '',
      description: '',
      statuses: [],
      due_date: ''
    },
    tryToSubmit: false,
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
    ...mapGetters('assignees', ['assignees']),
    ...mapGetters('user', ['tasks'])
  },

  mounted() {
    Promise.all([
      this.$store.dispatch('status/index'),
      this.$store.dispatch('assignees/index'),
      this.$store.dispatch('user/tasks')
    ])
  },

  methods: {
    async onSubmit() {
      this.tryToSubmit = true

      try {
        const { message } = await this.$store.dispatch('task/store', this.model)

        this.model = {
          title: '',
          description: '',
          statuses: [],
          due_date: ''
        }
        this.tryToSubmit = false
        this.$refs.formTask.reset()

        this.$notify({
          title: 'Success',
          type: 'success',
          message
        })
      } catch (e) {
        this.tryToSubmit = false
      }
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-4">
        <ValidationObserver
          ref="formTask"
          v-slot="{ handleSubmit }"
          tag="div"
        >
          <form
            class="card"
            autocomplete="off"
            @submit.prevent="handleSubmit(onSubmit)"
          >
            <div class="card-header">
              <h3 class="card-title">
                Create Task
              </h3>
            </div>
            <div class="card-body">
              <BaseInput
                v-model="model.title"
                rules="required"
                name="Title"
                :label="true"
                vid="title"
              />

              <BaseTextarea
                v-model="model.description"
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
                  Status <span class="form-required">*</span>
                </label>
                <ElSelect
                  v-model="model.statuses"
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
                  Assignee <span class="form-required">*</span>
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
                    <span style="float: right; color: #8492a6; font-size: 13px">
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
                  Create
                </button>
              </div>
            </div>
          </form>
        </ValidationObserver>
      </div>
      <div class="col-lg-8">
        <div class="card">
          <div class="table-responsive">
            <table
              class="table table-hover table-outline table-vcenter text-nowrap card-table"
            >
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Assigned</th>
                  <th>Due Date</th>
                  <th class="text-center">
                    <i class="icon-settings" />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="task in tasks"
                  :key="task.id"
                >
                  <td>{{ task.title }}</td>
                  <td>{{ task.description }}</td>
                  <td>{{ task.status }}</td>
                  <td>{{ task.assignee_id }}</td>
                  <td>{{ task.due_date }}</td>
                  <td class="text-center">
                    <div class="item-action dropdown">
                      <a
                        href="javascript:void(0)"
                        data-toggle="dropdown"
                        class="icon"
                      ><i
                        class="fe fe-more-vertical"
                      /></a>
                      <div class="dropdown-menu dropdown-menu-right">
                        <a
                          href="javascript:void(0)"
                          class="dropdown-item"
                        >
                          <i class="dropdown-icon fe fe-link" /> Separated link
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
