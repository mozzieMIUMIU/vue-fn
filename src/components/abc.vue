<template>
    <div>
        自定义啊：{{test}}
    </div>
</template>
<script>
export default {
    props:['st'],
    data(){
        return{
            test:123
        }
    },
    mounted(){
        this.test = this.st ? this.st : '等待输出'
    },
    methods:{
        
    }
}
</script>
