import { component$ } from '@builder.io/qwik';


export default component$(() => {
  

    return (
        <header class="text-gray-600 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span class="ml-3 text-xl">Ardrive Public Gallery</span>
                </a>
                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a href="#" class="mr-5 hover:text-gray-900">First Link</a>
                    <a href="#" class="mr-5 hover:text-gray-900">Second Link</a>
                    <a href="#" class="mr-5 hover:text-gray-900">Third Link</a>
                    <a href="#" class="mr-5 hover:text-gray-900">Fourth Link</a>
                </nav>
            </div>
        </header>
        );
});
