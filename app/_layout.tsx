import { AuthSessionProvider } from "@/providers/authctx";
import { Slot } from "expo-router";
import React from "react";

export default function RootRootLayout() {
    return (
        <AuthSessionProvider>
            <Slot />
        </AuthSessionProvider>
    )
}
