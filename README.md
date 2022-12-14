# MHalo.Vue-KindEditor

a component use mhalo.kindeditor for vue3.

> 注意：组件已强制禁用了flash及fileManager，编辑器初始化时，传入参数/* allowFlashUpload: true, allowFileManager: true, */ 时是无法生效，请注意此限制。  
如若受此影响，可以基于[mhalo.kindeditor](https://www.npmjs.com/package/mhalo.kindeditor)自行构建或修改。


## 更新日志

v1.2.3 (2022-11-10)  
1. 修复页面存在切换动画的情况下，onDeactivated时编辑器文本展示异常的bug
2. 修复页面切换editor为null时报错的异常

v1.2.0 (2022-11-04)  
1. 更新编辑器默认配置参数

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
        <VEditor v-model="editor.content" 
        :readonly="editor.readonly"
        :configs="editor.configs"></VEditor>
    </div>
</template>

<script setup>
const editor = $ref({
    content: Array.from({length: 5}).map(function(o,i){ return  '<p>'+ i +'</p>' }).join(""),
    readonly: false,
    configs: {
        allowImageUpload: true,
        formatUploadUrl: true,
        minHeight: 120,
        autoHeightMode: false,
        fixToolBar: true, 
        fixToolBarWatchRef: '#layoutBody',
        uploadJson: '/handler/upload-test?dir=image',
        uploadHeader:{
            corefx: 'mhalo'
        },
        imageSizeLimit: '2MB',
        items: KindEditor.Tools.Mini,
        cssData: 'body{font-size: 16px;line-height: 28px;}',
        afterChange: function(){
            console.info('afterChange')
        }
    }
})
</script>

```
