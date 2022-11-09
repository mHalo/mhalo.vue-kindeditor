<template>
  <div :id="editorId" style="visibility: hidden;"></div>
</template>
<script setup>
import KindEditor from "mhalo.kindeditor";
import { onActivated, onDeactivated, onMounted, reactive, watch } from "vue";
const updateEmit = defineEmits(["update:modelValue"]);
var editor = null;
const props = defineProps({
  id: {
    type: String,
    required: false,
    default: () => "ke_" + Math.random().toString().substring(2),
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: String,
    required: true,
  },
  configs: {
    type: Object,
    default: () => ({}),
  },
});
const originalAfterBlurEvt = props.configs?.afterBlur;
const originalAfterChangeEvt = props.configs?.afterChange;
const editorId = props.id;
var options = Object.assign(
  {
    loadStyleMode: false,
    resizeType: 1,
    pasteType: 2,
    newlineTag: 'p'
  },
  props.configs,
  {
    allowFlashUpload: false,
    allowFileManager: false,
    afterBlur: function () {
      this.sync();
      originalAfterBlurEvt && originalAfterBlurEvt.call(this);
    },
    afterChange: function () {
      if (editor) {
        updateEmit("update:modelValue", editor.html());
      }
      originalAfterChangeEvt && originalAfterChangeEvt.call(this);
    },
  }
);

watch(
  () => props.readonly,
  (val) => {
    editor && editor.readonly(val);
  }
);

onMounted(() => {
  KindEditor.remove("#" + editorId);
  editor = KindEditor.create("#" + editorId, options);
  props.modelValue && editor.html(props.modelValue);
});
onDeactivated(() => {
  KindEditor.remove("#" + editorId);
  editor && editor.remove();
  editor = null;
});
onActivated(() => {
  KindEditor.remove("#" + editorId);
  editor = KindEditor.create("#" + editorId, options);
  props.modelValue && editor.html(props.modelValue);
});
</script>
