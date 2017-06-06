<template>
  <section>
    <el-table :data="users" highlight-current-row v-loading="loading" style="width: 100%;">
  			<el-table-column type="index" width="60">
  			</el-table-column>
  			<el-table-column prop="name" label="Name" width="120" sortable>
  			</el-table-column>
  			<el-table-column prop="sex" label="Sex" width="100" :formatter="formatSex" sortable>
  			</el-table-column>
  			<el-table-column prop="age" label="Age" width="100" sortable>
  			</el-table-column>
  			<el-table-column prop="birth" label="Birthday" width="120" sortable>
  			</el-table-column>
  			<el-table-column prop="addr" label="Address" min-width="180" sortable>
  			</el-table-column>
        <el-table-column label="操作">
          <template scope="scope">
            <el-button
              size="small"
              @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
          </template>
        </el-table-column>
  	</el-table>

      <!-- edit -->
      <el-dialog title="编辑" v-model="editFormVisible" :close-on-click-modal="false">
			<el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
				<el-form-item label="姓名" prop="name">
					<el-input v-model="editForm.name" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="性别">
					<el-radio-group v-model="editForm.sex">
						<el-radio class="radio" :label="1">男</el-radio>
						<el-radio class="radio" :label="0">女</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="年龄">
					<el-input-number v-model="editForm.age" :min="0" :max="200"></el-input-number>
				</el-form-item>
				<el-form-item label="生日">
					<el-date-picker type="date" placeholder="选择日期" v-model="editForm.birth"></el-date-picker>
				</el-form-item>
				<el-form-item label="地址">
					<el-input type="textarea" v-model="editForm.addr"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="editFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="editSubmit(editForm)">提交</el-button>
			</div>
		</el-dialog>
  </section>
</template>

<script>
import { getUserList } from '../../api/api';

export default {
  data() {
    return {
      loading: false,
      editFormVisible: false,
      editFormRules: {
        name: [
          { required: true, message: 'please enter username', trigger: 'blur' },
        ],
      },
      filters: {
        name: '',
      },
      users: [],
      editForm: {
        id: 0,
        name: '',
        sex: -1,
        age: 0,
        birth: '',
        addr: '',
      },
    };
  },
  methods: {
    formatSex(row) {
      return row.sex === 1 ? '男' : row.sex === 0 ? '女' : '未知';
    },
    getUser() {
      const para = { name: this.filters.name };
      this.loading = true;
      getUserList(para).then((res) => {
        this.users = res.data.users;
        this.loading = false;
      });
    },
    handleEdit(index, row) {
      this.editFormVisible = true;
      this.editForm = Object.assign({}, row);
    },
    editSubmit(row) {
      const { id, name, addr, age, birth, sex } = row;
      this.users.some((u) => {
        if (u.id === id) {
          u.name = name;
          u.addr = addr;
          u.age = age;
          u.birth = birth;
          u.sex = sex;
        }
      });
      this.editFormVisible = false;
    },
    handleDelete(index) {
      const _this = this;
      _this.$confirm('此操作将删除该行信息, 是否继续?', '删除', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        _this.loading = true;
        _this.users.splice(index, 1);
        _this.loading = false;
        _this.$message({
          type: 'success',
          message: '删除成功!',
        });
      }).catch(() => {
        _this.$message({
          type: 'info',
          message: '已取消删除',
        });
      });
    },
  },
  mounted() {
    this.getUser();
  },
};
</script>

<style lang="css">
</style>
