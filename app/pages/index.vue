<template>
    <div class="text-sky-950">
        <div class="p-4 flex justify-between fixed z-50 w-full bg-white items-center">
            <div>
                <p class="font-bold text-sky-950 text-4xl font-sans"><span class="relative after:absolute after:content-[''] after:h-1 after:w-full after:bg-sky-500 after:bottom-px after:left-0">M</span>yname</p>
            <p class="text-sky-400 mt-3 font-light">my city</p>
            </div>
            <!-- <button><Icon name="material-symbols:menu" size="2em"></Icon></button> -->
             <div class="invisible md:visible flex gap-4 items-center h-full">
                <a class="font-bold flex items-center gap-2 text-xl hover:text-sky-500" href="tel:1234123123"><Icon name="material-symbols:phone-enabled" ></Icon> 1234 123 123</a> 
                <a href="mailto:myname@mydomain.com" class="bg-sky-500 text-white hover:bg-sky-600 px-8 py-4 rounded flex items-center justify-center gap-2"><Icon name="material-symbols:mail" ></Icon>Enquire</a>
            </div>
        </div>
        <div class="bg-1 bg-[25%] lg:bg-center bg-cover bg-1">
            <div class="flex flex-col min-h-screen  lg:grid lg:place-items-center max-w-screen-lg mx-auto">
                <div class="mt-auto lg:my-auto p-6 lg:ml-auto">
                    <div class="text-white my-drop-shadow">
                       <p class="text-4xl lg:text-6xl font-medium">My Name</p>
                    <p class="text-xl lg:text-2xl font-medium  mt-3">Focused on Clients,</p>
                    <p class="text-xl lg:text-2xl font-light">Driven by Results.</p>
                    <div class="flex text-sm lg:text-base font-light text mt-10 gap-2"><span>Licensed Sales Consultant</span><span>|</span><span>Some Company</span></div> 
                    </div>
                    
    
                    <div class="grid grid-cols-2 gap-2 mt-6 w-full max-w-[350px] lg:max-w-[500px] text-center">
                        <a href="tel:1234123123" class="bg-sky-500 hover:bg-sky-600 text-white px- py-4 rounded flex items-center justify-center gap-2"><Icon name="material-symbols:phone-enabled" ></Icon>Click to call</a>
                        <a href="mailto:myname@mydomain.com" class="bg-white hover:bg-gray-200 px-4 py-4 rounded flex items-center justify-center gap-2"><Icon name="material-symbols:mail" ></Icon>Enquire</a>
                        <a href="mailto:myname@mydomain.com" class="bg-white hover:bg-gray-200 px- py-4 rounded col-span-full ">Request Appraisal</a>
                    </div>
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
        <div class="min-h-screen relative bg-center bg-cover bg-2">
            <div class="bg-black/50 absolute inset-0  text-center text-balance  py-40 px-5 grid place-items-center">
                <div class="max-w-xl">
                    <p class="text-4xl leading-loose text-white"><span>What is your property</span><br><span class="font-handwritten text-sky-500 text-6xl">Worth?</span></p>
                <p class="text-xl text-white"><span class="font-bold">Looking to buy or sell a property?</span> Get in touch for a property appraisal highlighting the market value including recent sales, rental history, suburb report and more.</p>
                <div class="mt-10 flex justify-center">
                    <a href="mailto:myname@mydomain.com" class="bg-sky-500 hover:bg-sky-600 text-white px-4 py-4 md:py-4 rounded min-w-max text-center">Get Property Appraisal</a>
                </div>
                </div>
                
            </div>
        </div>
        <footer class="bg-gray-800 text-white">
            
            <div class="py-10 grid grid-cols-1">
                <p class="mx-auto font-bold text-white text-4xl font-sans"><span class="relative after:absolute after:content-[''] after:h-1 after:w-full after:bg-sky-500 after:bottom-px after:left-0">M</span>yname</p>
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
/* .bg-center bg-cover {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover
} */
.bg-1 {
    background-image: url('https://ik.imagekit.io/y3ayiqneqlr/misc/stock01.jpg?updatedAt=1736376865753')
}
.bg-2 {
    background-image: url('https://ik.imagekit.io/y3ayiqneqlr/misc/stock02.jpg?updatedAt=1736376488255')
}
.my-drop-shadow {
    filter: drop-shadow(0px 0px 4px #000000ad);
}
</style>