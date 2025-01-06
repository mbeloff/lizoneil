<template>
    <div class="text-sky-950">
        <div class="p-3 flex justify-between fixed z-50 w-full bg-white">
            <div>
                <p class="font-bold text-sky-950 text-4xl font-sans"><span class="relative after:absolute after:content-[''] after:h-1.5 after:w-full after:bg-sky-500 after:bottom-0 after:left-0">M</span>yname</p>
            <p class="text-sky-400 mt-3 font-light">my city</p>
            </div>
            <button><Icon name="material-symbols:menu" size="2em"></Icon></button>
        </div>
        <div class="bg-gray-200 flex flex-col min-h-screen bg-img bg-1">
            <div class="mt-auto p-6 ">
                <div class="text-white drop-shadow">
                   <p class="text-4xl font-medium">My Name</p>
                <p class="text-xl font-medium  mt-3">Focused on Clients,</p>
                <p class="text-xl font-light">Driven by Results.</p>
                <div class="flex text-sm font-light text mt-10 gap-2"><span>Licensed Sales Consultant</span><span>|</span><span>Some Company</span></div> 
                </div>
                

                <div class="grid grid-cols-2 gap-2 mt-6 max-w-[350px]">
                    <button class="bg-sky-500 text-white px-4 py-4 rounded flex items-center justify-center gap-2"><Icon name="material-symbols:phone-enabled" ></Icon>Click to call</button><button class="bg-white px-4 py-4 rounded flex items-center justify-center gap-2"><Icon name="material-symbols:mail" ></Icon>Enquire</button><button class="bg-white px-4 py-4 rounded col-span-full">Request Appraisal</button>
                </div>
            </div>
        </div>
        <div class="bg-white">
            <div class="py-16 md:py-40 px-10 grid gap-y-10 gap-x-4 grid-cols-1 md:grid-cols-3 text-3xl text-center text-balance">
                <p>$45M <br> in Total Sales Value</p>
                <p>Rising Star <br> <span class="text-sm">Canterbury top Rising Star 2019-2020</span></p>
                <p>87 <br> <span class="text-sm">Properties Sold</span></p>
            </div>
        </div>
        <div class="min-h-screen relative bg-img bg-2">
            <div class="bg-black/50 absolute inset-0  text-center text-balance  py-40 px-5 grid place-items-center">
                <div>
                    <p class="text-4xl leading-loose text-white"><span>What is your property</span><br><span class="font-handwritten text-sky-500 text-6xl">Worth?</span></p>
                <p class="text-xl text-white"><span class="font-bold">Looking to buy or sell a property?</span> Get in touch for a property appraisal highlighting the market value including recent sales, rental history, suburb report and more.</p>
                <div class="mt-10 flex justify-center">
                    <button class="bg-sky-500 text-white px-4 py-4 md:py-4 rounded min-w-max">Get Property Appraisal</button>
                </div>
                </div>
                
            </div>
        </div>
        <footer class="bg-gray-800 text-white">
            
            <div class="py-10 grid grid-cols-1">
                <p class="mx-auto font-bold text-white text-4xl font-sans"><span class="relative after:absolute after:content-[''] after:h-1.5 after:w-full after:bg-sky-500 after:bottom-0 after:left-0">M</span>yname</p>
            <div class="grid grid-cols-3 max-w-max gap-4 mx-auto mt-4 ">
                <Icon class="hover:text-blue-500" name="mdi:facebook-box" size="1.25em"></Icon>
                <Icon class="hover:text-blue-500" name="mdi:instagram" size="1.25em"></Icon>
                <Icon class="hover:text-blue-500" name="mdi:linkedin" size="1.25em"></Icon>
            </div>
            </div>
            <p class="text-center flex items-center justify-center text-xs bg-black/20 text-gray-500 py-2">&copy Myname 2025</p>
        </footer>
    </div>
</template>

<script setup>

</script>

<style lang="postcss" scoped>
/* @theme {
    --font-display: "Fira Sans", "sans-serif"
} */
.bg-img {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover
}
.bg-1 {
    background-image: url('https://picsum.photos/seed/redrocket1/400/710')
}
.bg-2 {
    background-image: url('https://picsum.photos/seed/family/400/710')
}
</style>