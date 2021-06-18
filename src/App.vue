<template>
    <div>
        <Suspense>
            <template #default>
                <router-view />
            </template>
            <template #fallback> Loading.... </template>
        </Suspense>
    </div>
</template>

<script>
import { defineComponent, onMounted, getCurrentInstance } from "vue";

export default defineComponent({
    name: "App",
    setup() {
        onMounted(() => {});
    },
});
</script>

<style lang="postcss" scoped>
/* test css */
/* @import "~@styles/global.css";
div {
    background: var(--t-color);
} */
</style>
