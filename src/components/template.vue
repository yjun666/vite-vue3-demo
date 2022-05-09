<template>
	<div class="template">
		{{'template'}}
        <br>
        当前打包环境----{{nodeenv}}
	</div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, defineExpose, defineComponent, onMounted, ref, reactive, shallowRef, triggerRef, computed } from 'vue';

const nodeenv = ref(import.meta.env.VITE_APP_BASE_NODE_ENV);

const loadFun = () => {
	console.log('load成功');
};
onMounted(() => {
	window.addEventListener('unload', loadFun);
});
</script>
<style lang="scss" scoped>
</style>
