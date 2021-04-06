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

<style lang="scss">
@import "~@styles/reset.scss";
body {
    background: $bg-color;
}
</style>
