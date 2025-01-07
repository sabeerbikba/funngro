<template>
    <div class="w-full max-w-80 min-w-60 pr-3 align-top whitespace-normal text-left h-full inline-block relative"
         role="group">
        <div class="bg-[#121e2c] h-full border border-[#dcf8db] rounded-[15px] flex flex-col justify-start min-h-[17.1875rem] p-6 py-6 px-4.5"
            aria-hidden="true">
            <slot />
    </div>
    </div>
</template>
<!-- :aria-label="`${index + 1} of ${funngroMembers.length}`" -->