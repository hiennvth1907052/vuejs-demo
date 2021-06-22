<template>
  <div>
    <h2>Students</h2>
    <Table
        @show="show"
        :columns="columns"
        :data="students"
        @handleDelete="handleDelete"
    />
    <From
        @close="isShow == false"
        v-if="isShow"
        :is-edit="isEdit"
        :inputs="inputs"
        :detail="student"
        @save="save"
    />
  </div>
</template>

<script>
import Table from "../components/Table";
import Form from "../components/Form";
import {mapState} from "vuex";

export default {
  name: "Student",
  components: {
    Table,
    Form
  },
  data() {
    return {
      columns: [
        {
          label: 'Id',
          field: 'id'
        },
        {
          label: 'Full Name',
          field: 'fullName'
        },
        {
          label: 'Email',
          field: 'email'
        },
        {
          label: 'Status',
          field: 'status'
        },
        {
          label: 'Create At',
          field: 'createAt'
        },
        {
          label: 'Update At',
          field: 'updateAt'
        },
      ],
      inputs: {
        fullName: {
          label: 'Full Name',
          type: 'text'
        },
        email: {
          label: 'Email',
          type: 'text'
        }
      },
      isShow: false,
      isEdit: false
    }
  },
  mounted() {
    this.loadStuents()
  },
  computed: {
    ...mapState('student', ['students', 'student'])
  }
}
</script>

<style scoped>

</style>