import { Navbar } from "../extensions/header";
import { SectionOne } from "./components/section_one";
import { SectionThree } from "./components/section_three";
import { SectionTwo } from "./components/section_two";

export const HomeScreen = ()=>{
    return (
        <>
        <Navbar/>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        </>
    );
};