<template>
    <div class="">
        <div class="p-3 flex justify-between">
            <div>
                <p class="font-bold text-blue-950 text-4xl font-sans"><span class="relative after:absolute after:content-[''] after:h-1.5 after:w-full after:bg-blue-500 after:bottom-0 after:left-0">P</span>laceholder</p>
            <p class="text-blue-400 mt-3 font-light">Text</p>
            </div>
            <button><Icon name="material-symbols:menu" size="2em"></Icon></button>
        </div>
        <div class="bg-gray-200 min-h-screen">
            <div class="mt-auto p-6">
                <p class="text-4xl font-medium">Liz O'neil</p>
                <p class="text-xl font-medium  mt-3">Focus on Clients,</p>
                <p class="text-xl font-light">Driven by Results.</p>
                <div class="flex text-sm font-light text mt-10 gap-2"><span>Licensed Sales Consultant</span><span>|</span><span>Some Company</span></div>

                <div class="grid grid-cols-2 gap-2 mt-6 max-w-[350px]">
                    <button class="bg-white px-4 py-2 rounded ">Click to call</button><button class="bg-white px-4 py-2 rounded ">Enquire</button><button class="bg-white px-4 py-2 rounded col-span-full">Request Appraisal</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="postcss" scoped>
@theme {
    --font-display: "Poppins", "sans-serif"
}
</style>