"use server";

import { cookies } from "next/headers";

export async function login(password) {
    const correctPassword = process.env.AUTH_PASSWORD;

    if (!correctPassword) {
        throw new Error("A senha não foi configurada corretamente.");
    }

    if (password === correctPassword) {
        cookies().set("auth", "true", { httpOnly: true, maxAge: 3600 });
        return { success: true };
    } else {
        return { success: false, message: "Senha incorreta!" };
    }
}

export async function isAuthenticated() {
    return cookies().get("auth")?.value === "true";
}

export async function logout() {
    cookies().delete("auth");
}
