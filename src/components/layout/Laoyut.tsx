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
            <Grid container spacing={2} paddingX={5} marginTop={2}>
                <Grid item md={3}>
                    <Sidebar />
                </Grid>
                <Grid item md={9}>
                    {children}
                </Grid>
            </Grid>
        </>
    );
};

