import { useState } from "react";
import { Modal } from "./components/modal/Modal";
import { Header } from "./header/Header";
import { RoutesComponent } from "./routes/Routes";

export const Main = () => {
    
    return (
        <>
            <Header />
            <RoutesComponent />
        </>
    )
}