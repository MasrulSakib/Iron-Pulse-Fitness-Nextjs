'use client'
import { Provider } from "react-redux";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Brands from "./components/Brands/Brands";
import Classes from "./components/Classes/Classes";
import Hero from "./components/Hero/Hero";
import Membership from "./components/Membership/Membership";
import Team from "./components/Team/Team";
import Testimonials from "./components/Testimonials/Testimonials";
import { store } from "./store";

export default function Home() {
  return (
    <Provider store={store}>
      <main>
        <Hero></Hero>
        <About></About>
        <Classes></Classes>
        <Team></Team>
        <Membership></Membership>
        <Testimonials></Testimonials>
        <Blog></Blog>
        <Brands></Brands>
        {/* <div className="h-[3000px]"></div> */}
      </main>
    </Provider>
  );
}
