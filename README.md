# MHalo.Vue-KindEditor

a component use mhalo.kindeditor for vue3.

## 更新日志

v1.0.3 (2022-11-03)  
1. 更新依赖库

v1.0.2 (2022-11-02)  
1. 优化组件加载编辑器样式方式，无需手动设置

## 安装
```
pnpm i mhalo.vue-kindeditor
```

## 使用
```
import { createApp } from 'vue'
import App from './App.vue'

import KindEditor from 'mhalo.vue-kindeditor'

createApp(App)
.use(KindEditor,{ 
    /**默认为VKindEditor,此处可自定义 */ 
    name: 'VEditor' 
})
.mount('#app')

```

```
<template>
    <div id="wrapper">
        <VEditor v-model="editor.content" :configs="editor.configs"></VEditor>
    </div>
</template>

<script setup>
const editor = $ref({
    content: Array.from({length: 5}).map(function(o,i){ return  '<p>'+ i +'</p>' }).join(""),
    configs: {
        resizeType: 1,
        pasteType: 2,//0:禁止粘贴, 1:纯文本粘贴, 2:HTML粘贴
        allowPreviewEmoticons: false,
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

```
