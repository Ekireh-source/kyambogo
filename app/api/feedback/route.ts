import { Hono } from 'hono'
import { feedback } from '@/db/schema';
import { prettyJSON } from 'hono/pretty-json'
import { validator } from 'hono/validator'
import z, { ZodIssue } from "zod"
import { feedbackSchema } from '@/app/common/utils/schema';
import { HTTPException } from 'hono/http-exception';
import { db } from '@/db';
import { handle } from 'hono/vercel'


export type Env = {
    DATABASE_URL: string
}

type Context = {
    Bindings:Env,
	Variables: {
		user: typeof feedback.$inferSelect;
	}
}



const app = new Hono<Context>().basePath('/api')
app.use(prettyJSON())


app.post("/feedback",validator('json', async (value: z.infer<typeof feedbackSchema>, c) => {

    const parsed = feedbackSchema.safeParse(value)

    if (!parsed.success) {
        throw new HTTPException(401, { res: c.json({message: 'Unauthorized'}, 401)  })
    }
    
    return parsed.data

}), async (c) => {

    const { name, email, message} = c.req.valid('json');

	


    
    const newFeedback = await db.insert(feedback).values({
		name: name,
		email: email,
		message: message,
	})
    

    return c.json({success : "message sent succesfully", newFeedback});
})


export const POST =  handle(app)