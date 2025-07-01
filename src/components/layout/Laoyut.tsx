import Grid from "@mui/material/Grid";
import { Header } from "./header/Header";
import { Sidebar } from "./sidebar/Sidebar";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export const Laoyut: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <Grid container spacing={2} marginX={5} marginTop={2}>
                <Grid item md={2}>
                    <Sidebar />
                </Grid>
                <Grid item md={10}>
                    {children}
                </Grid>
            </Grid>
        </>
    );
};
