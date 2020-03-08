<template>
    <div style="height:100%">
        <el-container style="height:100%">
            <el-header style="height:100px">
                <el-row>
                <el-form :inline="true">
                    <el-col :span="8">
                        <el-form-item label="日期">
                            <el-date-picker
                                value-format="yyyy-MM-dd"
                                v-model="date"
                                type="date"
                                placeholder="选择日期"
                            ></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item>
                            <el-select v-model="value" placeholder="请选择">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item>
                            <el-button size="primary" :loading="isQuery" @click="queryList">查询</el-button>
                        </el-form-item>
                    </el-col>
                </el-form>
                </el-row>
            </el-header>
            <el-main>
            <el-row style="height:400px">
                <el-col :span="12" style="height:100%">
                    <div class="block" style="height:100%">
                        <span class="demonstration">默认</span>
                        <el-image :src="src"  style="width: 100px; height: 100px"></el-image>
                    </div>
                </el-col>
                <el-col :span="12" style="height:100%">
                    <div class="block">
                        <span class="demonstration">默认</span>
                        <el-image :src="src"  style="width: 100px; height: 100px"></el-image>
                    </div>
                </el-col>
            </el-row>
            </el-main>
        </el-container>
    </div>
</template>


<script>
  export default {
    data() {
      return {
        options: [{
          value: '024',
          label: '024'
        }, {
          value: '048',
          label: '048'
        }, {
          value: '072',
          label: '072'
        }, {
          value: '096',
          label: '096'
        }, {
          value: '120',
          label: '120'
        }, {
          value: '144',
          label: '144'
        }, {
          value: '168',
          label: '168'
        }],
        value: '024',
        date:'',
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      }
    }
  }
</script>
<style>
  
</style>