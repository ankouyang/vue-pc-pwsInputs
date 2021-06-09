<template>
    <div class="key-container">
        <div class="keyboard" :class="{'keyShow':showKeyboard}"  @click.stop.prevent="handleKeyPress">
            <div class="key-row">
                <div class="key-cell" data-num="1" >1</div>
                <div class="key-cell" data-num="2">2</div>
                <div class="key-cell" data-num="3">3</div>
            </div>
            <div class="key-row">
                <div class="key-cell" data-num="4">4</div>
                <div class="key-cell" data-num="5">5</div>
                <div class="key-cell" data-num="6">6</div>
            </div>
            <div class="key-row">
                <div class="key-cell" data-num="7">7</div>
                <div class="key-cell" data-num="8">8</div>
                <div class="key-cell" data-num="9">9</div>
            </div>
            <div class="key-row">
                <div class="key-cell">
                    关闭
                </div>
                <div class="key-cell" data-num="0">0</div>
                <div class="key-cell" @click.stop.prevent="handleDeleteKey">
                       删除
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'PhonePassword',
        data () {
            return {
                num: '',
                showKeyboard: false
            }
        },
        props: {
            fatherNum: {
                type: String
            },
            show: {
                type: Boolean
            }
        },
        watch: {
            fatherNum (val) {
                this.num = val
            },
            show (val) {
                this.showKeyboard = val
            }
        },
        methods: {
            // 处理按键
            handleKeyPress (e) {
                const num = e.target.dataset.num
                if (!num) return false
                this.handleNumberKey(num)
            },
            // 处理删除键
            handleDeleteKey () {
                const S = this.num
                if (!S.length) return false
                this.$emit('deleteEvent')
            },
            // 处理数字
            handleNumberKey (num) {
                this.$emit('numberEvent', num)
            }
        }
    }
</script>
<style lang="less" scoped>
.key-container {
        font-size: 0.74667rem;
        margin-top: 50px;
        width: 100%;
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        .keyboard {
            transition: all .2s ease;
            position: fixed;
            bottom: 0px;
            left: 0;
            height: 240px;
            width: 100%;
            background-color: #fff;
            .key-row {
                display: flex;
                display: -webkit-flex;
                position: relative;
                height: 60px;
                line-height: 60px;

                &::before {
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 0;
                    right: 0;
                    height: 1px;
                    border-top: 1px solid #d5d5d6;
                    color: #d5d5d6;
                    -webkit-transform-origin: 0 0;
                    transform-origin: 0 0;
                    -webkit-transform: scaleY(0.5);
                    transform: scaleY(0.5);
                }
            }

            .key-cell {
                flex: 1;
                -webkit-box-flex: 1;
                text-align: center;
                position: relative;

                &::after {
                    content: "";
                    position: absolute;
                    overflow: hidden;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    height: 200%;
                    border-right: 1px solid #d5d5d6;
                    color: #d5d5d6;
                    -webkit-transform-origin: 0 0;
                    transform-origin: 0 0;
                    -webkit-transform: scaleY(0.5);
                    transform: scaleY(0.5   );
                    font-size: 14px;
                }

                &:nth-last-child(1)::after {
                    border-right: 0;
                }
            }

            .disabled {
                background: rgba(0, 0, 0, 0.2);
            }

            .key-confirm {
                position: absolute;
                text-align: center;
                height: 118px;
                width: 25%;
                line-height: 118px;
                background: #fff;
                z-index: 5;
                right: 0;
                bottom: 1px;
            }

            .key-clear {
                position: absolute;
                text-align: center;
                height: 118px;
                width: 25%;
                line-height: 118px;
                background: #fff;
                z-index: 5;
                right: 0;
                top: 1px;
            }
        }
        .keyShow{
            transition: all .2s ease;
            bottom: 0;
        }
    }
</style>
