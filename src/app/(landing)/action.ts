"use server"

import axios from "axios";
import { z } from "zod";
import { createServerAction } from "zsa";

const FORMLE_FORM_LINK = `https://formle.dev/~/HRztghA4kfYg`;

export const saveEmailAction = createServerAction()
    .input(
        z.object({
            email: z.string().email(),
        })
    )
    .handler(async ({ input }) => {
        console.log(input)
        try {
            const response = await axios.post(
                FORMLE_FORM_LINK,
                { email: input.email },
                { headers: { "Content-Type": "application/json" } }
            );
            return response.data.success ?? false;
        } catch (error) {
            console.error("Error saving email:", error);
            return false;
        }
    });