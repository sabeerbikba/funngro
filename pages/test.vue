<template>
    <div class="card">
        <div class="card-front">
            Front Side
        </div>
        <div class="card-back">
            Back Side
        </div>
    </div>
</template>

<style scoped>
.card {
    width: 200px;
    aspect-ratio: 1 / 1;
    perspective: 1000px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s ease-in-out;
}

.card:hover {
    transform: rotateY(180deg);
}

.card-front,
.card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    /* Hides the back when front is visible */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2em;
    font-weight: bold;
}

.card-front {
    background: lightblue;
}

.card-back {
    background: lightcoral;
    transform: rotateY(180deg);
}
</style>
