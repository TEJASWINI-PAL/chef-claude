
import {HfInference} from "@huggingface/inference"
const SYSTEM_PROMPT=`You are an assistant`;

const hf=new HfInference(process.env.REACT_APP_HF_ACCESS_TOKEN)

export async function getRecipeFromChefClaude(ingredientsArr) {
    const ingredientsString=ingredientsArr.join(",") 
    const msge=await hf.chatCompletion({
        model:"mistralai/Mistral-Nemo-Instruct-2407",
        max_tokens:1024,
        system:SYSTEM_PROMPT,
        messages:[
            {role:"user",content:`i have ${ingredientsString}. Please give me a recipe you'd recommend I make`},
        ]
    });
     return msge.choices[0].message.content;
}
