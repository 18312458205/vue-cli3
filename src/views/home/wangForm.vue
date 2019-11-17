<template>
  <wang-layout>
   <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="Name" prop="name">
            <i-input v-model="formValidate.name" placeholder="Enter your name"></i-input>
        </FormItem>
        <FormItem label="E-mail" prop="mail">
            <i-input v-model="formValidate.mail" placeholder="Enter your e-mail"></i-input>
        </FormItem>
        <FormItem label="City" prop="city">
            <Select v-model="formValidate.city" clearable placeholder="Select your city">
                <Option value="beijing">New York</Option>
                <Option value="shanghai">London</Option>
                <Option value="shenzhen">Sydney</Option>
            </Select>
        </FormItem>
        <FormItem label="Date">
            <Row>
                <i-col span="11">
                    <FormItem prop="date">
                        <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>
                    </FormItem>
                </i-col>
                <i-col span="2" style="text-align: center">-</i-col>
                <i-col span="11">
                    <FormItem prop="time">
                        <TimePicker type="time" placeholder="Select time" v-model="formValidate.time"></TimePicker>
                    </FormItem>
                </i-col>
            </Row>
        </FormItem>
        <FormItem label="Gender" prop="gender">
            <RadioGroup v-model="formValidate.gender">
                <Radio label="male">Male</Radio>
                <Radio label="female">Female</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="Hobby" prop="interest">
            <CheckboxGroup v-model="formValidate.interest">
                <Checkbox label="Eat"></Checkbox>
                <Checkbox label="Sleep"></Checkbox>
                <Checkbox label="Run"></Checkbox>
                <Checkbox label="Movie"></Checkbox>
            </CheckboxGroup>
        </FormItem>
        <FormItem label="Desc" prop="desc">
            <i-input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></i-input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
            <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
        </FormItem>
    </Form>
    <img src="@assets/img2.png">
    <div>ps:vue引入图片的正确方式</div>
    <a :href="src" target="_blank">
      https://segmentfault.com/a/1190000019495695?utm_source=tag-newest
    </a>
  </wang-layout>
</template>
<script>
import WangLayout from '@components/LayoutContainer/WangLayout'
import { scrollTop } from 'iview/src/utils/assist'
import { getOffset } from '@/assets/until'
export default {
  components: {
    WangLayout
  },
  data () {
    return {
      src: 'https://segmentfault.com/a/1190000019495695?utm_source=tag-newest',
      formValidate: {
        name: '',
        mail: '',
        city: 'beijing',
        gender: '',
        interest: [],
        date: '',
        time: '',
        desc: ''
      },
      ruleValidate: {
        name: [
          { required: true, message: 'The name cannot be empty', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
          { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
        ],
        city: [
          { required: true, message: 'Please select the city', trigger: 'change' }
        ],
        gender: [
          { required: true, message: 'Please select gender', trigger: 'change' }
        ],
        interest: [
          { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
          { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
        ],
        date: [
          { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
        ],
        time: [
          { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
        ],
        desc: [
          { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
          { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
          console.log(this.formValidate)
          this.$nextTick(() => {
            const { top } = getOffset(document.querySelector('.ivu-form-item-error'))
            scrollTop(window, window.pageYOffset, top - 84)
          })
        }
      })
    },
    // 参考文档
    // 1.https://www.jianshu.com/p/44abcc626318
    // 2.https://blog.csdn.net/gao_xu_520/article/details/80365799
    // 3.https://blog.csdn.net/DreamFJ/article/details/81539072
    handleReset (name) {
      this.$refs[name].resetFields()
    }
  }
}
</script>
<style lang="less" scoped>

</style>
