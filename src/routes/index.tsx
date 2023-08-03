import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Header from '~/components/header.tsx';
import Tengah from '~/components/tengah.tsx';

export default component$(() => {
  return (
    <>
<Header/>
    <Tengah/>
    </>
  );
});

export const head: DocumentHead = {
  title: "Ardrive public gallery",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
