<script setup>
    import { ref } from 'vue'
    import { useSidenavStore } from '@/stores/sidenav';
    import { useDataStore } from '@/stores/data';
    const sidenavStore = useSidenavStore();
    const dataStore = useDataStore();

    const isPressed = ref(false)
    const copyText = ref("Copy code")
    

    const handleCloseSidenav = () => {
        sidenavStore.isActive = !sidenavStore.isActive
        dataStore.activeIndex = null
    }

    const copyHtmlCode = () => {
        copyToClipboard(dataStore.animationSelected.html)
    }

    const copyCssCode = () => {
        copyToClipboard(dataStore.animationSelected.css)
    }

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            copyText.value = "copied!"
        // Optionally, show a success message to the user
        })
        .catch((error) => {
            console.error('Failed to copy text to clipboard:', error);
        // Optionally, show an error message to the user
        });
    };
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
        <!-- make as component -->
        <div class="sidenav-selected-animation-html">
            <div class="sidenav-selected-animation-code-container">
                <div class="sidenav-code-header">
                        <span>HTML</span>
                        <button @click="copyHtmlCode">{{copyText}}</button>
                    </div>
                <div class="sidenav-selected-animation-html-code">
                    <span>
                        {{ dataStore.animationSelected.html}}
                    </span>
                </div>
            </div>
        </div>
        <div class="sidenav-selected-animation-css">
            <div class="sidenav-selected-animation-code-container">
                <div class="sidenav-code-header">
                    <span>CSS</span>
                    <button @click="copyCssCode">
                        <span>&#x2398;</span>
                        <span>{{copyText}}</span>
                    </button>
                </div>
                <pre class="sidenav-selected-animation-css-code">
                    {{ dataStore.animationSelected.css}}
                </pre>
            </div>
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
        box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
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

    .sidenav-code-header {
        background-color: #406767;
        font-size: 12px;
        padding: 2px 14px;
        display: flex;
        justify-content: space-between;
        color: #fff;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

    .sidenav-code-header button {
        cursor: pointer;
    }

    .sidenav-selected-animation-html-code,
    .sidenav-selected-animation-css-code
     {
        background-color: #213f3f;
        font-size: 12px;
        color: #fff;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
    }

    .sidenav-selected-animation-html-code {
        text-align: center;
    }

    .sidenav-selected-animation-html-code {
        padding: 8px;
    }

    .sidenav-selected-animation-css-code {
        text-align: left;
        white-space: pre-line;
        padding: 0 14px;
    }

</style>
