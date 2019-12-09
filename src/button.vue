<template>
    <button class="l-button" id="l-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
        <l-icon v-if="icon && !loading" class="icon" :name="icon"></l-icon>
        <l-icon v-if="loading" class="loading icon" name="load"></l-icon>
        <div class="content">
            <slot>按钮</slot>
        </div>
    </button>
</template>

<script>
    export default {
        props: {
            icon: {},
            loading:{
                type:Boolean,
                default: false
            },
            iconPosition: {
                type: String,
                default: "left",
                validator(value) {
                    return value === "left" || value === "right";
                }

            }
        }
    }
</script>
<style lang="scss">
    @keyframes spin {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
    .l-button {
        height: var(--button-height);
        padding: 0 1em;
        /*font: inherit;*/
        opacity: 1;
        font-size: var(--font-size);
        border-radius: var(--border-radius);
        border: none;
        background: var(--button-bg);
        min-width: var(--button-width);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;

        &:hover {
            border-color: var(--border-color-hover);
        }

        &:active {
            background: var(--button-active-bg);
        }

        &:focus {
            outline: none;
        }

        > .icon {
            order: 1;
            margin-right: 0.3em;
        }

        > .content {
            order: 2;
        }

        &.icon-right {
            > .icon {
                order: 2;
                margin: 0 0 0 0.3em;
            }

            > .content {
                order: 1;
            }
        }
        .loading{
            animation: spin 1s infinite linear;
        }

    }
</style>


