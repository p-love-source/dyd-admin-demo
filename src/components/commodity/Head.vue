<template>
  <div class='head'>
      <ul>
          <li v-for="(item, idx) in typeList" :key="idx">
            <p>{{item.name}}:</p>
            <!-- 基础 -->
            <el-input placeholder="请输入内容" v-model="inputVal"></el-input>
            <!-- 可清除 -->
            <el-input placeholder="请输入内容" v-model="inputVal" clearable></el-input>
            <!-- 禁用 -->
            <el-input placeholder="请输入内容" v-model="inputVal" :disabled="true"></el-input>
            <!-- 密码框 -->
            <el-input placeholder="请输入内容" v-model="inputVal" show-password></el-input>
            <!-- 带icon框 -->
            <el-input placeholder="请输入内容" v-model="inputVal" suffix-icon="el-icon-date"></el-input>
            <el-input placeholder="请输入内容" v-model="inputVal" prefix-icon="el-icon-search"></el-input>
            <!-- 分组显示框 -->
            <el-select v-model="inputVal" placeholder="请选择">
                <el-option-group
                    v-for="group in optionsOne" 
                    :key="group.label"
                    :label="group.label"
                >
                    <el-option
                        v-for="item in group.options" 
                        :key="item.value" 
                        :label="item.label" 
                        :value="item.value"
                    >
                    </el-option>
                </el-option-group>
            </el-select>
            <!-- 自定义选择框 -->
            <el-select v-model="inputVal" placeholder="自定义选择框">
                <el-option 
                    v-for="item in optionsTwo"
                    :key="item.value"
                    :label="item.label"
                    :value="item.label"
                >
                <span style="float: left">{{item.label}}</span>
                <span style="float: right" font-size="14px" color="orange">{{item.value}}</span>
                </el-option>
            </el-select>
          </li>
      </ul>
  </div>
</template>

<script>

import { 
    COM_OPTIONS_SECOND_LIST,
    COMM_OPTIONS_ONE_LIST
} from "../../api/common";
export default {
  name: 'head',
  data(){
    return {
        inputVal: "",
        typeList : [
            {name: "商品名称", type:"text"}
        ],
        optionsOne: COM_OPTIONS_SECOND_LIST,
        optionsTwo: COM_OPTIONS_ONE_LIST,
    }
  },
  components: {
  
  },
  created(){
  
  },
  mounted(){
  
  },
  computed: {
  
  },
  methods: {
  
  }
}
</script>
<style lang='less' scoped>
  .head {
      font-size: 0.14rem;
  }
</style>