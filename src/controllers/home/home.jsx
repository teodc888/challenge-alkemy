import React from "react";
import CardSpoonacular from "../card/card";
import Search from "../search/search";
export default function Home() {
    return (
        <>
        <div>
            <h1>WELCOME</h1>
            <Search  />
        </div>

            <CardSpoonacular />
        </>
    );
    }