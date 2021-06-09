<template>
    <div class="inputs">
        <div class="input-wrap" :class="{'fousinput':currentFocusIndex===index}" v-for="(pwd, index) of pwdLength" :key="index">
            <input :type="type" maxlength="1" :ref="refNames[index]" :data-input-index="index + 1"  :value="pwds[index]"  :readonly="currentFocusIndex===index?false:true"   @keyup.delete="deleteKey(index)"  @input="afterInput">
        </div>
    </div>
</template>

<script>
export default {
        name: 'PasswordInputs',
        props: {
            pwdLength: {
                type: Number,
                default: 6
            },
            type:{
                type: String,
                default: 'text'
            },
            refNames: {
                type: Array,
                default () {
                    return [
                        'input1',
                        'input2',
                        'input3',
                        'input4',
                        'input5',
                        'input6'
                    ]
                }
            },
            pwdTexts: {
                type: Array,
                default () {
                    return ['', '', '', '', '', '']
                }
            },
            currentFocusIndex: {
                type: Number,
                default: 0
            }
        },
        data () {
            return {
                pwds:['', '', '', '', '', '']
            }
        },
        mounted () {
            this.$refs['input1'][0].focus()
        },
        methods: {
            afterInput (event) {
                const index = Number(event.target.dataset.inputIndex)
                event.target.value=event.target.value.replace(/[^\d]/g, '')
                if (event.target.dataset && event.target.value !== undefined && event.target.value !== null && event.target.value.trim() !== '') {
                    this.propData(index - 1, event.target.value, '*')
                    event.target.value = '*'
                    if (index === this.pwdLength) {
                        return
                    }
                    this.$nextTick(() => {
                        this.$refs[this.refNames[index]][0].focus()
                        this.$emit('currentFocusIndexChange', index)
                    })
                }
            },
            propData (index, value1, value2) {
                this.pwdTexts[index] = value1
                this.pwds.splice(index, 1, value2)
                this.$emit('pwdTextsChange', { index: index, value: value1 })
                this.$emit('pwdsChange', { index: index, value: value2 })
            },
            //清空
            clear(){
                this.pwds = ['', '', '', '', '', '']
                this.$emit('update:pwdTexts', ['', '', '', '', '', ''])
                this.$refs['input1'][0].focus()
                this.$emit('currentFocusIndexChange', 0)
            },
            deleteKey (index) {
                if (index !== 0) {
                    this.propData(index - 1, '', '')
                    this.$nextTick(() => {
                        this.$emit('currentFocusIndexChange', index - 1)
                        this.$refs[this.refNames[index - 1]][0].focus()
                    })
                }
            }
        }
    }
</script>
<style  lang="less" scoped>
    .inputs {
        height: 50px;
        display: inline-block;
        background: #fff;
        .input-wrap {
            height: 50px;
            line-height: 50px;
            width: 50px;
            font-size: 16px;
            text-align: center;
            flex-grow: 0;
            flex-shrink: 1;
            border: 1px solid #ddd;
            border-right: none;
            box-sizing: border-box;
            float: left;
            input {
                outline: none;
                border: none;
                height: 40px;
                line-height: 40px;
                font-size: 16px;
                width: 100%;
                text-align: center;
                padding: 0;
            }
        }
        .fousinput{
            border: 2px solid #be9f79!important;
        }
        .fousinput:last-child{
            border: 2px solid #be9f79!important;
        }
        .input-wrap:last-child{
            border-right: 1px solid #ddd;
        }
    }
</style>
