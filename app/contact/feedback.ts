import { z } from "zod";
import { feedbackSchema } from "../common/utils/schema";

export const feedbackMessage = async (values: z.infer<typeof feedbackSchema>) => {
    try 
    {
        const res = await fetch('/api/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
        });
    
        if (!res.ok) {
            throw new Error("Failed to send feedback");
        }
        return await res.json();
    }
        catch(error) {
            
            throw error;
        }

    }

    
   
