<template>
    <h2>TEST</h2>
    <div id="wrapper">
        <VEditor v-model="editor.content" :configs="editor.configs"></VEditor>
    </div>
</template>
 
<script setup>
import { reactive } from "vue"
const editor = reactive({
    content: Array.from({length: 5}).map(function(o,i){ return  '<p>'+ i +'</p>' }).join(""),
    configs: {
        allowImageUpload: true,
        formatUploadUrl: true,
        minHeight: 120,
        autoHeightMode: false,
        fixToolBar: true,
        // fixToolBarWatchRef: '#layoutBody',
        uploadJson: '/handler/upload-test',
        uploadHeader:{
            corefx: 'mhalo'
        },
        extraFileUploadParams:{
            'paramA': 'A'
        },
        uploadResponseFilter: function(response){
            return response.data
        },
        imageSizeLimit: '2MB',
        items: KindEditor.Tools.Normal,
        cssData: 'body{font-size: 16px;line-height: 28px;}',
        afterChange: function(){
            console.info('afterChange')
        }
    }
})

</script>
 
<style scoped>
 
</style>