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
        resizeType: 1,
        pasteType: 2,//0:禁止粘贴, 1:纯文本粘贴, 2:HTML粘贴
        allowImageUpload: true,
        formatUploadUrl: false,
        minHeight: 120,
        autoHeightMode: true,
        fixToolBar: true,
        fixToolBarWatchRef: '#wrapper',
        uploadJson: '/handler/upload-test?dir=image',
        uploadHeader:{
            corefx: 'mhalo'
        },
        imageSizeLimit: '2MB',
        items: KindEditor.Tools.All,
        cssData: 'body{font-size: 16px;line-height: 28px;}',
        afterChange: function(){
            console.info('afterChange')
        }
    }
})

</script>
 
<style scoped>
 
</style>