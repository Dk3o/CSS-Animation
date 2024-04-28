<script setup>
    import { useSidenavStore } from '@/stores/sidenav';
    import { useDataStore } from '@/stores/data';
    const sidenavStore = useSidenavStore();
    const dataStore = useDataStore();
    const handleCloseSidenav = () => {
        sidenavStore.isActive = !sidenavStore.isActive
    }

</script>

<template>
    <div class="sidenav" v-if="sidenavStore.isActive">
        <div class="sidenav-header">
            <span class="sidenav-header-animation-name">
                {{ dataStore.animationSelected.id }}
            </span>
            <button class="sidenav-close" @click="handleCloseSidenav">
                X
            </button>
        </div>
        <div class="sidenav-selected-animation-html">
            <div class="sidenav-selected-animation-html-code">
                <span>
                    {{ dataStore.animationSelected.html}}
                </span>
            </div>
        </div>
        <div class="sidenav-selected-animation-css">
            <pre class="sidenav-selected-animation-css-code">
                {{ dataStore.animationSelected.css}}
            </pre>
        </div>
    </div>
</template>

<style scoped>
    .sidenav {
        height: 100%;
        width: 320px;
        padding-bottom: 18px;
        background: #fff;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 10;
        display: flex;
        gap: 18px;
        flex-direction: column;
        overflow-y: auto;
    }

    .sidenav-header {
        height: 64px;
        display: flex;
        align-items: center;
        padding: 2px 8px;
        border-bottom: 1px solid #d9d9d9;
    }

    .sidenav-header-animation-name {
        color: #274949;
    }

    .sidenav-close {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        margin-left: auto;
    }

    .sidenav-close:hover {
        /* background-color: #709393; */
        background-color: #4f9393;
        color: #fff;
        cursor: pointer;
    }

    .sidenav-selected-animation-html,
    .sidenav-selected-animation-css
    {
        padding: 0 8px;
    }

    .sidenav-selected-animation-html-code,
    .sidenav-selected-animation-css-code
     {
        background-color: #213f3f;
        font-size: 12px;
        color: #fff;
        border-radius: 6px;
    }

    .sidenav-selected-animation-html-code {
        text-align: center;
    }

    .sidenav-selected-animation-html-code {
        padding: 8px;
    }

    .sidenav-selected-animation-css-code {
        padding: 0px 14px;
        text-align: left;
        white-space: pre-line;
    }


</style>