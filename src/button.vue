<template>
    <button class="g-button" id="g-button" :class="{[`icon-${iconPosition}`]: true}">
        <svg v-if="icon" class="icon" aria-hidden="true">
            <use :xlink:href=`#icon-${icon}`></use>
        </svg>
        <div class="content">
            <slot/>
        </div>
        {{iconPosition}}
    </button>
</template>

<script>
    export default {
        props: {
            icon: {
                type: String,
                default: 'a'
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
    .g-button {
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

    }
</style>


