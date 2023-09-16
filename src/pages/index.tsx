import Head from "next/head";
import Home from "@/components/screens/home/Home";
import About from "@/components/screens/about/About";
import Degustation from "@/components/screens/degustation/Degustation";
import Contacts from "@/components/screens/contacts/Contacts";
import Gallery from "@/components/screens/gallery/Gallery";
import Header from "@/components/screens/header/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Degustation />
      <Contacts />
      <Gallery />
    </>
  );
}
