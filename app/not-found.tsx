"use client";
import Box from "@/components/Box";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
  const router = useRouter();
  return (
    <>
      <Box className="flex flex-col items-center justify-center w-full h-full">
        <p>Go where songs let you go...</p>
        <div className="m-5"></div>
        <Button onClick={() => router.push("/")}>
          <h1>Home</h1>
        </Button>
      </Box>
    </>
  );
};

export default NotFound;
