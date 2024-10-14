"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export function HeroParallaxDemo() {
    return <HeroParallax products={products} />;
}
export const products = [
    {
        title: "Moonbeam",
        link: "https://gomoonbeam.com",
        thumbnail:
            "/bgas.jpg",
    },
    {
        title: "Cursor",
        link: "https://cursor.so",
        thumbnail:
            "/bg.jpg",
    },
    {
        title: "Rogue",
        link: "https://userogue.com",
        thumbnail:
            "/carbg.jpg",
    },

    {
        title: "Editorially",
        link: "https://editorially.org",
        thumbnail:
            "/dd.jpg",
    },
    {
        title: "Editrix AI",
        link: "https://editrix.ai",
        thumbnail:
            "/dj.jpg",
    },
    {
        title: "Pixel Perfect",
        link: "https://app.pixelperfect.quest",
        thumbnail:
            "/bg.jpg",
    },

    {
        title: "Algochurn",
        link: "https://algochurn.com",
        thumbnail:
            "/tsbg.jpg",
    },
    {
        title: "Aceternity UI",
        link: "https://ui.aceternity.com",
        thumbnail:
           "/dd.jpg",
    },
    {
        title: "Tailwind Master Kit",
        link: "https://tailwindmasterkit.com",
        thumbnail:
        "/bgas.jpg",
    },
    {
        title: "SmartBridge",
        link: "https://smartbridgetech.com",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
    },
    {
        title: "Renderwork Studio",
        link: "https://renderwork.studio",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
    },

    {
        title: "Creme Digital",
        link: "https://cremedigital.com",
        thumbnail:
        "/bg.jpg",
    },
    {
        title: "Golden Bells Academy",
        link: "https://goldenbellsacademy.com",
        thumbnail:
        "/bgas.jpg",
    },
    {
        title: "Invoker Labs",
        link: "https://invoker.lol",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/invoker.png",
    },
    {
        title: "E Free Invoice",
        link: "https://efreeinvoice.com",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
    },
];
