<script setup lang="ts">
const isNavClosed = useState('isNavClose', () => false);

const toggle = () => {
    isNavClosed.value = !isNavClosed.value;
};
</script>

<template>
    <div class="lines-button hidden max-lg:inline-block" :class="[{ close: isNavClosed }]" @click="toggle">
        <span class="lines" />
    </div>
</template>


<style scoped>
.lines-button {
    padding: 2rem 1rem;
    transition: 0.3s;
    cursor: pointer;
    user-select: none;
    border-radius: 0.57143rem;
}

.lines-button:hover {
    opacity: 1;
}

.lines-button:active {
    transition: 0;
}

.lines {
    display: inline-block;
    width: 2rem;
    height: 0.2rem;
    background: #ecf0f1;
    border-radius: 0.15rem;
    transition: 0.3s;
    position: relative;
}

.lines:before,
.lines:after {
    display: inline-block;
    width: 2rem;
    height: 0.2rem;
    background: #ecf0f1;
    border-radius: 0.15rem;
    transition: 0.3s;
    position: absolute;
    left: 0;
    content: '';
    transform-origin: 0.15rem center;
}

.lines:before {
    top: 0.6rem;
}

.lines:after {
    top: -0.6rem;
}

.lines-button:hover .lines:before {
    top: 0.7rem;
}

.lines-button:hover .lines:after {
    top: -0.7rem;
}

.lines-button.close .lines {
    background: transparent;
}

.lines-button.close .lines:before,
.lines-button.close .lines:after {
    top: 0;
    transform-origin: 50% 50%;
    width: 2rem;
}

.lines-button.close .lines:before {
    transform: rotate3d(0, 0, 1, 45deg);
}

.lines-button.close .lines:after {
    transform: rotate3d(0, 0, 1, -45deg);
}
</style>
