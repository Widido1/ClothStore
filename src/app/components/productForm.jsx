"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { GET, POST } from "../api/products/route";
import { prisma } from "@/libs/prisma";

import addProduct from "../actions/addProduct";

const imageStyle = {
    borderRadius: "25%",
    width: "275px",
    height: "275px",
    border: "3px solid #612c00"

}
async function getData(name, price, stock, description, img, available){
    const res = await fetch("/api/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name, price, stock, description, img, available}),
    });
    if(!res.ok){
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

